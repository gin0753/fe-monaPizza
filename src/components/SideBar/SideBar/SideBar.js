import React from 'react';
import './SideBar.css';
import search from '../../../images/search-solid.svg'
import { SideBarTopItems } from '../SideBarItems/SideBarItems';
import { SideBarBottomItems } from '../SideBarItems/SideBarItems';
import { Route, Link } from 'react-router-dom';

class SideBar extends React.Component {
    render() {
        return <div className="Checkout">
            <h1>{this.props.isClicked}</h1>
            <nav className={this.props.sidestatus ? "sidebar sidebaractive" : "sidebar"}>
                <label>
                    <input type="text" name="search" placeholder="search" />
                    <a><img src={search} alt="searchButton" /></a>
                </label>
                <ul className="sidebar--topitems">
                    {SideBarTopItems.map((item, index) => {
                        return (
                            <Link to={`${item.path}`}><li key={index} className="item.cName">
                                <a><h6>{item.title}</h6></a>
                            </li></Link>
                        )
                    })}
                </ul>
                <hr />
                <ul className="sidebar--bottomitems">
                    {SideBarBottomItems.map((item, index) => {
                        return (
                            <Link to={`${item.path}`}><li key={index} className="item.cName">
                                <a><h6>{item.title}</h6></a>
                            </li></Link>
                        )
                    })}
                </ul>
            </nav >
        </div >
    }
}

export default SideBar;