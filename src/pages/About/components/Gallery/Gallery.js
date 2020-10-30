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
  }
  render() {
    return (
      <section className='restPage_gallery'>
        <div className='restPage_gallery_show'>
          <img src={gallery_01} />
          <img src={gallery_02} />
          <img src={gallery_03} />
          <img src={gallery_04} />
          <img src={gallery_05} />
          <img src={gallery_06} />
          <img src={gallery_07} />
          <img src={gallery_06} />
        </div>
        <div className='restPage_gallery_nav'>
          <a className='nav_left' href='#'>
            
          </a>
          <h5>
            follow us on instagram <a href='#'>#margherita pizza</a>
          </h5>
          <a className='nav_right' href='#'>
            
          </a>
        </div>
      </section>
    );
  }
}

export default Gallery;
