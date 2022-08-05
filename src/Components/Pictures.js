import React from 'react'
import pic from "../Images/back4.jpg"
import profilepic from "../Images/profilepic.jpg"
import music from "../Images/music.png" 

function Pictures  () {
  return (
  <div className ="zyz">
<div className="back4">
    <img src={pic} alt="" height="300" width="100%"/>
</div>

<div className="boxes">


<img className ="pic" src={profilepic} alt=""height="80px" width="80px"/>

<div className="front">

    <h1 className='namo'>Prashant Ranjan</h1>
    <div className='prash'><h2>@prashant</h2>
    </div>
    <p className='intro'>My name is Prashant Ranjan, I am <br/>working as a software developer in TFT.</p>
</div>
<div className="bit"><button>Follow</button>
<button className="bit2"> Share Profile</button>
</div>
<div className="record"><strong>Prashant Is </strong>&ensp;<span className="rc"><strong>recording music </strong>
<img src={music} alt  height="20px" width="20px"/></span>&ensp;Jul 18</div>
</div>
    
</div>
  )
}
export default Pictures;

