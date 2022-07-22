import React from "react";
import EventsList from "./Eventlist";
import {useEffect,useState} from "react";
 function Events ()

 {
    const [events, setstate] = useState([{}])
    useEffect(( ) => {
        const fetchData = async () => {
            const response = await fetch(
              "https://places-cef34-default-rtdb.firebaseio.com/applause/events.json"
            );
            
            const responseData = await response.json();
            let event= [];
            for (const key in responseData) {
              event.push({
                id: key,
                name: responseData[key].name,
                title: responseData[key].title,
              });
            }
            setstate(event)
          };
          fetchData()
    },[]  
    )
    const eventList = events.map((event) => (
        <EventsList key={event.id} name={event.name} title={event.title} id={event.id}  />
    
      ));
      return( 
      <ul>
        {
            eventList

        }
      </ul>
      )
    }
    export default Events;
