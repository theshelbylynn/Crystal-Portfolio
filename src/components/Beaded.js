import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import one from './images/beaded/one.png';
import two from './images/beaded/two.png';
import three from './images/beaded/three.png';
import four from './images/beaded/four.png';
import five from './images/beaded/five.png';
import six from './images/beaded/six.png';





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
        <div>
        <img id="pic" onClick={() => openLightboxOnSlide(1) } src={one} alt="Pendant One" />
        <img id="pic" onClick={() => openLightboxOnSlide(2) } src={two} alt="Pendant One" />
        <img id="pic" onClick={() => openLightboxOnSlide(3) } src={three} alt="Pendant One" />
        <img id="pic" onClick={() => openLightboxOnSlide(4) } src={four} alt="Pendant One" />
        <img id="pic" onClick={() => openLightboxOnSlide(5) } src={five} alt="Pendant One" />
        <img id="pic" onClick={() => openLightboxOnSlide(6) } src={six} alt="Pendant One" />

        </div>		
			<FsLightbox
				toggler={lightboxController.toggler}
				sources={[
					<div className="portfolio">
                         <img src={one} alt="Pendant One" />
                    </div>,
					<div className="portfolio">
                         <img src={two} alt="Pendant One" />
                    </div>,
					<div className="portfolio">
                         <img src={three} alt="Pendant One" />
                    </div>,
					<div className="portfolio">
                         <img src={four} alt="Pendant One" />
                    </div>,
					<div className="portfolio">
                         <img src={five} alt="Pendant One" />
                    </div>,
					<div className="portfolio">
                         <img src={six} alt="Pendant One" />
                    </div>,

               
				]}
				slide={lightboxController.slide}
			/>
		</>
	);
}



export default Fancy;