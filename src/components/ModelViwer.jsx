

// import { useGLTF, useTexture } from '@react-three/drei';
// import { useAtom } from 'jotai';
// import { useMemo } from 'react';
// import { meshAtom } from '../pages/ThreeModel';

// const ModelViewer = ({ texture }) => {
//   const { scene } = useGLTF('/assets/3d_model/sofa.glb');
//   const customTexture = useTexture(texture);
//   const [objData, setObjData] = useAtom(meshAtom)
//   const meshes = useMemo(() => {
//     const clone = scene.clone(true);
//     const foundMeshes = [];
//     clone.traverse((child) => {
//       if (child.isMesh) {
//         foundMeshes.push(child);
//       }
//     });
//     return foundMeshes;
//   }, [scene]);

//   const handleClick = (e, mesh) => {
//     e.stopPropagation();

//     mesh.material = mesh.material.clone();

//     mesh.material.map = customTexture;
//     mesh.material.map.needsUpdate = true;
//   };

//   return (
//     <group scale={[1, 1, 1]}>
//       {meshes.map((mesh, idx) => (
//         <primitive
//           key={idx}
//           object={mesh}
//           onClick={(e) => handleClick(e, mesh)}
//         />
//       ))}
//     </group>
//   );
// };

// useGLTF.preload('/assets/3d_model/sofa.glb');

// export default ModelViewer;





// import { useGLTF, useTexture } from '@react-three/drei';
// import { useAtom } from 'jotai';
// import { useMemo } from 'react';
// import { meshAtom } from '../pages/ThreeModel';

// const ModelViewer = ({ texture }) => {
//   const { scene } = useGLTF('/assets/3d_model/sofa.glb');
  
//   const customTexture = useTexture(texture);
//   const [objData, setObjData] = useAtom(meshAtom);

//   const meshes = useMemo(() => {
//     const clone = scene.clone(true);
//     const foundMeshes = [];
//     clone.traverse((child) => {
//       if (child.isMesh) {
//         foundMeshes.push(child);
//       }
//     });
//     return foundMeshes;
//   }, [scene]);


//   const handleClick = (e) => {
//     e.stopPropagation();
//     setObjData(e.object)
//   };

//   return (
//     <group scale={[1, 1, 1]}>
//       <primitive
//         object={scene}
//         onClick={(e) => handleClick(e)}
//       />
//     </group>
//   );
// };

// useGLTF.preload('/assets/3d_model/sofa.glb');

// export default ModelViewer;



import { useGLTF, useTexture } from '@react-three/drei';
import { useAtom } from 'jotai';
import { useEffect, useMemo } from 'react';
import { meshAtom } from '../pages/ThreeModel';

const ModelViewer = ({ texture }) => {
  const { scene } = useGLTF('/assets/3d_model/sofa.glb');
  const customTexture = useTexture(texture);
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

  useEffect(() => {
    if (objData && objData.isMesh) {
      objData.material = objData.material.clone();
      objData.material.map = customTexture;
      objData.material.needsUpdate = true;
    }
  }, [customTexture, objData]);

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
