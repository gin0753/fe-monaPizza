import React from 'react';
import './style/About.scss';
import Info from './components/Info';
import Choices from './components/Choices';
import FeedBack from './components/FeedBack';
import Gallery from './components/Gallery/Gallery';
import Display from './components/Display/Display';
import Questions from './components/Questions/Questions';
import CrumbHeader from '../../components/CrumbHeader/CrumbHeader';

class About extends React.Component {
  render() {
    return (
      <section className="about">
        <CrumbHeader thisPage="About Us" path="/about" />
        <div className="restPage">
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
