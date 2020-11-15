import React from 'react';
import './UserBar.css';
import { UserBarTopItems } from '../UserBarItems/UserBarItems';
import { UserBarMiddleItems } from '../UserBarItems/UserBarItems';
import { UserBarBottomItems } from '../UserBarItems/UserBarItems';
import { Link } from 'react-router-dom';


class UserBar extends React.Component {
    render() {
        return <div className="user">
            <nav>
                <ul className="userbar--topitems">
                    {UserBarTopItems.map((item, index) => {
                        return (
                            <Link to={`${item.path}`}><li id={item.id} key={item.id} className={item.cName}>
                                <span>{item.icon}</span><a><h6>{item.title}</h6></a>
                            </li></Link>
                        )
                    })}
                </ul>
                <br />
                <ul className="userbar--middleitems">
                    {UserBarMiddleItems.map((item, index) => {
                        return (
                            <Link to={`${item.path}`}><li key={index} className="item.cName">
                                <a><h6>{item.title}</h6></a>
                            </li></Link>
                        )
                    })}
                </ul>
                <br />
                <ul className="userbar--bottomitems">
                    {UserBarBottomItems.map((item, index) => {
                        return (
                            <Link to={`${item.path}`}><li id={item.id} key={item.id} className="item.cName">
                                <a><h6>{item.title}</h6></a>
                            </li></Link>
                        )
                    })}
                </ul>
            </nav >
        </div >
    }
}

export default UserBar;