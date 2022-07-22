import React from 'react'

function Navbar  () {
  return (
    <div className="navbar">
    <div className="clap">
        <img src="./clap.png" alt="" height="30px" width="150px"/> 
     </div>
     <ul className="navjust">
         <li className="navitem" >
           <a className="nav-link active" aria-current="page" href="#">Help</a>
         </li>
         <li className="navitem">
           <a className="nav-link" href="#">Sign In</a>
         </li>
         <li className="navitem">
           <a className="nav-link" href="#">Sign Up With Zoom</a>
         </li>
       </ul>
</div>
  )
}
export default Navbar;
