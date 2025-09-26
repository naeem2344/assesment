
import { useGLTF } from '@react-three/drei';
import { useAtom } from 'jotai';
import { useMemo } from 'react';
import { meshAtom } from '../pages/ThreeModel';

const ModelViewer = () => {
  const { scene } = useGLTF('/assets/3d_model/sofa.glb');
  // const { scene } = useGLTF('https://design247bucket.s3.ap-south-1.amazonaws.com/1745933611176_1745931417727_Living%20Room%20SRJ.glb');
  const [objData, setObjData] = useAtom(meshAtom);

  const meshes = useMemo(() => {
    const found = [];
    scene.traverse((child) => {
      if (child.isMesh) {
        found.push(child);
      }
    });
    return found;
  }, [scene]);


  const handleClick = (e, mesh) => {
    e.stopPropagation();
    setObjData(mesh);
  };

  return (
    <group scale={[1, 1, 1]}>
      {meshes.map((mesh, idx) => (
        <primitive
          key={idx}
          object={mesh}
          onClick={(e) => handleClick(e, mesh)}
        />
      ))}
    </group>
  );
};

useGLTF.preload('/assets/3d_model/sofa.glb');

export default ModelViewer;
