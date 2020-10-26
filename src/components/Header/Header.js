import React from 'react';
import './Header.css';
import Logo from './components/Logo/Logo'
import Menu from './components/Menu/Menu'
import Cart from'./components/Cart/Cart'

class Header extends React.Component{
    
    render(){
        return <div className="Checkout">
                    <header className="header" >
                        <Menu {...this.props} />
                        <Logo/>
                        <Cart {...this.props}/>
                    </header>  
               </div>   
    }
}

export default Header;


