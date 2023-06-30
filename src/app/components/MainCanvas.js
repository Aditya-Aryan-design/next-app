import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"




function CanvasMesh() {
    return (
        <mesh>
            <sphereGeometry args={[3, 50, 50]} />
            <meshStandardMaterial />
        </mesh>
    )
}

function MainCanvas({ color }) {
    return (
        <div className="h-56 w-56 lg:h-96 lg:w-96 mt-32 m-auto cursor-pointer rounded-full">
            <Canvas>
                <directionalLight position={[0, 1.2, 1]} color={color} />
                <OrbitControls enableZoom={false} autoRotate={true} autoRotateSpeed={5} enableDamping={true} enablePan={false} />
                <CanvasMesh />
            </Canvas>
            <p className="text-center text-sm font-semibold text-zinc-400">Give it a spin</p>
        </div>
    )
}

export default MainCanvas
