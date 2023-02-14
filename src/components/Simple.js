import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import one from './images/simple/1.png';
import two from './images/simple/2.png';
import three from './images/simple/3.png';
import four from './images/simple/4.png';
import five from './images/simple/5.png';
import six from './images/simple/6.png';
import seven from './images/simple/7.png';
import eight from './images/simple/8.png';





function Simple() {
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

<h1>Simple Pendants</h1>
        
		<div className="portfolio-container">
        <img id="pic" onClick={() => openLightboxOnSlide(1) } src={one} alt="Simple Pendant One" />
        <img id="pic" onClick={() => openLightboxOnSlide(2) } src={two} alt="Simple Pendant Two" />
        <img id="pic" onClick={() => openLightboxOnSlide(3) } src={three} alt="Simple Pendant Three" />
        <img id="pic" onClick={() => openLightboxOnSlide(4) } src={four} alt="Simple Pendant Four" />
        <img id="pic" onClick={() => openLightboxOnSlide(5) } src={five} alt="Simple Pendant Five" />
        <img id="pic" onClick={() => openLightboxOnSlide(6) } src={six} alt="Simple Pendant Six" />
        <img id="pic" onClick={() => openLightboxOnSlide(7) } src={seven} alt="Simple Pendant Seven" />
        <img id="pic" onClick={() => openLightboxOnSlide(8) } src={eight} alt="Simple Pendant Eight" />

       		
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
					

               
				]}
				slide={lightboxController.slide}
			/>

</div>
		</>
	);
}



export default Simple;