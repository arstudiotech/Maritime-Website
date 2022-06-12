import React from 'react';
import {images} from '../../constants';
import {AiFillFacebook, AiFillTwitterCircle, AiFillInstagram, AiFillLinkedin} from 'react-icons/ai';

import './Footer.css';
const Footer = () => 
  <footer className='app__footer section__padding'>
    <div className="footer-container">
      <img src={images.logo} alt="Logo Maritime" />
      <p>Maritime is a company that works in the shipping sector. We work for new shipbuilding, repairmen and consultants</p>
      <span>© Maritime.Co 2022</span>
    </div>
    <div className="footer-container">
      <h1>Quick Links</h1>
      <ul>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Make Cooperation</a></li>
        <li><a href="#">Our Team</a></li>
        <li><a href="#">Blogs</a></li>
      </ul>
    </div>
    <div className="footer-container">
      <h1>Useful Links</h1>
      <ul>
        <li><a href="#">Privacy Policy</a></li>
        <li><a href="#">Terms & Conditions</a></li>
        <li><a href="#">Help</a></li>
        <li><a href="#">Accesiblity</a></li>
      </ul>
    </div>
    <div className="footer-container app__footer-icon">
      <a href="#"><AiFillFacebook className="footer-icon" /></a>
      <a href="#"><AiFillLinkedin className="footer-icon"/></a>
      <a href="#"><AiFillInstagram  className="footer-icon"/></a>
      <a href="#"><AiFillTwitterCircle  className="footer-icon"/></a>
    </div>
  </footer>

export default Footer;