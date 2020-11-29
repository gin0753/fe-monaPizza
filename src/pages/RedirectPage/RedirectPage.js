import React from 'react';
import './RedirectPage.css';

class RedirectPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content: '',
        }
    }
    componentDidMount() {
        this.timer = setTimeout(() => {
            this.setState({ content: 'Congratulations, you are registered successfully. This page will be redirected after 3 seconds' })
        }, 500);

        this.timer_two = setTimeout(() => {
            this.setState({ content: 'Congratulations, you are registered successfully. This page will be redirected after 2 seconds' })
        }, 1500);

        this.timer_three = setTimeout(() => {
            this.setState({ content: 'Congratulations, you are registered successfully. This page will be redirected after 1 seconds' })
        }, 2500);

        this.timer_four = setTimeout(() => {
            this.setState({ content: 'Congratulations, you are registered successfully. This page will be redirected after 0 seconds' })
        }, 3500);

        // this.timer_five = setTimeout(() => {
        //     window.location.href = "/sign-in";
        // }, 3500);
    }


    componentWillUnmount() {
        this.timer && clearTimeout(this.timer);
        this.timer_two && clearTimeout(this.timer_two);
        this.timer_three && clearTimeout(this.timer_three);
        this.timer_four && clearTimeout(this.timer_four);
        // this.timer_five && clearTimeout(this.timer_five);
    }

    render() {
        return (<div className="redirectpage">
            <h1>{this.state.content}</h1>
            <div className="loader">Loading ...</div>
        </div>);
    }
}

export default RedirectPage;