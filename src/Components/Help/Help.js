import React from 'react';
import guide from '../../assets/icons/guide.png';
import customcare from '../../assets/icons/customercare.png';
import tools from '../../assets/icons/tools.png';
import './Help.css'
import FAQ from '../../Components/HomePage/FAQ';
import Ctitle from '../Ctitle/Ctitle';

function Help() {
  return (
    <>
      {/* <div className='container-fluid' style={{ background: "#eee",padding:"20px"}}>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <h2>HELP</h2>
            </div>
          </div>
        </div>
      </div> */}

      <Ctitle title="Help" />

      <div className='container'>
        <div className='row' style={{marginTop:"20px"}}>
          <div className='col-md-6'>
            <div className='guide'>
              <img src={guide} style={{ width: "7%", marginTop: "10px" }} />
              <h4>MALX User Guide</h4>
              <p>Read the offical instruction manual</p>
            </div>
          </div>
          <div className='col-md-6'>
          <div className='guide'>
              <img src={customcare} style={{ width: "7%", marginTop: "10px" }} />
              <h4>MALX SUPPORT</h4>
              <p>Find answers and troubleshoot issues</p>
            </div>
          </div>
        </div>

        <div className='row' style={{marginTop:"20px"}}>
          <div className='col-md-6'>
          <div className='guide'>
              <img src={tools} style={{ width: "7%", marginTop: "10px" }} />
              <h4>SUPPORT TOOLS</h4>
              <p>Find and fix software issues automatically</p>
            </div>
          </div>
        </div>
      </div>

      <div className='container' style={{marginBottom:"20px"}}>
        <div className='row'>
          <div className='col-md-12'>
            <FAQ />
          </div>
          
        </div>
      </div>
    </>
  )
}

export default Help
