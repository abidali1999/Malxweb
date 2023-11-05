import React from 'react';
import './Tutorial.css';
import dashboard from '../../assets/images/dashboard.png'
import classification from '../../assets/images/classfication.png'
import directory from '../../assets/images/directory.png'
function Tutorial() {
  return (
    <>
      <div className='container'>
        <div  className='row'>
            <div className='col-md-12 tutorialhead'>
                <h1>How to remove a virus or malware from <br /> your computer</h1>
            </div>
        </div>
      </div>

      <div className='container'>
        <div className='row stepsrow'>
            <div className='col-md-4 stepimg'>
                <img src={dashboard} alt="img1" style={{width:"100%"}}/>
            </div>
            <div className='col-md-1'></div>
            <div className='col-md-7 steponehead'>
                <h2>Step 1 : Install online virus scan</h2>
                <p>Download and install Malx' free virus scanner software. Click the “Scan” button and watch our virus detector quickly scan your device for malicious software and viruses.</p>
            </div>
        </div>

        <div className='row stepsrow'>
        <div className='col-md-7 steponehead'>
                <h2>Step 2 : Review detected cyber threats</h2>
                <p>After the scan is complete, Malx reports the detected malicious software, viruses and threats and asks if you want to remove them.</p>
            </div>
            <div className='col-md-1'></div>
            <div className='col-md-4 stepimg'>
                <img src={classification} alt="img1" style={{width:"100%"}}/>
            </div>
            
            
        </div>

        <div className='row stepsrow'>
            <div className='col-md-4 stepimg'>
                <img src={directory} alt="img1" style={{width:"100%"}}/>
            </div>
            <div className='col-md-1'></div>
            <div className='col-md-7 steponehead'>
                <h2>Step 3 : Get rid of viruses and malware</h2>
                <p>Once you approve the virus removal, our online virus scanner and AV scanner tool will clean up malware, so your device is secure.</p>
            </div>
        </div>

        
      </div>
    </>
  )
}

export default Tutorial
