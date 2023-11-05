import React from 'react';
import './Feedback.css'


function Feedback() {
  return (
    <>
      <div className='container-fluid' style={{ background: "#eee", padding: "20px" }}>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <h2>FEEDBACK</h2>
            </div>
          </div>
        </div>
      </div>

      <div className='container'>
        <div className='row'>
          <div className='col-md-12' style={{ textAlign: "center" }}>
            <h3 style={{ marginTop: "20px", fontWeight: "bold" }}>Please Provide Your Feedback <br /> Your Feedback is Important for us</h3>
          </div>

          <div className='row'>
            <div className='col-md-3'></div>
            <div className='col-md-6'>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Your Feedback</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="10"></textarea>
                <button className='btn btn-dark mt-3'>Submit</button>
              </div>
            </div>
            <div className='col-md-3'></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Feedback
