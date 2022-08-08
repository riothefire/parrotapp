import React from "react";
import Events from "./Events";
import { useState } from "react";
import Form from "./Form";
function Card() {
  return (
    <div className="Card1">
      <div className="comm">
        <div className="Applause">Applause Community</div>
        <div className="fan">27 fan 2 superfans</div>
        <div className="fan2">Prashant Joined Applause in Jul 2021</div>
      </div>
      <div className="upcoming">Upcoming Events</div>

      {<Events></Events>}
      {/* {/* <div className="zapp">
            <img className="crash" src="image.png" alt height="145px" width="200px"/>
            <div className="zippi">
            Event_18_07_2022_01
            </div>
            <div className="free">
            Free event
            Jul 31st at 6:00 PM IST
            </div>
            <button className="perf">
                Performance
            </button>
        </div> */}
    </div>
  );
}
export default Card;
