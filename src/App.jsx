import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Aside from './Aside'
import './App.css'
//this is for some animations
import 'animate.css';
//css framework
import 'bulma/css/bulma.min.css';


import Navbar from './Navbar'

function App() {
  const [count, setCount] = useState(500)


  function animate() {
    setCount(count + 10)

    const element = document.querySelector('.the_button');
    element.classList.add('animate__animated', 'animate__jello');
    element.addEventListener('animationend', handleAnimationEnd, { once: true });

    function handleAnimationEnd(event) {
      event.stopPropagation();
      element.classList.remove('animate__animated', 'animate__jello');
    }
  }


  return (




    <>
      < Navbar className="header" />

      <Aside />


      {/* the main will be on this page */}
      {/* this needs to be styled probably animation too*/}
      <button className="button is-danger animate__animated the_button" style={{ margin: "40px" }} onClick={animate}>There are {count} coding club members!</button>
      {/* this can be any animation on animate.css */}

      <Navbar className="footer" />
    </>
  )
}

export default App
