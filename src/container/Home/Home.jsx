import React from 'react';
import { images } from '../../constants';

import './Home.css';
const Home = () => 
  <div className='app__home'>
    <div className='app__home-content'>
      <div className='app__home_info'>
        <h1 className='h1__app-home'>Let's take a tour to <span>Our Project</span> In Naval Engineering</h1>
        <p className='p__manrope'>We are highly focused in Naval Engineering project like design ship, ship consultant, and all about ship</p>
      </div>
      <div className='app__home_img'>
        <img src={images.ilustrasi01} alt="home ilustration" />
      </div>
    </div>
    <div className='app__home-button'>
      <button className='custom__button'>Get Started</button>
      <button className='custom__button-2'>Learn More</button>
    </div>
  </div>

export default Home;