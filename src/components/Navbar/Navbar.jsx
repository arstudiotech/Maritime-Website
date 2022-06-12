import React, {useState} from 'react';
import { GiHamburgerMenu} from 'react-icons/gi';
import { AiFillSetting } from 'react-icons/ai';
import {MdClose} from 'react-icons/md'
import images from '../../constants/images';

import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  
  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={images.logo} alt="app logo" />
      </div>
      <ul className='app__navbar-links'>
        <li className='p__manrope'><a href="#home">Home</a></li>
        <li className='p__manrope'><a href="#home">About Us</a></li>
        <li className='p__manrope'><a href="#home">OurInterest</a></li>
        <li className='p__manrope'><a href="#home">Values</a></li>
        <li className='p__manrope'><a href="#home">Project</a></li>
        <li className='p__manrope'><a href="#home">Blogs</a></li>
      </ul>
      <div className='app__navbar-login'>
        <a href="#login" className='p__manrope login'>Log In</a>
        <a href="#login" className='p__manrope register'>Register</a>
        <a href="#settting" className='setting-icon'><AiFillSetting color='rgba(0, 0, 0, 0.54)' fontSize={29} /></a>
      </div>

      <div className='app__navbar-smallscreen'>
      <GiHamburgerMenu color='#357FC2' fontSize={27} onClick={() => setToggleMenu(true)} />
      
      {toggleMenu && (
      <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
      <MdClose fontSize={27} className='overlay__close' onClick={() => setToggleMenu(false)} />
      <ul className='app__navbar-smallscreen-links'>
        <li className='p__manrope'><a href="#home">Home</a></li>
        <li className='p__manrope'><a href="#home">About Us</a></li>
        <li className='p__manrope'><a href="#home">Our Interest</a></li>
        <li className='p__manrope'><a href="#home">Values</a></li>
        <li className='p__manrope'><a href="#home">Project</a></li>
        <li className='p__manrope'><a href="#home">Blogs</a></li>
      </ul>
      </div>
      )}
      </div>
    </nav>
  )
};

export default Navbar;