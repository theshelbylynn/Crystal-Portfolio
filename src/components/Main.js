import one from './images/1.png';
import two from './images/2.png';
import three from './images/3.png';
import four from './images/4.png';
import React from 'react';
import Slider from './Carousel';

function Main() {
    return (
      <div className="main"> 

        <h1>Jewelry Portfolio</h1>

      <Slider />

       <p>
     <h2>"Crystals are the Earth's art work!"</h2>
       </p>
       
       <div className="info">


        <div className="box1">
            <i class="fa-regular fa-heart"></i>
            <h3>Simple Pendants</h3>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing 
            </p>

            <a href="/Simple">
            <button>See More</button>
            </a>
        </div>

        <div className="box2">
            <i class="fa-solid fa-heart"></i>
            <h3>Beaded Chains</h3>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing molestie iaculis.
            </p>

            <a href="/Beaded">
            <button>See More</button>
            </a>

        </div>

        <div className="box3">
            <i class="fa-regular fa-heart"></i>
            <h3>Fancy Pendants</h3>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing 
            </p>

            <a href="/Fancy">
            <button>See More</button>
            </a>
        </div>

      
       </div>


      </div>
    )
  }

  export default Main;