import React from 'react'
import './feedbackStyle.css'
import Navbar from './Navbar'
const Feedback = () => {
  return (
    <>
    <Navbar/>
    <div className="feedbackWrapper">
    <div className="feedback-container">
        
        <p>Enter Counsellor Name:</p>
        <input className="feedbackInput" type="text" />
        <p>Enter your Message: </p>
        <textarea rows="5" col='5' className="feedbackInput" type="text" />
        <br />
        <button className='feedbackSubmit' type="submit" >Submit</button>
    </div>
    </div>
    </>
  )
}

export default Feedback
