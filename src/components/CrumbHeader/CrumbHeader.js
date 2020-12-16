import React from 'react';
import { Link } from 'react-router-dom';
import './CrumbHeader.scss';
import { IoIosArrowForward } from 'react-icons/io';

class CrumbHeader extends React.Component {
  render() {
    return (
      <div className="crumbHeader_container">
        <h1>{this.props.thisPage}</h1>
        <nav>
          <ul>
            <li>
              <Link to="/home" className="fontColor">Home</Link>
            </li>
            <li><IoIosArrowForward /></li>
            <li>
              <Link to={`/${this.props.path}`} className="fontColor">{this.props.thisPage}</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default CrumbHeader;
