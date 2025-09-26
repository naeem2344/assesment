import React from 'react';
import '../styles/nav.style.css'
import { Link } from 'react-router-dom';

const Nave = () => {
    return (
        <div className='nav-containers'>
            <ul>
                <li>
                    <Link to={'/'}>View Model</Link>
                </li>
                <li>
                    <Link to={'/render'}>Upload 3D model</Link>
                </li>
                <li>
                    <Link to={'/model'}>Model viwer</Link>
                </li>
            </ul>
        </div>
    )
}

export default Nave