import React, { Fragment } from 'react';
import './contactUs.css';
import Header from '../../components/Header/Header';
import Newsletter from '../../components/Newsletter/Newsletter';
import Media from '../../components/Media/Media';
import Footer from '../../components/Footer/Footer';
import SideBar from '../../components/SideBar/SideBar/SideBar';
import CartTotals from '../../components/Cart/CartTotal/CartTotal';

class ContactUs extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      sidebarIsClicked: false,
      cartIsClicked: false
    }
  }

  toggleSideBar = () => {
    this.setState({
      sidebarIsClicked: !this.state.sidebarIsClicked
    })
  }

  toggleCart = () => {
    this.setState({
      cartIsClicked: !this.state.cartIsClicked
    })
  }

  render() {
    return (
      <>
        <SideBar sidestatus={this.state.sidebarIsClicked}/>
        <CartTotals cartstatus={this.state.cartIsClicked}/>
        <Header toggleSideBar={this.toggleSideBar} toggleCart={this.toggleCart} 
        sidestatus={this.state.sidebarIsClicked} cartstatus={this.state.cartIsClicked}/>
        <Fragment>
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
        </Fragment>
        <Newsletter />
        <Media />
        <Footer />
      </>
    )
      
    
  }
}

export default ContactUs;