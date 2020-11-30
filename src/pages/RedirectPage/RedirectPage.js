import React from 'react';
import './RedirectPage.css';

class RedirectPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            seconds: 5
        };
    }

    componentDidMount() {
        let timer = setInterval(() => {
            this.setState((prevState) => ({
                seconds: prevState.seconds - 1
            }), () => {
                if (this.state.seconds == 0) {
                    clearInterval(this.interval);
                    window.location.href = "/sign-in"
                }
            });
        }, 1000)
    }

    render() {
        return (<div className="redirectpage" >
            <h1>Congratulations, you are registered successfully. This page will be redirected after <span>{this.state.seconds}</span> seconds</h1>
            <div className="loader">Loading ...</div>
        </div>);
    }
}

export default RedirectPage;