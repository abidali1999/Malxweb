import React, { useState, useRef } from 'react';
import ProgressBar from './ProgressBar';
import './Directoryscan.css';
import searchfile from '../../assets/icons/search-file.png';
import { Link } from 'react-router-dom';
import Ctitle from '../Ctitle/Ctitle';

function Directoryscan() {

  const [selectedDirectory, setSelectedDirectory] = useState(null);
  const [showProgressBar, setShowProgressBar] = useState(false);

  // const handleDirectoryChange = (e) => {
  //   const files = e.target.files;
  //   setSelectedDirectory(files.length > 0 ? files[0].webkitRelativePath : null);
  // };

  const handleDirectoryChange = (e) => {
    const files = e.target.files;
    const path = files.length > 0 ? files[0].webkitRelativePath : null;
    setSelectedDirectory(path);
  };



  const handleClick = () => {
    setShowProgressBar(!showProgressBar);
  };

  // Update your handleClick function to send a request to the server
const handlesubmit = async () => {
  setShowProgressBar(!showProgressBar);

  if (selectedDirectory) {
    try {
      // Send a POST request to your server to save the directory path
      await fetch('http://localhost:5000/api/directory/save-path', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ path: selectedDirectory }),
      });
    } catch (error) {
      console.error('Error saving directory path:', error);
    }
  }
};

  return (
    <>

      <Ctitle title="Directory Scan" />
      <div className='container'>
        <div className='row'>
          <div className='col-md-4'></div>
          <div className='col-md-4' style={{ textAlign: "center" }}>

            {showProgressBar && (
              <div className="progress" style={{ marginTop: "50px" }}>
                <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{ width: '25%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                  25%
                </div>
              </div>

            )}
            <img src={searchfile} style={{ width: "50%" }} /><br />
            <form onSubmit={handlesubmit}>
              <label htmlFor="directoryUpload">Select Directory</label>
              <input
                type="file"
                id="directoryUpload"
                webkitdirectory="true"
                directory="true" // For non-Chrome browsers
                onChange={handleDirectoryChange}
              />

              {selectedDirectory && (
                <div>
                  <p>Selected Directory:</p>
                  <p>{selectedDirectory}</p>
                </div>
              )}
              <button className='btn btn-dark mt-2'>Save path</button>
            </form>

          </div>
          <div className='col-md-4'></div>
        </div>

        <div className='row' style={{ marginTop: "50px", marginBottom: "20px" }}>
          <div className='col-md-6' style={{ textAlign: "center" }}>
            <button className='btn btn-dark' style={{ width: "40%" }} onClick={handleClick}> {showProgressBar ? 'Cancel' : 'Scan'}</button>
          </div>
          <div className='col-md-6' style={{ textAlign: "center" }}>
            <Link className='btn btn-outline-dark' style={{ width: "40%" }} to="/dashboard">BACK</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Directoryscan
