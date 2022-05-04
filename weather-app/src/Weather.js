import React from "react";
import moment from "moment";
import './index'
import RefreshIcon from '@material-ui/icons/Refresh';

export default function Weather({weatherData}){
    function refresh(){
        window.location.reload();
    }


    return(
        <div className="weather-card">
            <div className="weather-city">
                <p className="city">{weatherData.name}</p>
                <button className="button" onClick={refresh}><RefreshIcon /></button>
            </div>
            <p className="weather-date">{moment().format('LLLL')}</p>
            <div className="temp-humidity">
                <p className="temperature">Temperature: {Math.round(weatherData.main.temp)}&deg;C</p>
                <p className="humidity">Humidity: {weatherData.main.humidity}%</p>
            </div>
            <div className="sunrise-sunset">
                <p className="sunrise">Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('en-IN')}</p>
                <p className="sunset">Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-IN')}</p>
            </div>
        </div>
    )
}