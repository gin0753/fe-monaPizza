import React from 'react';
import { Link } from "react-router-dom";
import './CrumbHeader.scss'

class CrumbHeader extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className='crumbHeader_container'>
              <h1>{this.props.thisPage}</h1>
              <nav>
                <ul>
                  <li>
                    <Link to='/home' className='fontColor'>Home</Link>
                  </li>
                  <li>
                    <Link to={`/${this.props.path}`} className='fontColor'>{this.props.thisPage}</Link>
                  </li>
                </ul>
              </nav>
            </div>
          );
    }
}

export default CrumbHeader;