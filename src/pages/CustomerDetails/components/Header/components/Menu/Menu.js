import React from 'react';
import '../../Header.css';
import bars from '../../../../../../images/bars-solid.svg';

class Menu extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.props.toggleSideBar();
    }

    render(){
        return  <div className="navbar">
                    <button onClick={this.handleClick} className={this.props.sidestatus ? "slideleft": ""}><img src={bars} alt="fa-bars" /></button>
                </div>  
    } 
}

export default Menu;

