import React from 'react'
import './Signup.css';
import { Link } from 'react-router-dom';

function Signup() {
  return (
    <div>
      <div className='container'>
        <div className='row'>
            <div className='col-md-3'></div>
            <div className='col-md-6 signinheading'>
                <h1>Create A New Account</h1>
            </div>
            <div className='col-md-3'></div>
        </div>
      </div>

      <div className='container'>
        <div className='row'>
            <div className='col-md-3'></div>
            <div className='col-md-6'>
              <form>
                <div className='container'>
                  <div className='row'>
                    <div className='col-md-6'>
                    <label for="exampleInputEmail1" className="form-label">First Name</label>
    <input type="text" className="form-control"/>
                    </div>
                    <div className='col-md-6'>
                    <label for="exampleInputEmail1" className="form-label">Last Name</label>
    <input type="text" className="form-control"/>
                    </div>
                  </div>

                  <div className='row'>
                    <div className='col-md-6'>
                    <label for="exampleInputEmail1" className="form-label">Email</label>
    <input type="email" className="form-control"/>
                    </div>
                    <div className='col-md-6'>
                    <label for="exampleInputEmail1" className="form-label">Password</label>
    <input type="password" className="form-control"/>
                    </div>
                  </div>

                  <div className='row'>
                    <div className='col-md-6'>
                    <label for="exampleInputEmail1" className="form-label">Confirm Passsword</label>
    <input type="password" className="form-control"/>
                    </div>
                    <div className='col-md-6'>
                    <label for="exampleInputEmail1" className="form-label">Phone</label>
    <input type="number" className="form-control"/>
                    </div>
                  </div>
                  <div className='row' style={{marginTop:"20px",marginBottom:"20px"}}>
                    <div className='col-md-6' style={{textAlign:"right"}}>
                       <Link className='btn btn-dark'>Create An Account</Link>
                    </div>
                    <div className='col-md-6'>
                       <Link className='btn btn-outline-dark' to="/signin">Back to Login</Link>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className='col-md-3'></div>
        </div>
      </div>
    </div>
  )
}

export default Signup
