"use client"
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';

export default function GirlModel(props) {
  const { nodes, materials } = useGLTF('models/Character/Girl-transformed.glb');
  const modelRef = useRef();
  useFrame((state, delta, xrframe) => {
    modelRef.current.position.y = -1 + Math.sin(state.clock.elapsedTime) * 0.15;
  })
  return (
    <group
      {...props}
      dispose={null}
      ref={modelRef}
      position={[-0.1, -1, 0]}
      scale={[0.6, 0.6, 0.6]}
      rotation={[0.35, -0.6, 0]}>
      <mesh geometry={nodes.Clothes.geometry} material={materials['Girl Cloth']} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Back_Pack.geometry} material={materials['Back Pack']} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Vents.geometry} material={materials['Lamp Vent']} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Candle.geometry} material={materials['Candle Base']} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Head_Gem.geometry} material={materials['Head Gem']} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Base.geometry} material={materials.Base} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Body.geometry} material={materials['Girl Body']} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Butterflies.geometry} material={materials.Butterfly} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Candle_Light.geometry} material={materials.Candle} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Lamp.geometry} material={materials.Lamp} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Spectacles.geometry} material={materials.Specs} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Book_Cover.geometry} material={materials['Book Cover']} position={[1.06, 3.05, -0.68]} rotation={[-0.802, 0.722, 0.38]} scale={3.003} />
      <mesh geometry={nodes.Book_Page.geometry} material={materials['Book Page']} position={[1.06, 3.05, -0.68]} rotation={[-0.802, 0.722, 0.38]} scale={3.003} />
    </group>
  )
}

useGLTF.preload('models/Character/Girl-transformed.glb')
