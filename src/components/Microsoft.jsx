/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.1 microsoft.gltf
Author: Lucas Bezerra (https://sketchfab.com/lucasbezerraco)
License: CC-BY-NC-4.0 (http://creativecommons.org/licenses/by-nc/4.0/)
Source: https://sketchfab.com/3d-models/microsoft-headphones-surface-2-a65354bb59af4d358701c91b39012d50
Title: Microsoft Headphones Surface 2
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Microsoft(props) {
  const { nodes, materials } = useGLTF('/microsoft.gltf')
  return (
    <group {...props} dispose={null}>
      <group position={[0.06, 40.94, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[0, 468.19, 70.45]}>
            <group position={[0, 296.35, -70.04]}>
              <mesh geometry={nodes.defaultMaterial.geometry} material={materials['1001']} position={[0, -0.61, 0.42]} />
            </group>
            <group position={[233.43, -218.65, -70.45]}>
              <group position={[74.47, 161.9, 1.5]} rotation={[Math.PI / 2, -0.48, Math.PI / 2]}>
                <group position={[-3.13, 25.07, 276.11]} rotation={[-1.09, Math.PI / 2, 0]}>
                  <mesh geometry={nodes.defaultMaterial_8.geometry} material={materials['1006']} />
                  <mesh geometry={nodes.defaultMaterial_9.geometry} material={materials['1006']} />
                  <mesh geometry={nodes.defaultMaterial_10.geometry} material={materials['1006']} />
                  <mesh geometry={nodes.defaultMaterial_11.geometry} material={materials['1006']} />
                  <mesh geometry={nodes.defaultMaterial_12.geometry} material={materials['1006']} />
                </group>
                <group position={[-1.5, -23.5, 181.66]} rotation={[-1.59, 0, -0.12]}>
                  <mesh geometry={nodes.defaultMaterial_18.geometry} material={materials['1006']} position={[114.55, -77.94, 20.54]} rotation={[-1.04, -0.9, -1.54]} />
                  <mesh geometry={nodes.defaultMaterial_19.geometry} material={materials['1006']} position={[136.72, -22.38, 21.28]} rotation={[-0.47, -1.22, -0.92]} />
                </group>
                <group position={[-1.5, -43.36, 182.01]} rotation={[-1.59, 0, 2.06]}>
                  <mesh geometry={nodes.defaultMaterial_13.geometry} material={materials['1008']} />
                  <mesh geometry={nodes.defaultMaterial_14.geometry} material={materials['1008']} />
                </group>
                <group position={[-1.5, 91.98, 181.2]} rotation={[-2.18, Math.PI / 2, 0]}>
                  <mesh geometry={nodes.defaultMaterial_20.geometry} material={materials['1009']} position={[37.55, 27.23, 0]} rotation={[Math.PI / 2, -0.95, Math.PI / 2]} />
                  <mesh geometry={nodes.defaultMaterial_21.geometry} material={materials['1010']} />
                </group>
                <mesh geometry={nodes.defaultMaterial_3.geometry} material={materials['1005']} />
                <mesh geometry={nodes.defaultMaterial_7.geometry} material={materials['1005']} position={[139.41, -0.44, 172.7]} rotation={[-1.09, Math.PI / 2, 0]} />
              </group>
              <mesh geometry={nodes.defaultMaterial_1.geometry} material={materials['1002']} position={[1.73, 437.22, 0.86]} rotation={[1.57, 0.54, -1.57]} />
              <mesh geometry={nodes.defaultMaterial_2.geometry} material={materials['1004']} position={[-13.51, 437.96, 0.89]} />
            </group>
            <group position={[-238.76, -203.26, -34.57]}>
              <group position={[-69.14, 146.51, -34.38]} rotation={[Math.PI / 2, -1.09, Math.PI / 2]}>
                <group position={[-1.5, -182.29, 42.2]} rotation={[-3.12, 0, -Math.PI]}>
                  <mesh geometry={nodes.defaultMaterial_22.geometry} material={materials['1008']} />
                  <mesh geometry={nodes.defaultMaterial_23.geometry} material={materials['1008']} />
                  <mesh geometry={nodes.defaultMaterial_24.geometry} material={materials['1008']} />
                </group>
                <group position={[-1.48, -180.2, -87.07]} rotation={[-1.57, Math.PI / 2, 0]}>
                  <mesh geometry={nodes.defaultMaterial_25.geometry} material={materials['1009']} position={[0, -40.31, -0.02]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} />
                  <mesh geometry={nodes.defaultMaterial_26.geometry} material={materials['1010']} position={[0, -2.97, 0.02]} />
                </group>
                <mesh geometry={nodes.defaultMaterial_6.geometry} material={materials['1005']} />
                <mesh geometry={nodes.defaultMaterial_15.geometry} material={materials['1005']} position={[139.41, -172.69, -0.67]} rotation={[-0.48, Math.PI / 2, 0]} />
                <mesh geometry={nodes.defaultMaterial_16.geometry} material={materials['1007']} position={[-1.5, -181.81, 22.33]} rotation={[-3.12, 0, -Math.PI]} />
                <mesh geometry={nodes.defaultMaterial_17.geometry} material={materials['1007']} position={[-25.72, -152.69, 22.64]} rotation={[-3.12, 0, -2.71]} />
              </group>
              <mesh geometry={nodes.defaultMaterial_4.geometry} material={materials['1003']} position={[3.61, 421.83, -35.02]} rotation={[1.57, -0.54, 1.57]} />
              <mesh geometry={nodes.defaultMaterial_5.geometry} material={materials['1004']} position={[18.59, 422.57, -34.99]} />
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/microsoft.gltf')
