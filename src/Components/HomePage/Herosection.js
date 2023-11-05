import React from 'react';
import './Herosection.css';
import { Link } from 'react-router-dom';

function Herosection() {
  return (
    <>
     <div className='container-fluid mainhero'>
        <div className='container'>
        <div className='row'>
            <div className='col-md-8 herosection'>
                <h1>Free Virus Scanner</h1>
                <p>
                Scan and remove viruses and malware from your device with our free virus scanner and AV scanner. Our virus scan supports all devices - Windows, Mac, Android and iOS.

Get advanced virus protection and antivirus with Malwarebytes Premium.
                </p>
            <Link to="/" className='btn btn-primary herosectionbtn'>FREE VIRUS SCANNER DOWNLOAD</Link>
            </div>
            <div className='col-md-4'></div>
        </div>
     </div>
     </div>
    </>
  )
}

export default Herosection
