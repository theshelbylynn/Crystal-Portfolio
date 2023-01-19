import React from 'react';
import photo from './images/photo.jpg';
import Shelby from './images/Shelby.png';




function About() {
    return (
      <div className="about">
       <center> <img className="photo" src={photo} alt="About Photo" /> </center>

        <div className="content">
         <center> <h1>About Shelby Lynn</h1>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar tristique iaculis. Duis dignissim mi justo, ut luctus mauris fringilla porta. Donec semper ut erat ut ultricies. Ut vel enim lectus. Maecenas commodo gravida dui, a ultrices ex lacinia ut. Nunc mollis, lectus efficitur accumsan semper, tellus quam porta eros, sit amet vestibulum erat enim id justo. Mauris eget volutpat orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus.
          
          <div>
          <img id="signature" src={Shelby} alt="Signature" />
          </div> </center>
          </div>
        
      </div>
      
    );
  }

export default About;