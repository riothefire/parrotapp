import React from 'react'
import { useEffect ,useState } from 'react';
import PlaceList from './Placelist';

function Box () {

    const [places, setPlaces] = useState([{name:'',url:''}]);
    const [add,setAdd]=useState(false);
    const[name,setName]=useState();
    const[url,setUrl]=useState();
    const[toggle,setToggle]=useState(false);
    console.log(places)
  
    useEffect(() => {
      const timer = setTimeout(() => {
        const fetchData = async () => {
          const response = await fetch(
            "https://places-cef34-default-rtdb.firebaseio.com/applause/places.json"
          );
          
          const responseData = await response.json();
          let place = [];
          for (const key in responseData) {
            place.push({
              id: key,
              name: responseData[key].name,
              url: responseData[key].url,
            });
          }
          setPlaces(place);
        };

        fetchData();
      }, 1000);
  
      return () => clearTimeout(timer);
    }, [toggle]);
  
    const onClickHandler = () => {
      setAdd(true);
    };
  
    const submitHandler=()=>{
      setAdd(false);
      
      const newPlace={name:name,url:url}
      places.push(newPlace)
      fetch('https://places-cef34-default-rtdb.firebaseio.com/applause/places.json',{
                  method : 'PUT',
                  body : JSON.stringify(places)
              });
              setToggle((prevState )=>!prevState)
    }

    const nameHandler=(event)=>{
  setName(event.target.value);
    }
    const urlHandler=(event)=>{
  setUrl(event.target.value);
    }
    const deleteHandler=(id)=>{
      
      const filterPlace=places.filter((place)=>place.id !== id)
      fetch('https://places-cef34-default-rtdb.firebaseio.com/applause/places.json',{
              method : 'PUT',
              body : JSON.stringify(filterPlace)
  
          });
          setToggle((prevState )=>!prevState)
          
  }
  
    const placeList = places.map((place) => (
      <PlaceList key={place.id} name={place.name} url={place.url} id={place.id} delHandler={deleteHandler} />
  
    ));
    console.log(places);
  
    return (
        
        <div className='Box1'>
                  <div className="places">
                     <div className="place">
                         Places
                   </div>
                    <ul>
                        {
                            placeList
                        }
                    </ul>
                    
                    { add && <card-4>
          <label htmlFor="">url</label> <input onChange={urlHandler} placeholder="url" />
          <label htmlFor="">name</label>
          <input onChange={nameHandler} type="text" />
          <button onClick={submitHandler}>submit</button>
        </card-4>}
        <button onClick={onClickHandler} className="btn-4">
          +
        </button>
                </div>
            </div>
    );
  }
export default Box;
