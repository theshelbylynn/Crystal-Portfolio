import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import one from './images/1.png';
import two from './images/2.png';
import three from './images/3.png';
import four from './images/4.png';




function App() {
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

<img id="pic" onClick={() => openLightboxOnSlide(1) } src={one} alt="Logo One" />
<img id="pic" onClick={() => openLightboxOnSlide(2)} src={two} alt="Logo One" />
		
			<FsLightbox
				toggler={lightboxController.toggler}
				sources={[
					<div className="portfolio">
                         <img src={one} div style={{ width: "100%", height: "100%" }} alt="Pendant One" />
                    </div>,

                    <div className="portfolio">
                         <img src={two} div style={{ width: "100%", height: "100%" }} alt="Pendant One" />
                    </div>
				]}
				slide={lightboxController.slide}
			/>
		</>
	);
}



export default App;