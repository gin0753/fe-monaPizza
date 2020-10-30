import React from "react";
import "./style/About.scss";
import Info from "./components/Info";
import Choices from "./components/Choices";
import FeedBack from "./components/FeedBack";
import FrontPage from "./components/FrontPage";
import Gallery from "./components/Gallery/Gallery";
import Display from "./components/Display/Display";
import Questions from "./components/Questions/Questions";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className='about'>
        <FrontPage />
        <div className='restPage'>
          <Info />
          <Display />
          <FeedBack />
          <Choices />
          <Questions />
          <Gallery />
        </div>
      </section>
    );
  }
}

export default About;
