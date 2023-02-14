import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import one from './images/beaded/one.png';
import two from './images/beaded/two.png';
import three from './images/beaded/three.png';
import four from './images/beaded/four.png';
import five from './images/beaded/five.png';
import six from './images/beaded/six.png';
import seven from './images/beaded/seven.png';
import eight from './images/beaded/eight.png';
import nine from './images/beaded/nine.png';
import ten from './images/beaded/ten.png';
import eleven from './images/beaded/eleven.png';
import twelve from './images/beaded/twelve.png';





function Beaded() {
	const [lightboxController, setLightboxController] = useState({
		toggler: false,
		slide: 1
	});

	function openLightboxOnSlide(number) {
		setLightboxController({
			toggler: !lightboxController.toggler,
			slide: number
		});
	}

	return (
		<>

<h1>Crystal Beaded Chains</h1>
        
		<div className="portfolio-container">
        <img id="pic" onClick={() => openLightboxOnSlide(1) } src={one} alt="Beaded Chain One" />
        <img id="pic" onClick={() => openLightboxOnSlide(2) } src={two} alt="Beaded Chain Two" />
        <img id="pic" onClick={() => openLightboxOnSlide(3) } src={three} alt="Beaded Chain Three" />
        <img id="pic" onClick={() => openLightboxOnSlide(4) } src={four} alt="Beaded Chain Four" />
        <img id="pic" onClick={() => openLightboxOnSlide(5) } src={five} alt="Beaded Chain Five" />
        <img id="pic" onClick={() => openLightboxOnSlide(6) } src={six} alt="Beaded Chain Six" />
        <img id="pic" onClick={() => openLightboxOnSlide(7) } src={seven} alt="Beaded Chain Seven" />
        <img id="pic" onClick={() => openLightboxOnSlide(8) } src={eight} alt="Beaded Chain Eight" />
        <img id="pic" onClick={() => openLightboxOnSlide(9) } src={nine} alt="Beaded Chain Nine" />
        <img id="pic" onClick={() => openLightboxOnSlide(10) } src={ten} alt="Beaded Chain Ten" />
        <img id="pic" onClick={() => openLightboxOnSlide(11) } src={eleven} alt="Beaded Chain Eleven" />
        <img id="pic" onClick={() => openLightboxOnSlide(12) } src={twelve} alt="Beaded Chain Twelve" />

       		
			<FsLightbox
				toggler={lightboxController.toggler}
				sources={[
					<div className="portfolio">
                         <img src={one} style={{ width: "100%", height: "100%" }} alt="Beaded Chain One" />
                    </div>,
					<div className="portfolio">
                         <img src={two} style={{ width: "100%", height: "100%" }} alt="Beaded Chain Two" />
                    </div>,
					<div className="portfolio">
                         <img src={three} style={{ width: "100%", height: "100%" }} alt="Beaded Chain Three" />
                    </div>,
					<div className="portfolio">
                         <img src={four} style={{ width: "100%", height: "100%" }} alt="Beaded Chain Four" />
                    </div>,
					<div className="portfolio">
                         <img src={five} style={{ width: "100%", height: "100%" }} alt="Beaded Chain Five" />
                    </div>,
					<div className="portfolio">
                         <img src={six} style={{ width: "100%", height: "100%" }} alt="Beaded Chain Six" />
                    </div>,
					<div className="portfolio">
                         <img src={seven} style={{ width: "100%", height: "100%" }} alt="Beaded Chain Seven" />
                    </div>,
					<div className="portfolio">
                         <img src={eight} style={{ width: "100%", height: "100%" }} alt="Beaded Chain Eight" />
                    </div>,
					<div className="portfolio">
                         <img src={nine} style={{ width: "100%", height: "100%" }} alt="Beaded Chain Nine" />
                    </div>,
					<div className="portfolio">
                         <img src={ten} style={{ width: "100%", height: "100%" }} alt="Beaded Chain Ten" />
                    </div>,
					<div className="portfolio">
                         <img src={eleven} style={{ width: "100%", height: "100%" }} alt="Beaded Chain Eleven" />
                    </div>,
					<div className="portfolio">
                         <img src={twelve} style={{ width: "100%", height: "100%" }} alt="Beaded Chain Twelve" />
                    </div>,

               
				]}
				slide={lightboxController.slide}
			/>

</div>
		</>
	);
}



export default Beaded;