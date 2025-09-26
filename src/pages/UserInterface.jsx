import { useEffect, useState } from 'react';
import febricTexture from '../dummy_data/febric';
import '../styles/texture.css';
import { meshAtom } from './ThreeModel';
import * as THREE from 'three';
import { useAtom } from 'jotai';

const UserInterface = () => {
    const [objData, setObjData] = useAtom(meshAtom);
    const [textureList] = useState([...febricTexture]);
    const [textreUrl, setUrl] = useState()


    const handleClick = (url) => {
        if (!objData || !objData.isMesh) {
            alert("Select a mesh to apply texture.");
            return;
        }
        setUrl(url)
    };

    useEffect(() => {
        const loader = new THREE.TextureLoader();

        loader.load(textreUrl, (loadedTexture) => {
            loadedTexture.wrapS = THREE.RepeatWrapping;
            loadedTexture.wrapT = THREE.RepeatWrapping;
            loadedTexture.repeat.set(2, 2);

            const newMaterial = objData.material.clone();
            newMaterial.map = loadedTexture;
            newMaterial.needsUpdate = true;

            objData.material = newMaterial;
        });
        setUrl(null);
    }, [textreUrl, objData])

    return (
        <div className='texture__container'>
            {textureList.map(({ url, name }, indx) => (
                <div
                    className='texture__image__container'
                    key={indx}
                    onClick={() => handleClick(url)}
                >
                    <img src={url} alt={`${name}_${indx}`} />
                    <p>{name} {indx + 1}</p>
                </div>
            ))}
        </div>
    );
};

export default UserInterface;
