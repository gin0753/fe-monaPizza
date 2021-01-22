import React, { Component } from 'react';
import UserBar from 'components/UserBar/UserBar/UserBar';
import CrumbHeader from 'components/CrumbHeader';
import './mydetails.scss';
import Form from './components/form';

class Mydetails extends Component {
  render() {
    return (
      <div className="mydetailspage">
        <CrumbHeader thisPage="My Details" path="mydetails" />
        <section className="mydetails-container">
          <section className="form">
            <UserBar props={this.props} />
            <Form />
          </section>
        </section>
      </div>
    );
  }
}

export default Mydetails;
