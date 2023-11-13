// import React,{useState,useRef} from 'react';
// import './Dragdrop.css';

// function Dragdrop() {

//     const [files, setFiles] = useState(null);
//     const inputRef = useRef()

//     const handledragover=(event)=>{
//         event.preventDefault();
//     }

//     const handledrop=(event)=>{
//         event.preventDefault();
//         setFiles(event.dataTransfer.files)
//     }

//     const handleUpload = () => {
//         const formData = new FormData();
//         formData.append("Files", files);
//         console.log(formData.getAll())
//         // fetch(
//         //   "link", {
//         //     method: "POST",
//         //     body: formData
//         //   }  
//         // )
//       };

//     if (files) return(
//         <div className='uploads'>
//             <ul>
//                 {Array.from(files).map((files, idx)=> <li key={idx}>{files.name}</li>)}
//             </ul>
//             <div className="actions">
//             <button onClick={() => setFiles(null)}>Cancel</button>
//             <button onClick={handleUpload}>Upload</button>
//         </div>
//         </div>
//     )
//   return (
//     <>
//       {
//         !files && 
//         <div className='dropzone' onDragOver={handledragover} onDrop={handledrop}>
//             <h3>Drag & Drop files to upload</h3>
//             <h3>Or</h3>
//             <input type='file' multiple onChange={(event)=>setFiles(event.target.files)} hidden 
//             ref={inputRef}/> 
//             <button className='btn btn-dark' onClick={()=>inputRef.current.click()}>Select Files</button>
//         </div>
//       }
//     </>
//   )
// }

// export default Dragdrop


// Dragdrop.js

import React, { useState, useRef } from 'react';
import './Dragdrop.css';

function Dragdrop() {
  const [files, setFiles] = useState(null);
  const inputRef = useRef();

  const handledragover = event => {
    event.preventDefault();
  };

  const handledrop = event => {
    event.preventDefault();
    setFiles(event.dataTransfer.files);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    Array.from(files).forEach(file => {
      formData.append('Files', file);
    });

    try {
      const response = await fetch('http://localhost:5000/upload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Files uploaded successfully:', result.files);
        setFiles(null);
      } else {
        console.error('Failed to upload files');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  if (files)
    return (
      <div className='uploads'>
        <ul>
          {Array.from(files).map((file, idx) => (
            <li key={idx}>{file.name}</li>
          ))}
        </ul>
        <div className='actions'>
          <button onClick={() => setFiles(null)}>Cancel</button>
          <button onClick={handleUpload}>Upload</button>
        </div>
      </div>
    );

  return (
    <>
      {!files && (
        <div className='dropzone' onDragOver={handledragover} onDrop={handledrop}>
          <h3>Drag & Drop files to upload</h3>
          <h3>Or</h3>
          <input
            type='file'
            multiple
            onChange={event => setFiles(event.target.files)}
            hidden
            ref={inputRef}
          />
          <button className='btn btn-dark' onClick={() => inputRef.current.click()}>
            Select Files
          </button>
        </div>
      )}
    </>
  );
}

export default Dragdrop;

