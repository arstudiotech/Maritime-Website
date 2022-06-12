import React from 'react';
import {AiOutlineLink, AiOutlineStar, AiOutlineCheckCircle} from 'react-icons/ai';

import './Interest.css';
const Interest = () => 
  <div className='app__interest section__padding'>
    <h1 className='h1__manrope'>Our Interest</h1>
    <p className='p__manrope p__interest'>We have received hundreds of customers all over the world. We have worked on various projects given to us by our clients. We do our best for our customer satisfaction. </p>
    <div className='app__interest-content'>
      <div className='interest-content'>
        <AiOutlineLink className='icon-1' color='#fff' fontSize={40} />
          <div>
            <h1>New Ship Design</h1>
            <p className='p__manrope'>We provide new ship design modeling services in 2d and 3d. We use the latest applications in modeling</p>
            <a href="#">Read More</a>
          </div>
      </div>
      <div className='interest-content'>
        <AiOutlineStar className='icon-2' color='#fff' fontSize={40} />
          <div>
            <h1>Ship Consultant</h1>
            <p className='p__manrope'>If you have a problem with your boat, and need a consultant then we are the best choice. We provide consulting services in the shipping sector 24 hours a day.</p>
            <a href="#">Read More</a>
          </div>
      </div>
      <div className='interest-content'>
        <AiOutlineCheckCircle className='icon-3' color='#0CD68A' fontSize={40}/>
        <div>
          <h1>Ship Course</h1>
          <p className='p__manrope'>We provide learning classes for those of you who want to learn more about the world of shipping.</p>
          <a href="#">Read More</a>
        </div>
      </div>
    </div>
  </div>

export default Interest