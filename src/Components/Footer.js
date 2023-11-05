import React from 'react'
import logo from '../assets/images/Malx logo.png';
import twitter from '../assets/images/twitter.png';
import fb from '../assets/images/facebook.png';
import linkedin from '../assets/images/linkedin.png';
import youtube from '../assets/images/youtube.png';
import instagram from '../assets/images/instagram.png';
function Footer() {
  return (
    <div className='container-fluid' style={{borderTop:"4px solid black"}}>
    <div className='container' style={{marginBottom:"20px"}}>
        <div className='row'>
            <div className='col-md-3'></div>
            <div className='col-md-6' style={{textAlign:"center"}}>
              <img src={logo} style={{width:'15%'}}/> <br />
                       <img src={twitter} style={{width:"5%"}}/>&nbsp;&nbsp;&nbsp;

                    <img src={fb} style={{width:"5%"}}/>&nbsp;&nbsp;&nbsp;
                  
                    <img src={linkedin} style={{width:"5%"}}/>&nbsp;&nbsp;&nbsp;

                    <img src={youtube} style={{width:"5%"}}/>&nbsp;&nbsp;&nbsp;

                    <img src={instagram} style={{width:"5%"}}/> <br></br>

                    <p style={{marginTop: "10px",fontFamily: 'Poppins'}}>Cybersecurity info you can't do without</p>
                    <p>Want to stay informed on the latest news in cybersecurity? Sign up for our newsletter and learn how to protect your computer from threats.</p>
                    {/* <input type="email" class="form-control" id="usr" />
                    <button type='submit' class="btn btn-dark">Send</button> */}
                     <div class="input-group">
                <input type="email" class="form-control" placeholder="Enter Email" aria-label="Input field" aria-describedby="button-addon" />
                <button class="btn btn-dark" type="button" id="button-addon">send</button>
            </div>
            </div>
            <div className='col-md-3'></div>
        </div>
    </div>
    </div>
  )
}

export default Footer
