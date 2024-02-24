import React from 'react'
import './App.css'
import { useState } from 'react';

function Masthead() {
  const [count, setCount] = useState(500)
  const [prev, setPrev] = useState(1);
  const [prevprev, setPrevprev] = useState(0);
  const [final, setFinal] = useState(1);



  function animate() {


    setFinal(prev + prevprev);
    setPrevprev(prev);
    setPrev(prev + prevprev);





    console.log(count, final, prev, prevprev)
    setCount(500 + final)







    const element = document.querySelector('.the_button');
    element.classList.add('animate__animated', 'animate__jello');
    element.addEventListener('animationend', handleAnimationEnd, { once: true });

    function handleAnimationEnd(event) {
      event.stopPropagation();
      element.classList.remove('animate__animated', 'animate__jello');
    }
  }
  return (
    <button data-text="This uses a fibbonacci sequence" className="tooltip button is-danger animate__animated the_button" style={{ margin: "40px" }} onClick={animate}>There are {count} coding club members!</button>

  )
}

export default Masthead