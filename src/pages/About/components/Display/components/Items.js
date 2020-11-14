import React from "react";
import Item from "./Item";
import photo from "../img/display_photo.png";


class Items extends React.Component {
  render() {
    return (
      <div className='restPage_display_wrap_slider_items'>
        <Item
          title='Margaret Black'
          details='Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
      molestie consequat, vel illum dolore eu feugiat nulla facilisis at
      vero eros et accumsan qui blandit luptatum zzril delenit augue duis
      dolore te feugait nulla facilisi. Nam tempor cum soluta nobision
      congue nihil imperdiet doming id quod mazim placerat facer possim
      assum.'
          photo={photo}
        />
        <Item
          title='Jimmy Buttler'
          details='Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
      molestie consequat, vel illum dolore eu feugiat nulla facilisis at
      vero eros et accumsan qui blandit luptatum zzril delenit augue duis
      dolore te feugait nulla facilisi. Nam tempor cum soluta nobision
      congue nihil imperdiet doming id quod mazim placerat facer possim
      assum.'
          photo={photo}
        />
        <Item
          title='LaLla Buttler'
          details='Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
      molestie consequat, vel illum dolore eu feugiat nulla facilisis at
      vero eros et accumsan qui blandit luptatum zzril delenit augue duis
      dolore te feugait nulla facilisi. Nam tempor cum soluta nobision
      congue nihil imperdiet doming id quod mazim placerat facer possim
      assum.'
          photo={photo}
        />
      </div>
    );
  }
}

export default Items;
