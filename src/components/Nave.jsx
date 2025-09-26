import React from 'react';
import '../styles/nav.style.css'
import { Link } from 'react-router-dom';

const Nave = () => {
    return (
        <div className='nav-containers'>
            <ul>
                <li>
                    <a href={'/'}>View Model</a>
                </li>
                <li>
                    <a href={'/render'}>Upload 3D model</a>
                </li>
                <li>
                    <a href={'/model'}>Model viwer</a>
                </li>
            </ul>
        </div>
    )
}

export default Nave