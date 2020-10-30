import React from 'react';
import './CustomerDetails.css';
import Header from '../../components/Header/Header';
import Navigation from '../../components/Navigation/Navigation';
import Form from './components/Form/Form';
import Newsletter from '../../components/Newsletter/Newsletter';
import Media from '../../components/Media/Media';
import Footer from '../../components/Footer/Footer';
import SideBar from '../../components/SideBar/SideBar/SideBar';
import CartTotals from '../../components/Cart/CartTotal/CartTotal';

class CustomerDetails extends React.Component{
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

    render(){
      return (
        <div className="background">
            <SideBar sidestatus={this.state.sidebarIsClicked}/>
            <CartTotals cartstatus={this.state.cartIsClicked}/>
            <Header toggleSideBar={this.toggleSideBar} toggleCart={this.toggleCart} 
            sidestatus={this.state.sidebarIsClicked} cartstatus={this.state.cartIsClicked}/>
            <Navigation />
            <Form />
            <Newsletter />
            <Media />
            <Footer />
        </div>
      );
    }
}

export default CustomerDetails;