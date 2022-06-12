import React from 'react';
import {images} from '../../constants';

import './Project.css';

const Project = () => 
    <div className='app__project section__padding'>
      <h1 className='h1__manrope'>Current Projects</h1>
      <div className='app__project_content'>
        <div className='project-container'>
          <img src={images.image01} alt="Project Images 01" />
          <h1>Fishing boat building in new zealand</h1>
          <p className='p__manrope'>Very beautiful modern fishing boat design by maritime corp... <span><a href="#">Read More</a></span></p>
        </div>
        <div className='project-container'>
          <img src={images.image02} alt="Project Images 01" />
          <h1>Sembcorp Marine cargo ship building</h1>
          <p className='p__manrope'>Maritime has built hundreds of cargo ships in the world. <span><a href="#">Read More</a></span></p>
        </div>
        <div className='project-container'>
          <img src={images.image03} alt="Project Images 01" />
          <h1>Japanese company-owned speed boat manufacture</h1>
          <p className='p__manrope'>In the last decades we have built speed boats. <span><a href="#">Read More</a></span></p>
        </div>
      </div>
    </div>

export default Project;