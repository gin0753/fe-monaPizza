import React from "react";
import Items from "./components/Items";

class Display extends React.Component {
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
    if (point <= -0.75) {
      point = 0;
      percent = "0";
    } else {
      point = this.state.rollPoint - 0.25;
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

    if (point === 0) {
      point = -0.75;
      percent = "-75%";
    } else {
      point = this.state.rollPoint + 0.25;
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
      <div className='restPage_display'>
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
        <div
          className='restPage_display_wrap'
          onMouseOut={this.startRoll}
          onMouseEnter={this.stopRoll}
        >
          <div
            className='restPage_display_wrap_slider'
            style={{ transform: `translateX(${this.state.rollPercent})` }}
          >
            <Items />
          </div>
        </div>
      </div>
    );
  }
}

export default Display;
