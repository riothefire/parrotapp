import React from "react";
import { useState } from "react";

 function Form(props)
 {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    
    const titleHandler = (event) =>{
        setTitle(event.target.value);
    }

    const descHandler = (event) =>{
        setDescription(event.target.value);
    }

    const submitHandler = () => { const newEvent = {name:title, title:description};
    
    props.addevents(newEvent)

     }
return(
    <form className="fomio" onSubmit={submitHandler} >

        

        <label  for="fname">Title</label><br></br>
  <input className="titi" onChange={titleHandler}  classname=" fomname1" type="text" id="fname" placeholder="Title"/><br></br>
  <label for="lname">Discription</label><br></br>
  <input className="discrip" onChange={descHandler} classname=" fomname1" type="text" id="lname" placeholder="Discription"/><br></br>
  <button className ="submi" type="submit" value="Submit" onClick={submitHandler}> Submit</button>
    
        </form>
)

}
export default Form;