import { useState } from 'react'
import './App.css'
//this is for some animations
import 'animate.css';
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



  return (




    <>
      < Navbar className="header" />

      <Masthead></Masthead>

      {/* this needs to be styled probably animation too*/}
      {/* this can be any animation on animate.css */}

      <Navbar className="footer" />
      <End />

    </>
  )
}

export default App
