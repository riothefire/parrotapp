import React from "react";
const PlaceList = (props) => {
    const onClickHandler=()=>{
        props.delHandler(props.id)
    }

  return (
    <li>
      <a className="card6" target="_blank" href={props.url}>
        <img src={props.name + ".png"} alt="" height="25px" width="25px" />
        <span className="card7">{props.name}</span>
      </a>
      <button onClick={onClickHandler}>-</button>
    </li>
  );
};
export default PlaceList;