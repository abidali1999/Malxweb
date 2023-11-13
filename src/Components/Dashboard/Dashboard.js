import React from 'react'
import './Dashboard.css'
import verified from '../../assets/icons/verified.png';
import fileupload from '../../assets/icons/file.png';
import directoryscan from '../../assets/icons/qr-code-scan.png';
import progress from '../../assets/icons/progress.png';
import classification from '../../assets/icons/data-visualization.png';
import setting from '../../assets/icons/settings.png';
import Help from '../../assets/icons/question.png';
import Feedback from '../../assets/icons/feedback.png';
import protection from '../../assets/icons/protection.png'
import { Link } from 'react-router-dom';


function Dashboard() {
  return (
    <div>

        <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                    <div className='row'>
                        <div className='col-md-4' style={{textAlign:"right"}}>
                        <img src={verified} style={{width:"20%"}}/>
                        </div>
                        <div className='col-md-8'>
                        <h3 style={{fontWeight:"bold"}}>YOUR DEVICE IS PROTECTED <br></br>SOME SYSTEM ISSUES REQUIRE YOUR ATTENTION</h3>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
        </div>

        <div className='container'>
            <div className='row'>
                <div className='col-md-3 iconsbox'>
                    <Link to="/fileupload">
                    <div className='ibox'>
                        <img src={fileupload}/>
                        <p>File Upload</p>
                    </div>
                    </Link>
                </div>
                <div className='col-md-3 iconsbox'>
                    <Link to="/directoryscan">
                    <div className='ibox'>
                        <img src={directoryscan}/>
                        <p>Directory Scan</p>
                    </div>
                    </Link>
                </div>

                <div className='col-md-3 iconsbox'>
                    <Link>
                    <div className='ibox'>
                        <img src={progress}/>
                        <p>Progress Monitoring</p>
                    </div>
                    </Link>
                </div>

                <div className='col-md-3 iconsbox'>
                    <Link to="/classfication">
                    <div className='ibox'>
                        <img src={classification}/>
                        <p>Classification Result</p>
                    </div>
                    </Link>
                </div>
               
            </div>

            <div className='row' style={{marginBottom:"50px"}}>
            <div className='col-md-3 iconsbox'>
                    <Link to="/Qthreats"> 
                    <div className='ibox'>
                        <img src={protection} alt='protection'/>
                        <p>Quarantined Threats</p>
                    </div>
                    </Link>
                </div>
                <div className='col-md-3 iconsbox'>
                    <Link to="/setting">
                    <div className='ibox'>
                        <img src={setting}/>
                        <p>Setting</p>
                    </div>
                    </Link>
                </div>

                <div className='col-md-3 iconsbox'>
                    <Link to="/openhelp">
                    <div className='ibox'>
                        <img src={Help}/>
                        <p>Help</p>
                    </div>
                    </Link>
                </div>

                <div className='col-md-3 iconsbox'>
                    <Link to="/feedback">
                    <div className='ibox'>
                        <img src={Feedback}/>
                        <p>Feedback</p>
                    </div>
                    </Link>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Dashboard
