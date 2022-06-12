import React from 'react';
import {images} from '../../constants';

import './About.css';

const About = () => 
  <div className='app__about section__padding'>
    <div className='app__about-info'>
      <div className='app__wrapper_img'>
          <img src={images.ilustrasi02} alt="About Ilustration" />
        </div>
      <div className='app__wrapper_info'>
          <h1 className='h1__manrope'>About Us</h1>
          <p className='p__manrope'>We are marine engineering graduates who work in various well-known companies in the world. We founded this company since 2020</p>
        </div> 
      </div>
      <div className='app__about-detail'>
        <div className='detail border-right'>
          <p>Project Done</p>
          <span>600+</span>
        </div>
        <div className='detail border-right'>
          <p>Happy Clients</p>
          <span>950+</span>
        </div>
        <div className='detail'>
          <p>Employee</p>
          <span>30+</span>
        </div>
      </div>
  </div>

export default About