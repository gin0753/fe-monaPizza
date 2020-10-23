import React, { Fragment } from 'react';
import './contactUs.css';

class ContactUs extends React.Component{
  render() {
    return (
      <Fragment>
        <div className='contact header'>
          <div className='contact menu'>
            <i className="contact menu iconfont">&#xe62b;</i>
          </div>
          Margherita
          <div className='contact shopcart'><i className="contact shopcart iconfont">&#xe62e;</i></div>
        </div>
        <div className='contact bread-crumb'>
          <div className='contact bread-crumb_title'>Contact Us</div>
          <div className='contact bread-crumb_path'>Home&nbsp;&nbsp;&gt;&nbsp;&nbsp;Contact</div>
        </div>
        <div className='contact message-board'>
          <div className='contact location'></div>
          <div className='contact board-wrapper'>
            <div className='contact board-left' >
              <h1>Feelfree to contact us with any questions!</h1>
              <p>If you have questions or comments, please get a hold of us in whichever way is most 
                convenient. If you have questions or comments, please get a hold of us in whichever way is most 
                convenient. 
              </p>
              <div className='contact name-email-container'>
                <div className='contact your-name'>
                  <span >YOUR NAME*</span>
                  <input></input>
                </div>
                <div className='contact email'>
                  <span>EMAIL*</span>
                  <input></input>
                </div>
              </div>
              <div className='contact subject'>
                <span>SUBJECT</span>
                <input></input>
              </div>
              <div className='contact message'>
                <span>YOUR MESSAGE</span>
                <input></input>
              </div>
              <div className='contact send-button'>SEND MESSAGE</div>
            </div>
            <div className='contact board-right'>
              <h1>Get in Touch</h1>
              <p>Phone:<span>+34 9 368 7050</span></p>
              <p>Email:<span>order@pizza.com</span></p>
              <h1>Store Address</h1>
              <h3>CENTRO COMERCIAL LAS GLORIAS</h3>
              <p>Avinguda Diagonal, 208</p>
              <p>Barcelona, Spain</p>
              <h1>Working Hours</h1>
              <p>Tuesday: 10:00 - 21:00</p>
              <p>Wednesday: 10:00 - 21:00</p>
              <p>Thursday: 10:00 - 21:00</p>
              <p>Friday: 10:00 - 21:00</p>
              <p>Saturday: 10:00 - 21:00</p>
              <p>Sunday/Monday: Closed</p>
            </div>
          </div>
        </div>
        <div className='contact subscribe'>
          <h1>Sign up for the newsletter and get exclusive deals.</h1>
          <div className='contact subscribe-container'>
            <input placeholder="Enter your email address"></input>
            <button>SUBSCRIBE</button>
          </div>
        </div>
        <div className='contact footer'>
          <div className='contact footer-contact-container'>
            <h1>+34 9 368 7050</h1>
            <h3>order@pizza.com</h3>
            <div className='contact footer-contact-icon'>
              <hr></hr>
              <div>&amp;</div>
              <hr></hr>
            </div>
            <ul className='contact footer-contact-list'>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
              <li>Pinterest</li>
              <li>Flickr</li>
            </ul>
          </div>
          <div className='contact footer-contact-copyright'>
            Copyright 2020 JR-Academy All rights Reserved
          </div>
        </div>
      </Fragment>
    )
      
    
  }
}

export default ContactUs;