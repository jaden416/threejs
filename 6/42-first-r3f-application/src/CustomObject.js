import React, { useRef, useMemo, useEffect } from 'react'
import * as THREE from 'three'

export default function CustomObject(){
  const geometryRef = useRef()
  const verticesCount = 10 * 3;



  const postions = useMemo(()=>{
    const postions = new Float32Array(verticesCount * 3);

    for(let i = 0; i < verticesCount * 3; i++)
      postions[i] = (Math.random() - 0.5)  * 3;
    return postions
  },[])

  useEffect(()=>{
    geometryRef.current.computeVertexNormals()
  },[])

  return <mesh>
    <bufferGeometry ref={geometryRef}>
      <bufferAttribute
        attach="attributes-position"
        count={verticesCount}
        itemSize={3}
        array={postions}
      />
    </bufferGeometry>
    <meshBasicMaterial color="red" side={THREE.DoubleSide}/>
  </mesh>
}

