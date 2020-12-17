import React from 'react';
import './UserBar.css';
import { UserBarTopItems } from '../UserBarItems/UserBarItems';
import { AdminBarTopItems } from '../UserBarItems/UserBarItems'
import { UserBarMiddleItems } from '../UserBarItems/UserBarItems';
import { UserBarBottomItems } from '../UserBarItems/UserBarItems';
import Item from '../components/Item';
class UserBar extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            active: '',
            role: sessionStorage.getItem('role')
        }
    }
    
    componentDidMount = () => {
        const { pathname } = this.props.props.location;
        this.setState({
            active: pathname
        })
    }

    handleClick = (path) => {
        return (e) => {
            e.preventDefault();

            this.setState({
                active: path
            })
            
            const {history} = this.props.props;
            history.replace(path);
        }
    }

    handleSignOut = () => {
        sessionStorage.clear();
        window.location.reload();
      };

    render() {
        const { active, role } = this.state;
        return <div className="user">
            <nav>
                <ul className="userbar--topitems">
                    {role === 'ROLE.ADMIN' &&
                        AdminBarTopItems.map((item) => {                    
                            return (
                                <Item key={item.id} onClick={this.handleClick(item.path)} active={active === item.path} details={item}/>
                            )
                        })   
                    }
                    {role === 'ROLE.BASIC' &&
                         UserBarTopItems.map((item) => {                    
                            return (
                                <Item key={item.id} onClick={this.handleClick(item.path)} active={active === item.path} details={item}/>
                            )
                        })   
                    }
                </ul>
                <br />
                <ul className="userbar--middleitems">
                    {UserBarMiddleItems.map((item) => {
                        return (
                            <a href={`${item.path}`} key={item.id}><li className="item.cName">
                                <h6>{item.title}</h6>
                            </li></a>
                        )
                    })}
                </ul>
                <br />
                <ul className="userbar--bottomitems">
                    {UserBarBottomItems.map((item) => {
                        return (
                            <a href={item.path} key={item.id}><li className="item.cName" onClick={this.handleSignOut}>
                               <h6 >{item.title}</h6>
                            </li></a>
                        )
                    })}
                </ul>
            </nav >
        </div >
    }
}

export default UserBar;