import { useState } from 'react'
import './App.css'
//this is for some animations
//css framework
import 'bulma/css/bulma.min.css';
import End from './End';
import Navbar from './Navbar'
import Masthead from './Masthead';
import 'animate.css';
import Form from './Form';
import Officers from './Officers';
//TODO

// build masthead featuring button and resize button use bulma column?

// put up some pictures of the club from gmu and meetings. use props? alternate display of pics? use props and create two components that work side by side

//write data for officers to be display on the page 

//officers data will be in officers file




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

      <br />
      <div className="columns is-marginless">
        <div className="column container p-5 has-background-dark">
          <p className='main-text is-size-4 has-text-light'>Founded in 2019 and 100% student run, the Coding Club has provided weekly meetings to Northen Virginia Community College (NVCC) students on coding and many other topics.</p>
          <p className="main-text is-size-4 has-text-light">As of Febuary 2024, the club has around 500 members.</p>
          <p className="main-text is-size-4 has-text-light"></p>
          <p className="main-text is-size-4 has-text-light">The club abides by the club constitution found on the notion page.</p>
          <p className="main-text is-size-4 has-text-light">Officers are fairly elected by all club members at the election meeting.</p>
        </div>
        <div className="column has-background-light is-fluid">
          <button data-text="This uses a fibbonacci sequence" className="tooltip button is-danger animate__animated the_button is-size-4" style={{ margin: "40px" }} onClick={animate}>There are {count} coding club members!</button>
          <p className='main-text text-center is-size-4'>Fun fact! This button counts up in a fibbonacci sequence!</p>
          <p className=' main-text text-center is-size-4'>Want to become a member? Fill out the form below or contact us on Linkedin.</p>
          <div className="buttons is-centered">

            <a href="https://www.linkedin.com/company/nvcc-coding-club/
"><button className="button-nav button is-success">LinkedIn</button></a>
            <a href="#form"><button className="button-nav button is-warning">Form</button></a>
          </div></div>

      </div>

      <Officers></Officers>


      <Form></Form>
      <Navbar className="footer" />
      <End />

    </>
  )
}

export default App
