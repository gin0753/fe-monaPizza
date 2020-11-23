import React from 'react';
import SideBar from '../SideBar/SideBar/SideBar';
import CartTotal from '../Cart/CartTotal/CartTotal';
import Header from '../Header/Header';


class GrandHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sidebarIsClicked: false,
            cartIsClicked: false,
        };

    }
    toggleSideBar = () => {
        this.setState({
            sidebarIsClicked: !this.state.sidebarIsClicked,
        });
    };

    toggleCart = () => {
        this.setState({
            cartIsClicked: !this.state.cartIsClicked,
        });
    };


    render() {
        return <>
            <SideBar sidestatus={this.state.sidebarIsClicked} />
            <CartTotal cartstatus={this.state.cartIsClicked} />
            <Header
                toggleSideBar={this.toggleSideBar}
                toggleCart={this.toggleCart}
                sidestatus={this.state.sidebarIsClicked}
                cartstatus={this.state.cartIsClicked}
            />
        </>

    }
}
export default GrandHeader;