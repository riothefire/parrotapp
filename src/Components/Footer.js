import React from 'react'

function Footer () {
  return (

    <footer className="footer">
  
            <div className="social-link">
             
            <ul className="social-link2">
                <li>
                    <a className="soci" href="https://www.twitter.com" ><img src="insta.png" alt height="25px" width="25px"/></a>
                    
                </li>
                <li>
                <a className="soci" href="https://www.facebook.com" ><img src="faceb.png" alt height="21px" width="21px"/></a>
                    
                </li>
                {/* <li>
                <a className="soci" href="https://www.google.com" ><img src="google.png" alt height="21px" width="21px"/></a>
                    
                </li> */}
                <li>
                <a className="soci" href="https://www.tiktok.com" ><img src="tik.png" alt height="21px" width="21px"/></a>
                    
                </li>
                <li>
                <a className="soci" href="https://open.spotify.com/" ><img src="spotify.png" alt height="21px" width="21px"/></a>
                    
                </li>
                <li>
                <a className="soci" href="https://www.youtube.com" ><img src="youtu.png" alt height="25px" width="25px"/></a>
                    
                </li>
            </ul>
          </div>
          <div className="content-footer">
            
            <ul className="row1" >
              <li><p className="p1">Contact Us</p></li>
              <li><p className="p2" >About Us</p></li>
              <li><p className="p3">Terms of service</p></li>
              <li><p className="p4">privacy policy</p></li>
            </ul>
          
          </div>
          <div className="copyright">(c) 2022 Applause Creators, Inc. All rights reserved.</div>
      
      
          </footer>
  )
}
export default Footer;