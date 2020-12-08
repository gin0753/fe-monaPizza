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
                    // window.location.href = "/sign-in"
                }
            });
        }, 1000)
    }

    render() {
        return (<div className="redirectpage" >
            <h1>Successfully registered!</h1>
            <h2>Redirecting in <span>{this.state.seconds}</span> s ...</h2>
            <div className="loader">Loading ...</div>
        </div>);
    }
}

export default RedirectPage;