import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import one from './images/1.png';
import two from './images/2.png';
import three from './images/3.png';
import four from './images/4.png';
import copy from './images/1 copy.png';
import five from './images/fancy/5.png';
import six from './images/fancy/6.png';
import seven from './images/fancy/7.png';
import eight from './images/fancy/8.png';
import nine from './images/fancy/9.png';
import ten from './images/fancy/10.png';
import eleven from './images/fancy/11.png';
import twelve from './images/fancy/12.png';
import thirteen from './images/fancy/13.png';
import fourteen from './images/fancy/14.png';
import fifteen from './images/fancy/15.png';
import sixteen from './images/fancy/16.png';




function Fancy() {
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

<h1>Fancy Crystal Pendants</h1>

<div className="portfolio-container">

        
        <img id="pic" onClick={() => openLightboxOnSlide(1) } src={one} alt="Pendant One" />
        <img id="pic" onClick={() => openLightboxOnSlide(2)} src={two} alt="Pendant Two" />
        <img id="pic" onClick={() => openLightboxOnSlide(3)} src={three} alt="Pendant Three" />
        <img id="pic" onClick={() => openLightboxOnSlide(4)} src={four} alt="Pendant Four" />
        <img id="pic" onClick={() => openLightboxOnSlide(5)} src={five} alt="Pendant Five" />
        <img id="pic" onClick={() => openLightboxOnSlide(6)} src={six} alt="Pendant Six" />
        <img id="pic" onClick={() => openLightboxOnSlide(7)} src={seven} alt="Pendant Seven" />
        <img id="pic" onClick={() => openLightboxOnSlide(8)} src={eight} alt="Pendant Eight" />
        <img id="pic" onClick={() => openLightboxOnSlide(9)} src={nine} alt="Pendant Nine" />
        <img id="pic" onClick={() => openLightboxOnSlide(10)} src={ten} alt="Pendant Ten" />
        <img id="pic" onClick={() => openLightboxOnSlide(11)} src={eleven} alt="Pendant Eleven" />
        <img id="pic" onClick={() => openLightboxOnSlide(12)} src={twelve} alt="Pendant Twelve" />
        <img id="pic" onClick={() => openLightboxOnSlide(13)} src={thirteen} alt="Pendant Thirteen" />
        <img id="pic" onClick={() => openLightboxOnSlide(14)} src={fourteen} alt="Pendant Fourteen" />
        <img id="pic" onClick={() => openLightboxOnSlide(15)} src={fifteen} alt="Pendant Fifteen" />
        <img id="pic" onClick={() => openLightboxOnSlide(16)} src={sixteen} alt="Pendant Sixteen" />
    
		
			<FsLightbox
				toggler={lightboxController.toggler}
				sources={[
					 <div className="portfolio">
                         <img 
						 src={one} style={{ width: "100%", height: "100%" }} alt="Pendant One" />
                    </div>,

                    <div className="portfolio">
                         <img src={two} style={{ width: "100%", height: "100%" }} alt="Pendant Two" />
                    </div>,

                    <div className="portfolio">
                         <img src={three} style={{ width: "100%", height: "100%" }} alt="Pendant Three" />
                    </div>,

                    <div className="portfolio">
                         <img src={four} style={{ width: "100%", height: "100%" }} alt="Pendant Four" />
                    </div>,
                    <div className="portfolio">
                         <img src={five} style={{ width: "100%", height: "100%" }} alt="Pendant Five" />
                    </div>,
                    <div className="portfolio">
                         <img src={six} style={{ width: "100%", height: "100%" }} alt="Pendant Six" />
                    </div>,
                    <div className="portfolio">
                         <img src={seven} style={{ width: "100%", height: "100%" }} alt="Pendant Seven" />
                    </div>,
                    <div className="portfolio">
                         <img src={eight} style={{ width: "100%", height: "100%" }} alt="Pendant Eight" />
                    </div>,
                    <div className="portfolio">
                         <img src={nine} style={{ width: "100%", height: "100%" }} alt="Pendant Nine" />
                    </div>,
                    <div className="portfolio">
                         <img src={ten} style={{ width: "100%", height: "100%" }} alt="Pendant Ten" />
                    </div>,
                    <div className="portfolio">
                         <img src={eleven} style={{ width: "100%", height: "100%" }} alt="Pendant Eleven" />
                    </div>,
                    <div className="portfolio">
                         <img src={twelve} style={{ width: "100%", height: "100%" }} alt="Pendant Twelve" />
                    </div>,
                    <div className="portfolio">
                         <img src={thirteen} style={{ width: "100%", height: "100%" }} alt="Pendant Thirteen" />
                    </div>,
                    <div className="portfolio">
                         <img src={fourteen} style={{ width: "100%", height: "100%" }} alt="Pendant Fourteen" />
                    </div>,
                    <div className="portfolio">
                         <img src={fifteen} style={{ width: "100%", height: "100%" }} alt="Pendant Fifteen" />
                    </div>,
                    <div className="portfolio">
                         <img src={sixteen} style={{ width: "100%", height: "100%" }} alt="Pendant Sixteen" />
                    </div>,

					
				]}
				slide={lightboxController.slide}
			/>

</div>
		</>
	);
}



export default Fancy;