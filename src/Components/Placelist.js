import React from "react";

const PlaceList = (props) => {
    const onClickHandler=()=>{
        props.delHandler(props.id)
    }


    if (props.name === "") {
      return;
    }
    
    let image; 
    try 
    
    {const photo_name = props.url.split('.');
     image = require(`../Images/${photo_name[1]}.png`)}

    catch {
      image = require ("../Images/error.png")
    }

  return (
    <li>
      <a className="card6" target="_blank" href={props.url}>
        <img src={props.name + ".png"} alt="" height="25px" width="25px" />
        <span className="card7">{props.name}</span>
      </a>
      {/* <button className="card11" onClick={onClickHandler}>-</button> */}
      <img src="delete.png"height="20px" width="20px" className="card11" onClick={onClickHandler}></img>
    </li>
  );
};
export default PlaceList;