import React from "react";
import Items from "./components/Items";

class FeedBack extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      autoRoll: true,
      rollPoint: 0,
      rollPercent: "",
    };
  }


  toPercent(point) {
    let percent = Number(point * 100);
    percent += "%";
    return percent;
  }

  handleRollRight = () => {
    let point = this.state.rollPoint;
    let percent;
    if (point <= -0.332) {
      point = 0;
      percent = "0";
    } else {
      point = this.state.rollPoint - 0.166;
      percent = this.toPercent(point);
    }
    this.setState({
      rollPoint: point,
      rollPercent: percent,
    });
  };

  handleRollLeft = () => {
    let point = this.state.rollPoint;
    let percent = this.toPercent(point);

    if (point == 0) {
      point = -0.332;
      percent = "-33.2%";
    } else {
      point = this.state.rollPoint + 0.166;
      percent = this.toPercent(point);
    }

    this.setState({
      rollPoint: point,
      rollPercent: percent,
    });
  };

  componentDidMount() {
    this.setAutoRoll = setInterval(() => {
      this.handleRollRight();
    }, 3000);
  }

  stopRoll = () => {
    clearInterval(this.setAutoRoll);
    this.setState({
      autoRoll: false,
    });
  };

  startRoll = () => {
    if (this.state.autoRoll) {
      return;
    } else {
      this.setAutoRoll = setInterval(() => {
        this.handleRollRight();
      }, 3000);
      this.setState({
        autoRoll: true,
      });
    }
  };



  render() {
    return (
      <section className='restPage_feedBack'>
        <div className='restPage_feedBack_wrap'>
          <h2>Here's what some customers are saying...</h2>
          <p>
            Customer service and product quality are our top priority. Although
            we strive to make every customer experience as easy as possible,
            it’s how our customers rate us that really matters. Because it makes
            our customers happy! And we love making people happy.
          </p>
          <div className='restPage_feedBack_wrap_slider' style={{ transform: `translateX(${this.state.rollPercent})` }} >
            <Items />
          </div>
          <nav>
          <div
          className='left_btn'
          onClick={this.handleRollLeft}
          onMouseOut={this.startRoll}
          onMouseEnter={this.stopRoll}
        >
          
        </div>
        <div
          className='right_btn'
          onClick={this.handleRollRight}
          onMouseOut={this.startRoll}
          onMouseEnter={this.stopRoll}
        >
          
        </div>
          </nav>
        </div>
      </section>
    );
  }
}

export default FeedBack;
