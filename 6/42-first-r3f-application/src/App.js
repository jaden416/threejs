import React, { useRef } from 'react'
import { useThree, extend, useFrame } from '@react-three/fiber'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import CustomObject from './CustomObject'
extend({ OrbitControls })

export default function App() {
  const { camera, gl } = useThree()

  const groupRef = useRef();
  useFrame((state, delta)=>{
    console.log('tick')
    groupRef.current.rotation.y += delta
  })

  return <>
  <orbitControls args={[camera , gl.domElement]}/>
  <directionalLight position={ [ 1, 2, 3 ] } intensity={ 4.5 }/>
  <ambientLight intensity={ 1.5 } />
  <group ref={groupRef} >
    <mesh scale={1}>
      <boxGeometry/>
      <meshBasicMaterial color='red' />
    </mesh>
    <mesh position-x={-4} scale={1}>
      <sphereGeometry/>
      <meshBasicMaterial color='red' />
    </mesh>
    <CustomObject/>
  </group>
  </>
  
}
