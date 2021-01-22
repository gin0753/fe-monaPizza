import React from 'react';
import './SideBar.scss';
import { Link } from 'react-router-dom';
import search from 'images/search-solid.svg';
import { SideBarTopItems, SideBarBottomItems } from '../SideBarItems/SideBarItems';

class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.toggleSideBar();
  }

  render() {
    return (
      <div className="sidebar">
        <h1>{this.props.isClicked}</h1>
        <nav className={this.props.sidestatus ? 'sidebar sidebaractive' : 'sidebar'}>
          <label>
            <input type="text" name="search" placeholder="search" />
            <a href="/"><img src={search} alt="searchButton" /></a>
          </label>
          <ul className="sidebar--topitems" onClick={this.handleClick}>
            {SideBarTopItems.map((item, index) => (
              <Link key={index} to={`${item.path}`}>
                <li key={index} className="item.cName">
                  <h6>{item.title}</h6>
                </li>
              </Link>
            ))}
          </ul>
          <hr />
          <ul className="sidebar--bottomitems" onClick={this.handleClick}>
            {SideBarBottomItems.map((item, index) => (
              <Link key={index} to={`${item.path}`}>
                <li key={index} className="item.cName">
                  <h6>{item.title}</h6>
                </li>
              </Link>
            ))}
          </ul>
        </nav>
      </div>
    );
  }
}

export default SideBar;
