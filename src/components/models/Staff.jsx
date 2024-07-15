"use client"
import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('models/Staff/staff-transformed.glb')
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    if (actions) {
      actions['Float']?.play() // Replace 'AnimationName' with the name of your animation
    }
  }, [actions])

  return (
    <group ref={group} {...props} dispose={null}
      scale={[0.02, 0.02, 0.02]}
      position={[0, 0, 0]}
      rotation={[0.2, 0, 3.1]}
    >
      <group name="Scene">
        <group name="RootNode" rotation={[0, 0, 1.583]} scale={0.836}>
          <group name="group1" position={[-122.087, 0, 0]}>
            <group name="StaffMask2_low_Mask2_low" position={[2.36, 0, 32.164]}>
              <mesh name="StaffMask2_low_Mask2_low_StaffStaff1_0" geometry={nodes.StaffMask2_low_Mask2_low_StaffStaff1_0.geometry} material={materials.StaffStaff1} />
            </group>
            <group name="StaffMask_low_Mask_low" position={[2.36, 0, -32.164]}>
              <mesh name="StaffMask_low_Mask_low_StaffStaff1_0" geometry={nodes.StaffMask_low_Mask_low_StaffStaff1_0.geometry} material={materials.StaffStaff1} />
            </group>
            <group name="StaffMaskOrnament2_low_MaskOrnament2_low" position={[-5.645, 0, 29.811]}>
              <mesh name="StaffMaskOrnament2_low_MaskOrnament2_low_StaffStaff1_0" geometry={nodes.StaffMaskOrnament2_low_MaskOrnament2_low_StaffStaff1_0.geometry} material={materials.StaffStaff1} />
            </group>
            <group name="StaffMaskOrnament_low_MaskOrnament_low" position={[-5.645, 0, -29.811]}>
              <mesh name="StaffMaskOrnament_low_MaskOrnament_low_StaffStaff1_0" geometry={nodes.StaffMaskOrnament_low_MaskOrnament_low_StaffStaff1_0.geometry} material={materials.StaffStaff1} />
            </group>
          </group>
          <group name="StaffCrystal_low_Crystal_low" position={[-128.977, -0.775, 0.145]}>
            <mesh name="StaffCrystal_low_Crystal_low_StaffStaff1_0" geometry={nodes.StaffCrystal_low_Crystal_low_StaffStaff1_0.geometry} material={materials.StaffStaff1} />
          </group>
        </group>
        <mesh name="StaffCubeBottom_low_CubeBottom_low_StaffStaff1_0" geometry={nodes.StaffCubeBottom_low_CubeBottom_low_StaffStaff1_0.geometry} material={materials.StaffStaff1} rotation={[0, 0, 1.583]} scale={0.836} />
      </group>
    </group>
  )
}

useGLTF.preload('models/Staff/staff-transformed.glb')