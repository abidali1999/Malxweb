import React from 'react';
import './Ctitle.css';

function Ctitle(props) {
  return (
    <>
      <div className='container-fluid' style={{ background: "#eee", padding: "20px" }}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <h2 style={{ textTransform: "uppercase" }}>{props.title}</h2>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default Ctitle
