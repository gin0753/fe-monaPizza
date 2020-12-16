import React from 'react';

class FrontPage extends React.Component {
  render() {
    return (
      <div className="frontPage">
        <div className="frontPage_wrap">
          <h1>Get it while it’s hot!</h1>
          <h2>
            We create custom, personal pizzas with quality ingredients in only
            five minutes.
          </h2>
          <a href="/menu" className="button">order online</a>
        </div>
      </div>
    );
  }
}

export default FrontPage;
