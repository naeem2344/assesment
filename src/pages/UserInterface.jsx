import React, { useState } from 'react'
import febricTexture from '../dummy_data/febric'
import '../styles/texture.css'
import { meshAtom } from './ThreeModel';
import { useTexture } from '@react-three/drei';
import { useAtom } from 'jotai';

const UserInterface = ({ setFunction }) => {
    const [texture, setTexture] = useState([...febricTexture]);

    return (
        <div className='texture__container'>
            {texture.map(({ url, name }, indx) => (
                <div className='texture__image__container' key={indx} onClick={() => setFunction(url)}>
                    <img src={url} alt={`${name + "_" + indx}`} />
                    <p>{name} {indx + 1}</p>
                </div>

            ))}
        </div>
    )
}

export default UserInterface