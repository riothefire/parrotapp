import React from "react";
function EventsList(props)
{
return(
    <div className="zapp">
 <img className="crash" src={`https://picsum.photos/200/200?random=${props.id}`} alt height="150px" width="200px"/>
            <div className="zippi">
            {props.name}
            </div>
            <div className="free">
            Free event&ensp;    
            {
                props.title
            }
            </div>
            <button className="perf">
                Performance
            </button>

    </div>
);
}
export default EventsList;