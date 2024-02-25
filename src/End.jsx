import React from 'react'
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import 'bulma/css/bulma.min.css';
import jsLogo from './assets/js.svg'

function End() {
  return (
    <>


      <div className="has-background-warning columns is-centered">
        <div className="column is-one-third mt-4">
          <p className="has-text-centered has-text-dark">Built with: </p>
          <div className="is-flex is-justify-content-center"> {/* Center the images */}
            <img className="image is-32x32" src={reactLogo} alt="React Logo" /> {/* Use Bulma 'image' class */}
            <img className="image is-32x32" src={jsLogo} alt="JS Logo" />

            <img className="image is-32x32" src={viteLogo} alt="Vite Logo" />

          </div>
        </div>
      </div>


    </>)
}

export default End