import React from "react";
import photo from "./img/display_photo.png";

class Display extends React.Component {
  render() {
    return (
      <div className='restPage_display'>
        <div className='restPage_display_wrap'>
          <article>
            <h2>Margaret Black</h2>
            <p>
              Duis autem vel eum iriure dolor in hendrerit in vulputate velit
              esse molestie consequat, vel illum dolore eu feugiat nulla
              facilisis at vero eros et accumsan qui blandit luptatum zzril
              delenit augue duis dolore te feugait nulla facilisi. Nam tempor
              cum soluta nobision congue nihil imperdiet doming id quod mazim
              placerat facer possim assum.
            </p>
          </article>
          <section>
            <img src={photo} />
          </section>
        </div>
      </div>
    );
  }
}

export default Display;
