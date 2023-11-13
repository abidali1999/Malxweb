import React from 'react'

import { Link } from 'react-router-dom';
import Ctitle from '../Ctitle/Ctitle';

function Cresult() {
    return (
        <>
            {/* <div className='container-fluid' style={{ background: "#eee", padding: "20px" }}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <h2>CLASSIFICATION RESULT</h2>
                        </div>
                    </div>
                </div>
            </div> */}

            <Ctitle title="Classification Result" />

            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Directory</th>
                                    <th scope="col">Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td></td>
                                    <td></td>

                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td></td>
                                    <td></td>

                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th scope="row">4</th>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th scope="row">5</th>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th scope="row">6</th>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th scope="row">7</th>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th scope="row">8</th>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th scope="row">9</th>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th scope="row">10</th>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-md-6'></div>
                    <div className='col-md-6 mt-3 mb-3' style={{textAlign:"right"}}>
                        <Link className='btn btn-dark' to="/dashboard">Back</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cresult
