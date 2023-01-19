import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import one from './images/1.png';
import two from './images/2.png';
import three from './images/3.png';
import four from './images/4.png';




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
        <img id="pic" onClick={() => openLightboxOnSlide(2)} src={two} alt="Pendant Two" />
        <img id="pic" onClick={() => openLightboxOnSlide(3)} src={three} alt="Pendant Three" />
        <img id="pic" onClick={() => openLightboxOnSlide(4)} src={four} alt="Pendant Four" />
        </div>		
			<FsLightbox
				toggler={lightboxController.toggler}
				sources={[
					 <div className="portfolio">
                         <img src={one} alt="Pendant One" />
                    </div>,

                    <div className="portfolio">
                         <img src={two} alt="Pendant Two" />
                    </div>,

                    <div className="portfolio">
                         <img src={three} alt="Pendant Three" />
                    </div>,

                    <div className="portfolio">
                         <img src={four} alt="Pendant Four" />
                    </div>
				]}
				slide={lightboxController.slide}
			/>
		</>
	);
}



export default Fancy;