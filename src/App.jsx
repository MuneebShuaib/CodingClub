import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//this is for some animations
import 'animate.css';


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
      <Navbar className="header" />



      {/* this needs to be styled probably animation too*/}
      <button className="animate__animated the_button" onClick={animate}>There are {count} coding club members!</button>

      <Navbar className="footer" />
    </>
  )
}

export default App
