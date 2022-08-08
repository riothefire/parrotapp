import React from "react";
import del from "../Images/del.png";

const PlaceList = (props) => {
  const onClickHandler = () => {
    props.delHandler(props.id);
  };

  if (props.name === "") {
    return;
  }

  let image;
  try {
    const photo_name = props.url.split(".");

    image = require(`../Images/${photo_name[1]}.png`);
    // console.log("hello", image);
  } catch {
    image = require("../Images/error.png");
    // console.log("hello", image);
  }
  console.log(props);
  return (
    <li>
      <a className="card6" target="_blank" href={props.url}>
        <img src={image} alt="" height="25px" width="25px" />
        <span className="card7">{props.name}</span>
      </a>
      {/* <button className="card11" onClick={onClickHandler}>-</button> */}
      <img
        src={del}
        height="20px"
        width="20px"
        className="card11"
        onClick={onClickHandler}
      ></img>
    </li>
  );
};
export default PlaceList;
