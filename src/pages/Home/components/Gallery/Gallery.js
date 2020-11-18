import React from "react";
import gallery_01 from "./img/gallery_01.png";
import gallery_02 from "./img/gallery_02.png";
import gallery_03 from "./img/gallery_03.png";
import gallery_04 from "./img/gallery_04.png";
import gallery_05 from "./img/gallery_05.png";
import gallery_06 from "./img/gallery_06.png";
import gallery_07 from "./img/gallery_07.png";

class Gallery extends React.Component {
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
    if (point <= -0.5) {
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

    if (point == 0) {
      point = -0.5;
      percent = "-50%";
    } else {
      point = this.state.rollPoint + 0.25;
      percent = this.toPercent(point);
    }

    this.setState({
      rollPoint: point,
      rollPercent: percent,
    });
  };

  render() {
    return (
      <section className='restPage_gallery'>
        <div
          className='restPage_gallery_show'
          style={{ transform: `translateX(${this.state.rollPercent})` }}
        >
          <img src={gallery_01} />
          <img src={gallery_02} />
          <img src={gallery_03} />
          <img src={gallery_04} />
          <img src={gallery_05} />
          <img src={gallery_06} />
          <img src={gallery_07} />
          <img src={gallery_06} />
          <img src={gallery_05} />
          <img src={gallery_02} />
          <img src={gallery_07} />
          <img src={gallery_03} />
          <img src={gallery_01} />
          <img src={gallery_04} />
        </div>
        <div className='restPage_gallery_nav'>
          <div
            className='nav_left'
            onClick={this.handleRollLeft}

            onMouseEnter={this.stopRoll}
          >
            
          </div>
          <h5>
            follow us on instagram <a href='#'>#margherita pizza</a>
          </h5>
          <div
            className='nav_right'
            onClick={this.handleRollRight}

            onMouseEnter={this.stopRoll}
          >
            
          </div>
        </div>
      </section>
    );
  }
}

export default Gallery;
