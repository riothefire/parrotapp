import React from "react";
import EventsList from "./Eventlist";
import { useEffect, useState } from "react";
import Form from "./Form";
function Events() {
  const [addi, setaddi] = useState(false);

  const add = () => {
    setaddi(true);
  };

  const [events, setstate] = useState([{}]);
  function devo(id) {
    const updated = events.filter((event) => event.id !== id);
    fetch(
      "https://places-cef34-default-rtdb.firebaseio.com/applause/events.json",
      {
        method: "PUT",
        body: JSON.stringify(updated),
      }
    );
  }
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://places-cef34-default-rtdb.firebaseio.com/applause/events.json"
      );

      const responseData = await response.json();
      let event = [];
      for (const key in responseData) {
        event.push({
          id: key,
          name: responseData[key].name,
          title: responseData[key].title,
        });
      }
      setstate(event);
    };
    fetchData();
  }, [events]);
  function addeventshandller(newEvent) {
    events.push(newEvent);
    fetch(
      "https://places-cef34-default-rtdb.firebaseio.com/applause/events.json",
      {
        method: "PUT",
        body: JSON.stringify(events),
      }
    );
  }
  const eventList = events.map((event) => (
    <EventsList
      key={event.id}
      name={event.name}
      title={event.title}
      id={event.id}
      remove={devo}
    />
  ));
  return (
    <div>
      <button onClick={add} className="addi">
        {" "}
        Add{" "}
      </button>
      {addi && <Form addevents={addeventshandller}> </Form>}
      <ul>{eventList}</ul>
    </div>
  );
}
export default Events;
