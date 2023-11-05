import React from 'react'
import './Forgot.css';
import { Link } from 'react-router-dom';

function Forgot() {
  return (
    <div style={{height:"calc(100vh-93px-304px)"}}> 
      <div className='container' >
        <div className='row'>
            <div className='col-md-4'></div>
            <div className='col-md-4 signinheading'>
                <h1>Recover Your Account</h1>
            </div>
            <div className='col-md-4'></div>
        </div>
      </div>

      <div className='container'>
        <div className='row'>
            <div className='col-md-4'></div>
            <div className='col-md-4'>
            <form>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
  </div>
  <div className='row' style={{marginBottom:"20px"}}>
      <div className='col-md-12'>
    <Link type="submit" className="btn btn-dark" to="/signin">Back to Login</Link>
    </div>
  </div>
  
</form>
            </div>
            <div className='col-md-4'></div>
        </div>
      </div>
    </div>
  )
}

export default Forgot
