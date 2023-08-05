import { Suspense } from 'react'
import { Canvas } from "@react-three/fiber"
import { Decal, Float, OrbitControls, Preload, useTexture } from "@react-three/drei"

import { CanvasLoader } from "../Loader"

interface BallProps {
  imageUrl: string;
}

interface BallCanvasProps {
  icon: string;
}

export const Ball = ({ imageUrl }: BallProps) => {
  const [decal] = useTexture([imageUrl])
  return (
    <Float speed={1.75} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronBufferGeometry args={[1, 1]} />
        <meshStandardMaterial
          color={"#fff8eb"}
          polygonOffset
          polygonOffsetFactor={-5} flatShading
        />
        <Decal
          position={[0, 0, 1]}
          map={decal}
          rotation={[2 * Math.PI, 0, 6.25]} flatShading
        />
      </mesh>
    </Float>
  )
}

export const BallCanvas = ({ icon }: BallCanvasProps) => {
  return (
    <Canvas
      frameloop='demand'
      shadows
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Ball imageUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  )
}