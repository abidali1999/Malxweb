import React from 'react';
import './Qthreats.css';
import { Link } from 'react-router-dom';
import Ctitle from '../Ctitle/Ctitle';


function Qthreats() {
    return (
        <>
            <Ctitle title="QUARANTINED THREATS"/>

            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <table class="table">
                            <thead>
                                <tr style={{textAlign:"center"}}>
                                    <th scope="col" colspan="4">Directory</th>
                                </tr>
                                <tr style={{textAlign:"center"}}>
                                    <td scope="col" colspan="4">
                                        <p>Directory path render from backend</p>
                                    </td>
                                </tr>
                                <tr style={{textAlign:"center"}}>
                                    <th scope="col">
                                        <Link style={{width:"40%"}} className='btn btn-outline-dark'>Remove</Link>
                                    </th>
                                    <th scope="col">
                                        <Link style={{width:"40%"}} className='btn btn-dark'>Release</Link>
                                    </th>
                                </tr>
                            </thead>
                            {/* <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </tbody> */}
                        </table>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-md-6'></div>
                    <div className='col-md-6 mt-3 mb-3' style={{ textAlign: "right" }}>
                        <Link className='btn btn-dark' to="/dashboard">Back</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Qthreats
