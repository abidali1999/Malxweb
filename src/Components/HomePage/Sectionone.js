import React from 'react';
import './Sectionone.css';
import popup from '../../assets/icons/pop-up.png';
import { Link } from 'react-router-dom';
function Sectionone() {
  return (
    <>
      <div className='container sectiononemain'>
        <div className='row'>
            <div className='col-md-12 sectionone'>
                <h1>Common signs of malware, viruses and <br /> cyber threats on your device</h1>
            </div>
        </div>
        </div>

        <div className='container icons'>
            
        <div className='row'>
            <div className='col-md-6'>
                <div className='iconbox'>
                    <img src={popup} />
                    <h3>Lots of pop-ups</h3>
                    <p>
                    They might encourage you to visit unusual sites or <br /> download unfamiliar software.
                    </p>
                </div>

            </div>
            <div className='col-md-6'>
                <div className='iconbox'>
                    <img src={popup} />
                    <h3>Lots of pop-ups</h3>
                    <p>
                    They might encourage you to visit unusual sites or <br /> download unfamiliar software.
                    </p>
                </div>

            </div>
        </div>

        <div className='row'>
            <div className='col-md-6'>
                <div className='iconbox'>
                    <img src={popup} />
                    <h3>Lots of pop-ups</h3>
                    <p>
                    They might encourage you to visit unusual sites or <br /> download unfamiliar software.
                    </p>
                </div>

            </div>
            <div className='col-md-6'>
                <div className='iconbox'>
                    <img src={popup} />
                    <h3>Lots of pop-ups</h3>
                    <p>
                    They might encourage you to visit unusual sites or <br /> download unfamiliar software.
                    </p>
                </div>

            </div>
        </div>

        <div className='row'>
            <div className='col-md-6'>
                <div className='iconbox'>
                    <img src={popup} />
                    <h3>Lots of pop-ups</h3>
                    <p>
                    They might encourage you to visit unusual sites or <br /> download unfamiliar software.
                    </p>
                </div>

            </div>
            <div className='col-md-6'>
                <div className='iconbox'>
                    <img src={popup} />
                    <h3>Lots of pop-ups</h3>
                    <p>
                    They might encourage you to visit unusual sites or <br /> download unfamiliar software.
                    </p>
                </div>

            </div>
        </div>

        <div className='row'>
                    <div className='col-md-12 downloadbtn'>
                        <h1>Our free online virus scanner stops a <br /> virus infection in its tracks.</h1>
                        <Link to="/" className='btn btn-dark btn-lg btndownload'>DOWNLOAD NOW</Link>
                    </div>
                </div>

            </div> 

    </>
  )
}

export default Sectionone
