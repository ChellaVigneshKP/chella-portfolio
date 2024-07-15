"use client"
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function HatModel(props) {
  const { nodes, materials } = useGLTF('models/Hat/hat-transformed.glb')
  const modelRef = useRef();

  useFrame(() => {
    modelRef.current.rotation.y += 0.004;
  });
  return (
    <group {...props} 
    dispose={null}
    ref={modelRef}
    scale={[0.3, 0.3, 0.3]}
    position={[0, 0, 0]}
    rotation={[0.2, -0, 0]}
    >
      <mesh geometry={nodes.defaultMaterial.geometry} material={materials.lambert1} />
    </group>
  )
}

useGLTF.preload('models/Hat/hat-transformed.glb')
