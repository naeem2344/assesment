import { Canvas } from '@react-three/fiber'
import { ContactShadows, Environment, OrbitControls } from '@react-three/drei'
import { Suspense } from 'react'
import ModelViwer from '../components/ModelViwer'
import { atom, useAtom } from 'jotai'
import { EffectComposer, Outline } from '@react-three/postprocessing'
export const meshAtom = atom(null);

const ThreeModel = () => {
  const [objData, setObjData] = useAtom(meshAtom);


  return (
    <div style={{ width: '100%', height: '90vh' }}>
      <Canvas
        shadows
        camera={{ position: [0, 0, 4], fov: 50 }}
        fallback={<div>Loading canvas...</div>}
      >
        <ambientLight intensity={0.7} />
        <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />

        <Suspense fallback={null}>
          <ModelViwer />
          <Environment preset="city" />
          <ContactShadows
            position={[0, -0.8, 0]}
            opacity={0.25}
            scale={10}
            blur={1.5}
            far={0.8}
          />
        </Suspense>


        <OrbitControls enableZoom enablePan />

        <EffectComposer multisampling={8} autoClear={false}>
          <Outline
            selection={objData}
            visibleEdgeColor="orangered"
            hiddenEdgeColor="orangered"
            blur
            edgeStrength={10}
          />
        </EffectComposer>

      </Canvas>
    </div>
  )
}

export default ThreeModel
