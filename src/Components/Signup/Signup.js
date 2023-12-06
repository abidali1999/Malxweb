import React, { useState } from 'react';
import './Signup.css';
import { Link } from 'react-router-dom';
import sha256 from 'crypto-js/sha256';
import axios from 'axios'; // Import Axios

function Signup() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phone, setPhone] = useState('');

  const handleCreateAccount = async () => {
    const fullName = firstName + ' ' + lastName;
    const hashedPassword = sha256(password).toString();
    const api_url = 'https://abidali1999063.pythonanywhere.com/signup_api';
    console.log({
      name: fullName,
      email,
      password: hashedPassword,
      phone,
    });

    try {
      const response = await axios.post(api_url, {
        name: fullName,
        email,
        password: hashedPassword,
        phone,
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log('API Response Data:', response.data);
    } catch (error) {
      console.error('API request failed:', error);
    }
  };


  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div className='col-md-3'></div>
          <div className='col-md-6'>
            <form>
              <div className='row'>
                <div className='col-md-6'>
                  <label htmlFor="firstName" className="form-label">First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className='col-md-6'>
                  <label htmlFor="lastName" className="form-label">Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
              </div>

              <div className='row'>
                <div className='col-md-6'>
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className='col-md-6'>
                  <label htmlFor="password" className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>

              <div className='row'>
                <div className='col-md-6'>
                  <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
                <div className='col-md-6'>
                  <label htmlFor="phone" className="form-label">Phone</label>
                  <input
                    type="number"
                    className="form-control"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </div>

              <div className='row' style={{ marginTop: "20px", marginBottom: "20px" }}>
                <div className='col-md-6' style={{ textAlign: "right" }}>
                  <button className='btn btn-dark' onClick={handleCreateAccount}>
                    Create An Account
                  </button>
                </div>
                <div className='col-md-6'>
                  <Link className='btn btn-outline-dark' to="/signin">Back to Login</Link>
                </div>
              </div>
            </form>
          </div>
          <div className='col-md-3'></div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
