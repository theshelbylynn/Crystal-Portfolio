import React from 'react';
import photo from './images/photo.jpg';
import Shelby from './images/Shelby.png';
import { Carousel } from "react-bootstrap";
import one from './images/about/one.JPG';
import two from './images/about/two.JPG';
import three from './images/about/three.JPG';
import four from './images/about/four.JPG';
import oldone from './images/about/oldone.PNG';
import oldtwo from './images/about/oldtwo.JPG';


  function Tof() {
    return (

      <div>

        <center><h1>Where it all began ...</h1></center>

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

        <div className="about">

          
       <center> <img className="photo" src={oldone} alt="Logo One" /> </center>

        <div className="content">
         <center> <h1>June 2014</h1>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar tristique iaculis. Duis dignissim mi justo, ut luctus mauris fringilla porta. Donec semper ut erat ut ultricies. Ut vel enim lectus. Maecenas commodo gravida dui, a ultrices ex lacinia ut. Nunc mollis, lectus efficitur accumsan semper, tellus quam porta eros, sit amet vestibulum erat enim id justo. Mauris eget volutpat orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus.
          
          </center>

          
          </div>
        
        
      </div>


      <div className="contenttwo">
      <center><h1>My favorite journey ...</h1></center>

      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar tristique iaculis. Duis dignissim mi justo, ut luctus mauris fringilla porta. Donec semper ut erat ut ultricies. Ut vel enim lectus. Maecenas commodo gravida dui, a ultrices ex lacinia ut. Nunc mollis, lectus efficitur accumsan semper, tellus quam porta eros, sit amet vestibulum erat enim id justo. Mauris eget volutpat orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus.</p>


      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar tristique iaculis. Duis dignissim mi justo, ut luctus mauris fringilla porta. Donec semper ut erat ut ultricies. Ut vel enim lectus. Maecenas commodo gravida dui, a ultrices ex lacinia ut. Nunc mollis, lectus efficitur accumsan semper, tellus quam porta eros, sit amet vestibulum erat enim id justo. Mauris eget volutpat orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus.</p>

      <center> <img className="photo1" src={oldtwo} alt="Logo Two" /> </center>
      </div>

    

      </div>

      
      
      
    );
  }

export default Tof;