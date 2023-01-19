import { Carousel } from "react-bootstrap";
import React from 'react';
import one from './images/1.png';
import two from './images/2.png';
import three from './images/3.png';
import four from './images/4.png';

function Slider() {
    return (
      <Carousel className="slide">
        <Carousel.Item>
        <img id="slider" src={one} alt="Pendant One" />
        <img id="slider" src={two} alt="Pendant Two" />
        <img id="slider" src={three} alt="Pendant Three" />
        <img id="slider" src={four} alt="Pendant Four" />
        </Carousel.Item>
        <Carousel.Item>
        <img id="slider" src={one} alt="Pendant One" />
        <img id="slider" src={two} alt="Pendant Two" />
        <img id="slider" src={three} alt="Pendant Three" />
        <img id="slider" src={four} alt="Pendant Four" />
        </Carousel.Item>
        <Carousel.Item>
        <img id="slider" src={one} alt="Pendant One" />
        <img id="slider" src={two} alt="Pendant Two" />
        <img id="slider" src={three} alt="Pendant Three" />
        <img id="slider" src={four} alt="Pendant Four" />
        </Carousel.Item>
      </Carousel>
    );
  }
  
  export default Slider;