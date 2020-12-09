import React from 'react';
import './RedirectPage.css';

class RedirectPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            seconds: 3
        };
    }

    componentDidMount = () => {
        this.inverval = setInterval(this.countDown, 1000);
    }

    componentWillUnmount = () => {
        clearInterval(this.inverval)
    }

    countDown = () => {
        this.setState({
            seconds: this.state.seconds - 1
        })
        if(this.state.seconds === 0){
            clearInterval(this.inverval)
            this.props.history.replace('/sign-in')
        }
    }

    render() {
        return (<div className="redirectpage" >
            <h1>Your Email has been verified</h1>
            <h2>Redirecting in <span>{this.state.seconds}</span> seconds</h2>
            <div className="loader">Loading ...</div>
        </div>);
    }
}

export default RedirectPage;