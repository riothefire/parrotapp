import React from 'react'
import insta from "../Images/insta.png"
import faceb from "../Images/faceb.png"
import tik from "../Images/tik.png"
import spotify from "../Images/spotify.png"
import youtu from "../Images/youtu.png"
function Footer () {
  return (

    <footer className="footer">
  
            <div className="social-link">
             
            <ul className="social-link2">
                <li>
                    <a className="soci" href="https://www.twitter.com" ><img src={insta} alt height="22px" width="22px"/></a>
                    
                </li>
                <li>
                <a className="soci" href="https://www.facebook.com" ><img src={faceb} alt height="22px" width="22px"/></a>
                    
                </li>
                {/* <li>
                <a className="soci" href="https://www.google.com" ><img src="google.png" alt height="21px" width="21px"/></a>
                    
                </li> */}
                <li>
                <a className="soci" href="https://www.tiktok.com" ><img src={tik} alt height="22px" width="22px"/></a>
                    
                </li>
                <li>
                <a className="soci" href="https://open.spotify.com/" ><img src={spotify} alt height="22px" width="22px"/></a>
     
                </li>
                <li>
                <a className="soci" href="https://www.youtube.com" ><img src={youtu} alt height="22px" width="22px"/></a>
                    
                </li>
            </ul>
          </div>
          <div className="content-footer">
            
            <ul className="row1" >
              <li><p className="p1">Contact Us</p></li>
              <li><p className="p2" >About Us</p></li>
              <li><p className="p3">Terms of service</p></li>
              <li><p className="p4">Privacy Policy</p></li>
            </ul>
          
          </div>
          <div className="copyright">(c) 2022 Applause Creators, Inc. All rights reserved.</div>
      
      
          </footer>
  )
}
export default Footer;