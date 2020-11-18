import React from "react";
import { Link } from "react-router-dom";

class FrontPage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='frontPage'>
        <h1>About Us</h1>
        <nav>
          <ul>
            <li>
              <Link to='/home' style={{color:'#fdbc2c'}}>Home</Link>
            </li>
            <li>
              <Link to='/about' style={{color:'#fdbc2c'}}>About Us</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default FrontPage;
