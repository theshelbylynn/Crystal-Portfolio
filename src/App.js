import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Bar from './components/Bar';
import Main from './components/Main';
import About from './components/About';
import Tof from './components/Tof';
import Footer from './components/Footer';
import Slider from './components/Carousel';
import Portfolio from './components/Portfolio';
import Simple from './components/Simple';
import Fancy from './components/Fancy';
import Beaded from './components/Beaded';
 
import { Route, Routes } from "react-router-dom"
import { Carousel } from 'react-bootstrap';
import Home from './Home';




function App() {
  return (

    <div> 
      <Bar />
      <Header />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Tof" element={<Tof />} />
      <Route path="/Portfolio" element={<Portfolio />} />
      <Route path="/Simple" element={<Simple />} />
      <Route path="/Fancy" element={<Fancy />} />
      <Route path="/Beaded" element={<Beaded />} />
      </Routes>
      <Footer />
    </div>
  );
}       


export default App;