import React, { useState, useRef } from 'react';
import './Dragdrop.css';

function Dragdrop() {
  const [files, setFiles] = useState(null);
  const [predictionResult, setPredictionResult] = useState(null);
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
          if (result !== 'benign') {
            // Encrypt the file using Fernet
            const file = files[0];
            const reader = new FileReader();
            reader.onload = async (event) => {
              const fileData = event.target.result;
              const key = Fernet.generateKey();
              const cipher = new Fernet(key);
              const encryptedData = cipher.encrypt(fileData);
  
              // Convert the encrypted data to a Blob
              const encryptedBlob = new Blob([encryptedData], { type: file.type });
  
              // Move the file to an isolated location on the user's system
              const isolatedPath = '/path/to/isolated/location'; // Specify your desired path
              const isolatedFilePath = `${isolatedPath}/${file.name}`;
              const downloadLink = document.createElement('a');
              downloadLink.href = URL.createObjectURL(encryptedBlob);
              downloadLink.download = file.name;
              downloadLink.click();
  
              // Call the API with file details and Fernet key
              const apiResponse = await fetch('https://your-api-endpoint/quarantine', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  email: 'user@example.com', // Replace with actual user email
                  source_path: file.name,
                  quarantine_path: isolatedFilePath,
                  key_text: key.toString('utf-8'),
                }),
              });
  
              if (!apiResponse.ok) {
                alert('Failed to call quarantine API. Please try again.');
              }
            };
  
            reader.readAsArrayBuffer(file);
          }
          
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

  return (
    <>
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

      {predictionResult && (
        <div className="prediction-label">
          <p><strong>Predicted Class:</strong> {predictionResult}</p>
        </div>
      )}
    </>
  );
}

export default Dragdrop;
