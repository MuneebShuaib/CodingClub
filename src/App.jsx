import { useState } from 'react'
import './App.css'
//this is for some animations
//css framework
import 'bulma/css/bulma.min.css';
import End from './End';
import Navbar from './Navbar'
import Masthead from './Masthead';


//TODO

// build masthead featuring button and resize button use bulma column?

// put up some pictures of the club from gmu and meetings. use props? alternate display of pics? use props and create two components that work side by side

//write data for officers to be display on the page 


// offciers to include:

// Muneeb, Shai, Alait, Diego

//Former officers to include:

// Jeffrey, Aren


// use props and array.map to display the data in the page in a stylish list.

// write some information about nvcc.

// finish end componenet, write some info about stack, make a bottom area. 






function App() {
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




    <>
      < Navbar className="header" />

      <Masthead></Masthead>
      <button data-text="This uses a fibbonacci sequence" className="tooltip button is-danger animate__animated the_button" style={{ margin: "40px" }} onClick={animate}>There are {count} coding club members!</button>
      {/* this needs to be styled probably animation too*/}
      {/* this can be any animation on animate.css */}

      <Navbar className="footer" />
      <End />

    </>
  )
}

export default App
