import React from 'react'
import Events from './Events';
function Card () {
  return (

    <div className='Card1'>
    <div className="comm">
            <div className="Applause">
                Applause Community
            </div>
            <div className="fan">
                27 fan 2 superfans
            </div>
            <div className="fan2">
                Prashant Joined Applause in Jul 2021
            </div>
        </div>
        <div className="upcoming">
            Upcoming Events
        </div>

        {
            <Events>
                
            </Events>
        }



        {/* <div className="zapp">
            <img className="crash" src="image.png" alt height="145px" width="200px"/>
            <div className="zippi">
            Event_18_07_2022_01
            </div>
            <div className="free">
            Free event
            Jul 31st at 6:00 PM IST
            </div>
            <button className="perf">
                Performance
            </button>
        </div>




        <div className="zapp">
            <img className="crash" src="bbcf4220-d823-11ec-8722-8d326bfc3bba.png" alt height="150px" width="200px"/>
            <div className="zippi">
            Event_13_07_2022_01
                
            </div>
            <div className="free">
            Free event
            Sep 16th at 12:05 AM IST
            </div>
            <button className="perf">
                Performance
            </button>
        </div>




        <div className="zapp">
            <img className="crash" src="Zappcrash.png" alt height="150px" width="200px"/>
            <div className="zippi">
            Zappcrash
            </div>
            <div className="free">
            Free event
            Jul 31st at 12:00 PM IST
            </div>
            <button className="perf">
                Performance
            </button>
        </div> */}
        </div>
  )
}
export default Card;