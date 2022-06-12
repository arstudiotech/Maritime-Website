import React from 'react';
import {About, Home, Interest, Values, Project, Logo } from './container';
import { Navbar, Footer } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Home />
    <Logo />
    <About />
    <Interest />
    <Values />
    <Project />
    <Footer />
  </div>
);

export default App;
