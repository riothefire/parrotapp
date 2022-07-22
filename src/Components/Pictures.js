import React from 'react'

function Pictures  () {
  return (
  <div className ="zyz">
<div className="back4">
    <img src="./back4.jpg" alt="" height="300" width="100%"/>
</div>

<div className="boxes">


<img className ="pic" src="./pic.jpg" alt=""height="80px" width="80px"/>

<div className="front">

    <h2><strong>Prashant Ranjan</strong></h2>
    <h3><strong>@prashant</strong></h3>
    <p>My name is Prashant Ranjan, i am working as a software <br/>developer in TFT.</p>
</div>
<div className="bit">
<button>
    Follow
</button>
<button className="bit2">
    Share Profile
</button>
</div>
<div className="record"><strong>Prashant Is </strong><span className="rc"><strong>recording music in the studio </strong>
<img src="./music.png" alt  height="20px" width="20px"/></span>&ensp;Jul 18</div>
</div>
    
</div>
  )
}
export default Pictures;

