import React from "react";
import "./style/Home.scss";
import Header from "./components/Header";
import Info from "./components/Info";
import Choices from "./components/Choices";
import FeedBack from "./components/FeedBack";
import MobileApp from "./components/MobileApp";
import FrontPage from "./components/FrontPage";
import Gallery from "./components/Gallery/Gallery";

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className='home'>
        <FrontPage />
        <div className='restPage'>
          <Header />
          <Info />
          <Choices />
          <FeedBack />
          <MobileApp />
          <Gallery />
        </div>
      </section>
    );
  }
}

export default Home;
