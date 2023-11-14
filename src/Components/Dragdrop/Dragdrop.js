import React, { useState, useRef } from 'react';
import './Dragdrop.css';

function Dragdrop() {
  const [files, setFiles] = useState(null);
  const [predictionResult, setPredictionResult] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const inputRef = useRef();

  const handledragover = (event) => {
    event.preventDefault();
  };

  const handledrop = (event) => {
    event.preventDefault();
    setFiles(event.dataTransfer.files);
  };

  const handleUpload = async () => {
    if (files && files.length > 0) {
      const formData = new FormData();
      formData.append('file', files[0]); // Assuming you want to process the first file

      try {
        // Send the file to your API for prediction
        const response = await fetch('https://abidali1999063.pythonanywhere.com/predict', {
          method: 'POST',
          body: formData,
        });

        if (response.ok) {
          // Successfully received a response from the API
          const jsonResponse = await response.json();
          const result = jsonResponse.predicted_class;
          setPredictionResult(result);

          // Open the modal
          setModalOpen(true);
        } else {
          // Handle API response error
          alert('Prediction failed. Please try again.');
        }
      } catch (error) {
        // Handle any network or API request errors
        console.error('API request failed:', error);
        alert('Prediction request failed. Please try again.');
      }
    } else {
      // No file selected, handle accordingly
      alert('No file selected for prediction.');
    }
  };

  const closeModal = () => {
    // Close the modal
    setModalOpen(false);
    // Clear the selected file(s) state
    setFiles(null);
  };

  return (
    <>
      {isModalOpen && (
        <div className="modal" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Prediction Result</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={closeModal}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <p><strong>Predicted Class:</strong> {predictionResult}</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={closeModal}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {files ? (
        <div className='uploads'>
          <ul>
            {Array.from(files).map((file, idx) => <li key={idx}>{file.name}</li>)}
          </ul>
          <div className="actions">
            <button onClick={() => setFiles(null)}>Cancel</button>
            <button onClick={handleUpload}>Upload</button>
          </div>
        </div>
      ) : (
        <div className='dropzone' onDragOver={handledragover} onDrop={handledrop}>
          <h3>Drag & Drop files to upload</h3>
          <h3>Or</h3>
          <input type='file' multiple onChange={(event) => setFiles(event.target.files)} hidden ref={inputRef} />
          <button className='btn btn-dark' onClick={() => inputRef.current.click()}>Select Files</button>
        </div>
      )}
    </>
  );
}

export default Dragdrop;
