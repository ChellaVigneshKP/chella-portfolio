"use client"
import React, { useRef, useEffect, useState } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

// Custom hook to track screen size
function useIsSmallScreen() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 600px)'); // Define small screen size here
    setIsSmallScreen(mediaQuery.matches);

    const handleResize = () => setIsSmallScreen(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleResize);

    return () => mediaQuery.removeEventListener('change', handleResize);
  }, []);

  return isSmallScreen;
}

export default function Spellbook(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('models/Book/spellbook-transformed.glb');
  const { actions } = useAnimations(animations, group);
  const isSmallScreen = useIsSmallScreen();

  useEffect(() => {
    if (actions) {
      const action = actions['ArmatureAction'];
      if (action) {
        action.play();
        action.timeScale = 0.5; // Adjust the playback speed here (0.5 is half speed)
      }
    }
  }, [actions]);

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      rotation={[0, 0.8, 0]}
      position={isSmallScreen ? [-0.5, 1.4, 0] : [-0.5, 1.0, 0]} // Adjust position based on screen size
      scale={[0.6, 0.6, 0.6]}
    >
      <group name="Scene">
        <group name="Potion_Book_-_Stronberry_VS_Zomberry_|WIP|" rotation={[-Math.PI / 2, 0, 0]}>
          <primitive object={nodes.Bone_Armature} />
        </group>
        <skinnedMesh
          name="Cube_0"
          geometry={nodes.Cube_0.geometry}
          material={materials['Material.001']}
          skeleton={nodes.Cube_0.skeleton}
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </group>
    </group>
  );
}

useGLTF.preload('models/Book/spellbook-transformed.glb');