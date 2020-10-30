import React from "react";
import "./style/Home.scss";
import Info from "./components/Info";
import Choices from "./components/Choices";
import FeedBack from "./components/FeedBack";
import MobileApp from "./components/MobileApp";
import FrontPage from "./components/FrontPage";
import Gallery from "./components/Gallery/Gallery";
import Header from '../../components/Header/Header';
import Newsletter from '../../components/Newsletter/Newsletter';
import Media from '../../components/Media/Media';
import Footer from '../../components/Footer/Footer';
import SideBar from '../../components/SideBar/SideBar/SideBar';
import CartTotals from '../../components/Cart/CartTotal/CartTotal';


class Home extends React.Component {
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
      <section className='home'>
        <FrontPage />
        <div className='restPage'>
          <SideBar sidestatus={this.state.sidebarIsClicked}/>
          <CartTotals cartstatus={this.state.cartIsClicked}/>
          <Header toggleSideBar={this.toggleSideBar} toggleCart={this.toggleCart} 
          sidestatus={this.state.sidebarIsClicked} cartstatus={this.state.cartIsClicked}/>
          <Info />
          <Choices />
          <FeedBack />
          <MobileApp />
          <Gallery />
          <Newsletter />
          <Media />
          <Footer />
        </div>
      </section>
    );
  }
}

export default Home;
