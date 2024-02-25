import React from 'react'
import './App.css'
import 'bulma/css/bulma.min.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Mast1 from './assets/mast4.jpg'
import Mast2 from './assets/mast2.png'
import Mast3 from './assets/mast5.jpg'

function Masthead() {





  return (



    <>


      <Carousel

        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={4000}
        showArrows={true}
      >
        <div>
          <img className="image mast" src={Mast1} />
          <p className="legend">Officers and Members compete at George Mason's Hackfax Hackathon</p>
        </div>
        <div>
          <img className="image mast" src={Mast2} />
          <p className="legend">The opening ceremony Hoyahacks 2024</p>
        </div>
        <div>
          <img src={Mast3} className="image mast" />
          <p className="legend">Hazrat shows social engineering phishing exploit</p>
        </div>
      </Carousel>
      );

    </>
  )
}

export default Masthead