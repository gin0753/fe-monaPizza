import React from "react";
import "./style/Home.scss";
import Header from "./components/Header";
import Info from "./components/Info";
import Choices from "./components/Choices";
import FeedBack from "./components/FeedBack";
import MobileApp from "./components/MobileApp";

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className='home'>
        <div className='frontPage'>
          <div className='frontPage_wrap'>
            <h1>Get it while it’s hot!</h1>
            <h2>
              We create custom, personal pizzas with quality ingredients in only
              five minutes.
            </h2>
            <a className='button'>ORDER ONLINE</a>
          </div>
        </div>
        <div className='restPage'>
          <Header />
          <Info />
          <Choices />
          <FeedBack />
          <MobileApp />
          <section className='restPage_gallery'>
            <div className='restPage_gallery_show'></div>
            <div className='restPage_gallery_nav'>
              <a className='nav_left' href='#'>
                
              </a>
              <h5>
                follow us on instagram <a href='#'>#margherita pizza</a>
              </h5>
              <a className='nav_right' href='#'>
                
              </a>
            </div>
          </section>
        </div>
      </section>
    );
  }
}

export default Home;
