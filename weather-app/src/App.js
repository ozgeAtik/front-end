import './index.css';
import React, {useEffect, useState} from 'react'
import Weather from './Weather';

const REACT_APP_API_URL = //api url here
const REACT_APP_API_KEY = //api key here

function App() {
  const [lat, setLat] = useState([])
  const [long, setLong] = useState([])
  const [data, setData] = useState([])
  
  useEffect(() => {
    //get current position for weather data

    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function(position){
        setLat(position.coords.latitude)
        setLong(position.coords.longitude)
      })

      await fetch(`${REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${REACT_APP_API_KEY}`)
      .then(res => res.json())
      .then(result => {
        setData(result)
        console.log(result);
      });
    }

    fetchData()

  },[lat,long])


  return (
    <>
      <div className="App">
        {(typeof data.main != 'undefined') 
          ? (<Weather weatherData={data}/>)
          : (<div className='weather-card'><h2>Loading...</h2></div>)}
      </div>
    </>
  );
}

export default App;
