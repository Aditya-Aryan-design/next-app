import { Canvas } from "@react-three/fiber"
import { useGLTF, OrbitControls } from "@react-three/drei"
import { Suspense } from "react"



function MoonMesh(){

    const gltf = useGLTF('./the_moon/scene.gltf')
    return(
        <mesh>
        <primitive object={gltf.scene} scale={2.8}/>
        </mesh>
    )
}

function MoonCanvas() {
  return (
    <div className="w-[48vw] h-[48vw]">
<Canvas>
        <Suspense fallback={null}>
        <OrbitControls enableZoom={false} autoRotate={true} maxPolarAngle={Math.PI/2} minPolarAngle={Math.PI/2}/>
      <MoonMesh/>
      <directionalLight position={[-2,-20,50]}/>
        <hemisphereLight intensity={0.1}/>
        </Suspense>
    </Canvas>
    </div>
    
  )
}

export default MoonCanvas
