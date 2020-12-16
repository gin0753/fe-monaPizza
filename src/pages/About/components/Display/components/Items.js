import React from 'react';
import Item from './Item';
import photo1 from '../img/display_photo.png';
import photo2 from '../img/display_photo2.jpg';
import photo3 from '../img/display_photo3.jpg';

class Items extends React.Component {
  render() {
    return (
      <div className="restPage_display_wrap_slider_items">
        <Item
          title="Margaret Black"
          details="Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
      molestie consequat, vel illum dolore eu feugiat nulla facilisis at
      vero eros et accumsan qui blandit luptatum zzril delenit augue duis
      dolore te feugait nulla facilisi. Nam tempor cum soluta nobision
      congue nihil imperdiet doming id quod mazim placerat facer possim
      assum."
          photo={photo1}
        />
        <Item
          title="Sriracha Beef"
          details="Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
      molestie consequat, vel illum dolore eu feugiat nulla facilisis at
      vero eros et accumsan qui blandit luptatum zzril delenit augue duis
      dolore te feugait nulla facilisi. Nam tempor cum soluta nobision
      congue nihil imperdiet doming id quod mazim placerat facer possim
      assum."
          photo={photo2}
        />
        <Item
          title="Peri-Peri"
          details="Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
      molestie consequat, vel illum dolore eu feugiat nulla facilisis at
      vero eros et accumsan qui blandit luptatum zzril delenit augue duis
      dolore te feugait nulla facilisi. Nam tempor cum soluta nobision
      congue nihil imperdiet doming id quod mazim placerat facer possim
      assum."
          photo={photo3}
        />
        <Item
          title="Moorish Lamb"
          details="Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
      molestie consequat, vel illum dolore eu feugiat nulla facilisis at
      vero eros et accumsan qui blandit luptatum zzril delenit augue duis
      dolore te feugait nulla facilisi. Nam tempor cum soluta nobision
      congue nihil imperdiet doming id quod mazim placerat facer possim
      assum."
          photo={photo3}
        />
      </div>
    );
  }
}

export default Items;
