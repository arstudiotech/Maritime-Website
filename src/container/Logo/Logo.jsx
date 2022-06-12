import React from 'react';
import { images } from '../../constants';

import './Logo.css';
const Logo = () => 
    <div className='app__logo flex__center section__padding'>
        <ul>
            <li className='border-right'><img src={images.logo01}  alt="Logo Hyundai" /></li>
            <li className='border-right'><img src={images.logo02}  alt="Logo DSME" /></li>
            <li className='border-right'><img src={images.logo03}  alt="Logo Semcorp Marine" /></li>
            <li><img src={images.logo04}  alt="Logo Pertamina" /></li>
        </ul>
    </div>

export default Logo