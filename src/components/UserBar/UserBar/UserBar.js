import React from 'react';
import './UserBar.css';
import { UserBarTopItems } from '../UserBarItems/UserBarItems';
import { UserBarMiddleItems } from '../UserBarItems/UserBarItems';
import { UserBarBottomItems } from '../UserBarItems/UserBarItems';
import Item from '../components/Item';
class UserBar extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            active: 'My Details'
        }
    }

    handleClick = (target) => {
        return () => {
            this.setState({
                active: target
            })
        }
    }

    render() {
        const { active } = this.state;
        return <div className="user">
            <nav>
                <ul className="userbar--topitems">
                    {UserBarTopItems.map((item) => {
                        return (
                            <Item onClick={this.handleClick(item.title)} active={active === item.title} details={item}/>
                        )
                    })}
                </ul>
                <br />
                <ul className="userbar--middleitems">
                    {UserBarMiddleItems.map((item, index) => {
                        return (
                            <a href={`${item.path}`}><li key={index} className="item.cName">
                                <a href={item.path}><h6>{item.title}</h6></a>
                            </li></a>
                        )
                    })}
                </ul>
                <br />
                <ul className="userbar--bottomitems">
                    {UserBarBottomItems.map((item, index) => {
                        return (
                            <a href={item.path}><li id={item.id} key={item.id} className="item.cName">
                                <a href={item.path}><h6>{item.title}</h6></a>
                            </li></a>
                        )
                    })}
                </ul>
            </nav >
        </div >
    }
}

export default UserBar;