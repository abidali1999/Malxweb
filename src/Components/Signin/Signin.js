import React from 'react'
import './Sign.css';
import { Link } from 'react-router-dom';

function Signin() {
  return (
    <div>
      <div className='container'>
        <div className='row'>
            <div className='col-md-4'></div>
            <div className='col-md-4 signinheading'>
                <h1>Login Your Account</h1>
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
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" />
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <div className='row' style={{marginBottom:"20px"}}>
    <div className='col-md-6'>
    <Link type="submit" className="btn btn-dark" to="/dashboard">Login</Link><br />
    <Link to='/forgot'>Forgot Password</Link>
    </div>
    <div className='col-md-6' style={{textAlign:"right"}}>
    <Link type="submit" className="btn btn-outline-dark" to="/signup">Signup</Link>
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

export default Signin
