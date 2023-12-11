import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import * as THREE from 'three'
import App from './App'


const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <>
       <Canvas
       gl ={
        {outputColorSpace: THREE.SRGBColorSpace}

       }
       camera={
        {
            fov: 45,
            near: 0.1,
            far: 200,
            position: [3, 2, 1]
        }
       }>
        <App/>
       </Canvas>
    </>
)