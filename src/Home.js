import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Bar from './components/Bar';
import Main from './components/Main';
import About from './components/About';

import Footer from './components/Footer';
import Slider from './components/Carousel';
import { Carousel } from 'react-bootstrap';


function Home() {
  return (

    <div> 
      
   
      <Main />
      <About />
      
      
    </div>
  );
}       


export default Home;