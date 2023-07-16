import { Canvas } from "@react-three/fiber"
import { useGLTF, OrbitControls } from "@react-three/drei"
import { Suspense } from "react"




function SunMesh(){

    const gltf = useGLTF('./sun/scene.gltf')
    return(
        <mesh>
        <primitive object={gltf.scene} scale={0.028}/>
        </mesh>
    )
}

function SunCanvas() {
  return (
    <div className="w-[48vw] h-[48vw]">
<Canvas>
        <Suspense fallback={null}>
        <OrbitControls enableZoom={false} autoRotate={true} maxPolarAngle={Math.PI/2} minPolarAngle={Math.PI/2}/>
      <SunMesh/>
        <hemisphereLight intensity={1}/>
        </Suspense>
    </Canvas>
    </div>
    
  )
}

export default SunCanvas
