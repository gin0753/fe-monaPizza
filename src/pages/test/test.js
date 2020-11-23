import React from 'react';

class Test extends React.Component{
    constructor(){
        super()
        this.state = {username: 'foo'}
    }

    handleClick = () => {
        this.setState({username: 'blo'})
    }
    render(){
        return <>
            <h1>Hello {this.state.username}</h1>
            <button onClick={this.handleClick}>btn</button>
               </> 
    }
}

export default Test;


