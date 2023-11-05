import React,{useState,useRef} from 'react';
import ProgressBar from './ProgressBar';
import './Directoryscan.css';
import searchfile from '../../assets/icons/search-file.png';
import { Link } from 'react-router-dom';

function Directoryscan() {

  const fileInputRef = useRef(null)

  const opendirectory = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const fileList = event.target.files;
    // Do something with the selected file(s) here

    // You can access the file(s) using fileList
    console.log(fileList);
  };

  // const [progress, setProgress] = useState(0);
  // const [isLoading, setIsLoading] = useState(false);

  // const handleClick = () => {
  //   setIsLoading(true);
  //   // Simulating an async operation, like an API call
  //   setTimeout(() => {
  //     setIsLoading(false);
  //     setProgress(100);
  //     setTimeout(() => setProgress(0), 1000);
  //   }, 2000);
  // };


  return (
    <>
    <div className='container-fluid' style={{ background: "#eee", padding: "20px" }}>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <h2>DIRECTORY SCAN</h2>
            </div>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-md-4'></div>
          <div className='col-md-4' style={{textAlign:"center"}}>
            <img src={searchfile} style={{width:"50%"}}/><br />
            <button className='btn btn-dark' style={{width:"40%"}} onClick={opendirectory}>Choose Directory</button>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleFileChange}
        webkitdirectory="true"
        directory="true"
        multiple />
          </div>
          <div className='col-md-4'></div>
        </div>

        <div className='row' style={{marginTop:"50px",marginBottom:"20px"}}>
          <div className='col-md-6' style={{textAlign:"center"}}>
          <button className='btn btn-dark' style={{width:"40%"}}>SCAN</button>
          {/* <button onClick={handleClick} disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Start'}
      </button> */}
      {/* {isLoading && <ProgressBar percentage={progress} />} */}
          </div>
          <div className='col-md-6' style={{textAlign:"center"}}>
          <Link className='btn btn-outline-dark' style={{width:"40%"}} to="/dashboard">BACK</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Directoryscan
