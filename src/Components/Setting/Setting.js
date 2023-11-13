import React from 'react';
import './Setting.css'
import { Link } from 'react-router-dom';
import Ctitle from '../Ctitle/Ctitle';


function Setting() {
  return (
    <>
      {/* <div className='container-fluid' style={{ background: "#eee", padding: "20px" }}>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <h2>SETTING</h2>
            </div>
          </div>
        </div>
      </div> */}

      <Ctitle title="Setting" />

      <div className='container' style={{ marginTop: "20px", marginBottom: "20px" }}>
        <div className='row'>
          <div className='col-md-12'>
            <ul class="nav nav-tabs" id="myTab" role="tablist">
              <li class="nav-item" role="presentation">
                <button class="nav-link active" id="general-tab" data-bs-toggle="tab" data-bs-target="#general" type="button" role="tab" aria-controls="general" aria-selected="true">General</button>
              </li>
              <li class="nav-item" role="presentation">
                <button class="nav-link" id="notification-tab" data-bs-toggle="tab" data-bs-target="#notification" type="button" role="tab" aria-controls="notification" aria-selected="false">Notification</button>
              </li>
              <li class="nav-item" role="presentation">
                <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Security</button>
              </li>
              <li class="nav-item" role="presentation">
                <button class="nav-link" id="account-tab" data-bs-toggle="tab" data-bs-target="#account" type="button" role="tab" aria-controls="account" aria-selected="false">Account</button>
              </li>
              <li class="nav-item" role="presentation">
                <button class="nav-link" id="about-tab" data-bs-toggle="tab" data-bs-target="#about" type="button" role="tab" aria-controls="about" aria-selected="false">About</button>
              </li>
            </ul>
            <div class="tab-content" id="myTabContent">
              <div class="tab-pane fade show active" id="general" role="tabpanel" aria-labelledby="general-tab">
                {/* genral tab content */}
                <div className='container'>
                  <div className='row'>
                    <div className='col-md-8'>
                      <h4 style={{ marginTop: "20px", fontWeight: "bold", fontSize: "16px" }}>Application Update</h4>
                      <p>Automatically download and start Updates</p>
                      <button type="button" class="btn btn-outline-dark">Check for Updates</button>
                    </div>
                    <div className='col-md-4' style={{ marginTop: "30px", textAlign: "right" }}>
                      <label class="switch">
                        <input type="checkbox" />
                        <span class="slider round"></span>
                      </label>
                    </div>
                  </div>

                  <hr />

                  <div className='row'>
                    <div className='col-md-8'>
                      <h4 style={{ marginTop: "20px", fontWeight: "bold", fontSize: "16px" }}>Windows Exproler Setting</h4>
                      <p>Add Malx Options to Window Explroler</p>
                    </div>
                    <div className='col-md-4' style={{ marginTop: "30px", textAlign: "right" }}>
                      <label class="switch">
                        <input type="checkbox" />
                        <span class="slider round"></span>
                      </label>
                    </div>
                  </div>

                  <hr />

                  <div className='row'>
                    <div className='col-md-8'>
                      <h4 style={{ marginTop: "20px", fontWeight: "bold", fontSize: "16px" }}>Usage and Threat Statistics</h4>
                      <p>Help fight malware by providing usage and threat statistics</p>
                      <Link><b>View Privacy Policy</b></Link>
                    </div>
                    <div className='col-md-4' style={{ marginTop: "30px", textAlign: "right" }}>
                      <label class="switch">
                        <input type="checkbox" />
                        <span class="slider round"></span>
                      </label>
                    </div>
                  </div>

                  <hr />

                  <div className='row'>
                    <div className='col-md-8'>
                      <h4 style={{ marginTop: "20px", fontWeight: "bold", fontSize: "16px" }}>Proxy Server</h4>
                      <p>Configure Malx to connect to the internet using a proxy server</p>
                      <hr />
                      <Link className='btn btn-outline-dark'>Restore default settings</Link>
                    </div>
                    <div className='col-md-4' style={{ marginTop: "30px", textAlign: "right" }}>
                      <label class="switch">
                        <input type="checkbox" />
                        <span class="slider round"></span>
                      </label>
                    </div>
                  </div>

                </div>
                {/* End General tab content */}
              </div>
              <div class="tab-pane fade" id="notification" role="tabpanel" aria-labelledby="notification-tab">
                {/* Notification tab content */}
                <div className='container'>
                  <div className='row'>
                    <div className='col-md-8'>
                      <h4 style={{ marginTop: "15px", fontSize: "18px", fontWeight: "bold" }}>Notifications</h4>
                      <p>Show a mothly security summary</p>
                    </div>
                    <div className='col-md-4' style={{ marginTop: "35px", textAlign: "right" }}>
                      <label class="switch">
                        <input type="checkbox" />
                        <span class="slider round"></span>
                      </label>
                    </div>
                  </div>

                  <div className='row'>
                    <div className='col-md-8'>
                      <p style={{ marginTop: "10px" }}>Show all notification is Windows notification area</p>
                    </div>
                    <div className='col-md-4' style={{ marginTop: "0px", textAlign: "right" }}>
                      <label class="switch">
                        <input type="checkbox" />
                        <span class="slider round"></span>
                      </label>
                    </div>
                  </div>

                  <div className='row'>
                    <div className='col-md-8'>
                      <p style={{ marginTop: "10px" }}>Close non critical notifications after</p>

                    </div>
                    <div className='col-md-4' style={{ marginTop: "0px", textAlign: "right" }}>
                      <select class="form-select" aria-label="Default select example">
                        <option selected>5 seconds</option>
                        <option value="1">6 seconds</option>
                        <option value="2">7 seconds</option>
                        <option value="3">8 seconds</option>
                        <option value="3">9 seconds</option>
                      </select>
                    </div>
                  </div>
                  <hr />
                  <div className='row'>
                    <div className='col-md-8'>
                      <h4 style={{ marginTop: "15px", fontSize: "18px", fontWeight: "bold" }}>Marketing Prefrences</h4>
                      <p style={{ marginTop: "10px" }}>Show Promotional Notifications from Malx</p>

                    </div>
                    <div className='col-md-4' style={{ marginTop: "35px", textAlign: "right" }}>
                      <label class="switch">
                        <input type="checkbox" />
                        <span class="slider round"></span>
                      </label>
                    </div>
                  </div>
                  <hr />
                  <div className='row'>
                    <div className='col-md-8'>
                      <h4 style={{ marginTop: "15px", fontSize: "18px", fontWeight: "bold" }}>Scan reminder</h4>
                      <p style={{ marginTop: "10px" }}>Get reminded to run a scan when new files or program are downloaded</p>

                    </div>
                    <div className='col-md-4' style={{ marginTop: "35px", textAlign: "right" }}>
                      <label class="switch">
                        <input type="checkbox" />
                        <span class="slider round"></span>
                      </label>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-md-8'>
                      <p style={{ marginTop: "10px" }}>Notify me</p>

                    </div>
                    <div className='col-md-4' style={{ marginTop: "0px", textAlign: "right" }}>
                      <select class="form-select" aria-label="Default select example">
                        <option selected>Weekly recommended</option>
                        <option value="1">Hourly</option>
                        <option value="2">Weekly</option>
                        <option value="3">Every 2 weeks</option>
                      </select>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-md-8'>
                      <p style={{ marginTop: "10px" }}>Get notified when a scan hasn't been run after a specified number of days</p>

                    </div>
                    <div className='col-md-4' style={{ marginTop: "0px", textAlign: "right" }}>
                      <label class="switch">
                        <input type="checkbox" />
                        <span class="slider round"></span>
                      </label>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-md-8'>
                      <p style={{ marginTop: "10px" }}>Notify me after</p>

                    </div>
                    <div className='col-md-4' style={{ marginTop: "0px", textAlign: "right" }}>
                      <select class="form-select" aria-label="Default select example">
                        <option selected>1 day</option>
                        <option value="1">3 days</option>
                        <option value="2">14 days</option>
                        <option value="3">30 days</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">...</div>
              <div class="tab-pane fade" id="account" role="tabpanel" aria-labelledby="account-tab">
                <div className='container'>
                  <div className='row'>
                    <div className='col-md-4'></div>
                    <div className='col-md-4'>
                      <div className='updateaccount'>
                        <form>
                          <center>
                            <h3 className='mt-5 updatetitle'>Update Your Account Info</h3>
                          </center>
                          <input type='text' className='form-control' placeholder='Enter Name' />
                          <input type='email' className='form-control mt-3' placeholder='Enter Email' />
                          <input type='password' className='form-control mt-3' placeholder='Enter password' />
                          <input type='number' className='form-control mt-3' placeholder='Enter phone' />
                          <input type='submit' className='btn btn-dark mt-3' value="Update" />
                        </form>
                      </div>
                    </div>
                    <div className='col-md-4'></div>
                  </div>
                </div>
              </div>

              <div class="tab-pane fade" id="about" role="tabpanel" aria-labelledby="about-tab">
                <div className='container'>
                  <div className='row'>
                    <div className='col-md-12'>
                      <h3 className="mt-3" style={{ fontSize: "18px", fontWeight: "bold" }}>Version Information</h3>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-md-4 mt-70'>
                      <h5 style={{ fontSize: "18px", fontWeight: "bold" }}>Malx Version</h5>
                      <p style={{ marginTop: "20px" }}>4.6.4.286</p>
                      <p><b>Check for updates</b></p>
                      <p><small>Last Updated:10/17/2023         7:53pm</small></p>

                    </div>
                    <div className='col-md-4 mt-70'>
                      <h5 style={{ fontSize: "18px", fontWeight: "bold" }}>Updated Package Version</h5>
                      <p style={{ marginTop: "20px" }}>1.0.76295</p>

                    </div>
                    <div className='col-md-4 mt-70'>
                      <h5 style={{ fontSize: "18px", fontWeight: "bold" }}>COMPONENT PACKAGE VERSION</h5>
                      <p style={{ marginTop: "20px" }}>1.0.2613</p>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Setting
