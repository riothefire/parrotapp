import React from "react";
import del from "../Images/del.png";
function EventsList(props) {
  const devo = () => {
    props.remove(props.id);
  };

  return (
    <div className="zapp" key={props.id}>
      <img
        className="crash"
        src={`https://picsum.photos/200/200?random=${props.id}`}
        alt
        height="150px"
        width="200px"
      />
      <div className="zippi">{props.name}</div>
      <div className="free">
        Free event&ensp;
        {props.title}
      </div>
      <button className="perf">Performance</button>
      <img
        className="delete"
        onClick={devo}
        src={del}
        height="20px"
        width="20px"
      ></img>
    </div>
  );
}
export default EventsList;
