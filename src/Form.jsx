import React from 'react'

function Form() {
  return (
    <>
      <div className="has-background-danger container is-fluid py-3">
        <form action="" id="form" className=''>


          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input className="input" type="text" placeholder="Your name" />
            </div>
          </div>



          <div className="field">
            <label className="label">Email</label>
            <div className="control has-icons-left has-icons-right">
              <input className="input is-danger" type="email" placeholder="Please use NVCC email if you wish to be a member" />
              <span className="icon is-small is-left">
                <i className="fas fa-envelope"></i>
              </span>
              <span className="icon is-small is-right">
                <i className="fas fa-exclamation-triangle"></i>
              </span>
            </div>
            <p className="help is-dark">This email is invalid</p>
          </div>

          <div className="field">
            <label className="label">Subject</label>
            <div className="control">
              <div className="select">
                <select>
                  <option>Select dropdown</option>
                  <option>I want to be a member</option>
                  <option>General Comments</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
          </div>

          <div className="field">
            <label className="label">Message</label>
            <div className="control">
              <textarea className="textarea" placeholder="Your message"></textarea>
            </div>
          </div>





          <div className="field is-grouped">
            <div className="control">
              <button className="button is-link" type='submit'>Submit</button>
            </div>
          </div></form></div>
    </>
  )
}

export default Form