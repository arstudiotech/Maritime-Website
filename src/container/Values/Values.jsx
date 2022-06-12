import React from 'react';
import {images} from '../../constants';

import './Values.css';

const Values = () => 
  <div className='app__values section__padding'>
    <div className='app__values-content'>
      <div className='app__wrapper_img'>
        <img src={images.ilustrasi03} alt="values illustration" />
      </div>
      <div className='app__wrapper_info'>
        <h1 className='h1__manrope'>Our Values</h1>
        <p className='p__manrope'>Maritime is a modern ship consultant and ship design. The team members may change, but the quality of our project execution will not.An outstanding team can build a product in any industry. Don’t be intimidated by incumbents.</p>
      </div>
    </div>
    <div className='app__values_button'>
      <button className='custom__button'>Read More</button>
    </div>
  </div>

export default Values