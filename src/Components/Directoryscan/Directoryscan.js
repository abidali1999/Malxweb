import React, { useState, useRef,useEffect  } from 'react';
import './Directoryscan.css';
import searchfile from '../../assets/icons/search-file.png';
import { Link } from 'react-router-dom';
import Ctitle from '../Ctitle/Ctitle';

function Directoryscan() {
  const fileInputRef = useRef(null);
  const [selectedDirectory, setSelectedDirectory] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [predictionResults, setPredictionResults] = useState({});
  const [validFilePaths, setValidFilePaths] = useState([]);
  const [scanStartTime, setScanStartTime] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);

  const closeModal = () => {
    // Close the modal
    setModalOpen(false);
  };

  const handleDirectoryChange = (event) => {
    const files = event.target.files;
    console.log("total files: ",files.length)
    if (files.length > 0) {
      const directoryPath = files[0].webkitRelativePath;
      setSelectedDirectory(directoryPath);

      const fileList = Array.from(files);
      const maxFileSize = 3 * 1024 * 1024;

      const validFiles = fileList.filter(
        (file) =>
          (file.name.endsWith('.dll') || file.name.endsWith('.exe')) &&
          file.size <= maxFileSize
      );

      const validPaths = validFiles.map((file) => URL.createObjectURL(file));
      setValidFilePaths(validPaths);
    }
  };
  const saveScanData = (endTime) => {
    const scanData = {
      directoryPath: selectedDirectory,
      dateTime: new Date().toLocaleString(),
      totalFilesScanned: validFilePaths.length,
      totalTimeTaken: calculateTimeDifference(scanStartTime, endTime),
      threatsFound: Object.keys(predictionResults).filter(
        (fileName) => predictionResults[fileName] !== 'benign'
      ),
    };

    // Retrieve existing scan history from local storage or initialize an empty array
    const existingScanHistory = JSON.parse(localStorage.getItem('scanHistory')) || [];

    // Add the current scan data to the history
    existingScanHistory.push(scanData);

    // Save the updated scan history back to local storage
    localStorage.setItem('scanHistory', JSON.stringify(existingScanHistory));
  };

  const calculateTimeDifference = (startTime, endTime) => {
    if (startTime && endTime) {
      const durationInMilliseconds = endTime - startTime;
      const seconds = Math.floor(durationInMilliseconds / 1000);
      const minutes = Math.floor(seconds / 60);
      const formattedTime = `${minutes}m ${seconds % 60}s`;

      return formattedTime;
    }

    return 'N/A';
  };


  useEffect(() => {
    console.log("valid paths: ", validFilePaths.length);
  }, [validFilePaths]); 
  const handleClick = async () => {
    setScanStartTime(new Date());
    if (selectedDirectory && validFilePaths.length > 0) {
      setIsLoading(true);
      setProgress(0);
      setPredictionResults({});
      const suspiciousFiles = [];
      const promises = validFilePaths.map(async (filePath, index) => {
        const response = await fetch(filePath);
        const blob = await response.blob();
        const file = new File([blob], blob.name || `unknownFileName_${index}`);
        await createAndSendByteplot(file, index);
        if (
          predictionResults[file.name] &&
          predictionResults[file.name] !== 'benign'
        ) {
          suspiciousFiles.push(filePath);
        }
      });
      try {
        await Promise.all(promises);
      } catch (error) {
        console.error('An error occurred during predictions:', error);
      } finally {
        setIsLoading(false);
        setProgress(100);

        if (suspiciousFiles.length === 0) {
          console.log('Scan complete, no suspicious files found');
        } else {
          console.log('Suspicious files found:', suspiciousFiles);
        }
        const scanEndTime = new Date();
        saveScanData(scanEndTime);
        setModalOpen(true);
      }
    }
  };

  const createAndSendByteplot = async (file, index) => {
    if (!file.name) {
      console.error('File name is undefined:', file);
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch(
        'https://abidali1999063.pythonanywhere.com/predict',
        {
          method: 'POST',
          body: formData,
        }
      );

      if (response.ok) {
        const data = await response.json();
        setPredictionResults((prevResults) => ({
          ...prevResults,
          [file.name]: data.predicted_class,
        }));
      } else {
        console.error('Prediction request failed for file:', file.name);
      }
    } catch (error) {
      console.error('An error occurred during prediction:', error);
    }
    setProgress((prevProgress) => (prevProgress+1)*(100 / validFilePaths.length));
  };

  return (
    <>
      <Ctitle title="Directory Scan" />
      <div className='container'>
        <div className='row'>
          <div className='col-md-4'></div>
          <div className='col-md-4' style={{ textAlign: 'center' }}>
            <img src={searchfile} style={{ width: '50%' }} />
            <br />
            <label htmlFor='directoryUpload'>Select Directory</label>
            <input
              type='file'
              id='directoryUpload'
              webkitdirectory='true'
              directory='true'
              ref={fileInputRef}
              onChange={handleDirectoryChange}
            />

            {selectedDirectory && (
              <div>
                <p>Selected Directory:</p>
                <p>{selectedDirectory}</p>
              </div>
            )}
            {isLoading && (
              <div className='progress' style={{ marginTop: '20px' }}>
                <div
                  className='progress-bar progress-bar-striped progress-bar-animated'
                  role='progressbar'
                  style={{ width: `${progress}%` }}
                  aria-valuenow={progress}
                  aria-valuemin='0'
                  aria-valuemax='100'
                >
                  {Math.round(progress)}%
                </div>
              </div>
            )}
          </div>
          <div className='col-md-4'></div>
        </div>

        <div className='row' style={{ marginTop: '50px', marginBottom: '20px' }}>
          <div className='col-md-6' style={{ textAlign: 'center' }}>
            <button
              className='btn btn-dark'
              style={{ width: '40%' }}
              onClick={handleClick}
              disabled={isLoading}
            >
              Scan
            </button>
          </div>
          <div className='col-md-6' style={{ textAlign: 'center' }}>
            <Link
              className='btn btn-outline-dark'
              style={{ width: '40%' }}
              to='/dashboard'
            >
              BACK
            </Link>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div className="modal" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Scan Details</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={closeModal}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                {selectedDirectory && (
                  <div>
                    <p><strong>Directory:</strong> {selectedDirectory}</p>
                    <p><strong>Date:</strong> {new Date().toLocaleString()}</p>
                    <p><strong>Total Files Scanned:</strong> {validFilePaths.length}</p>
                    <p><strong>Total Time Taken:</strong> {calculateTimeDifference(scanStartTime, new Date())}</p>
                    <p><strong>Threats Found:</strong> {Object.keys(predictionResults).filter(fileName => predictionResults[fileName] !== 'benign').join(', ')}</p>
                  </div>
                )}
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={closeModal}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Directoryscan;
