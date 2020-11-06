import React from "react";
import { Link } from 'react-router-dom';

class FrontPage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='frontPage'>
        <div className='frontPage_wrap'>
          <h1>Get it while it’s hot!</h1>
          <h2>
            We create custom, personal pizzas with quality ingredients in only
            five minutes.
          </h2>
          <Link to="/menu"><a className='button'>ORDER ONLINE</a></Link>
        </div>
      </div>
    );
  }
}

export default FrontPage;
