import React, {useEffect, useState} from 'react';

const API_KEY = 'fd8eb93c0ab44e50947105628252706';

function CityWeather({city, onClick, isSelected}){
    const [data, setData] = useState(null);
    /*Fetching weather data
    fetches current weather for the given city and stores it in state
    */
    useEffect(()=>{
        fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&lang=en`)
        .then(res=>res.json())
        .then(setData)
        .catch(err => console.error('Błąd pobierania danych'))
    },[city])

    if (!data) {
        return <p>Loading weather for {city}...</p>
    }

    return(
        
        <div className={`card shadow ${isSelected ? 'border-primary' : ''}`}
            onClick={onClick}
            style={{cursor: 'pointer'}}>
                
            <div className="card-body">
                <h3>{data.location.name}</h3>
                <img src={data.current.condition.icon} className="d-block mx-auto" alt={data.current.condition.text} />
                <p className="mb-1 fs-4">{data.current.temp_c}<sup>o</sup>C</p>
                <p>{data.current.condition.text}</p>

                <div className="d-flex justify-content-between">
                    <span>Humidity:</span>
                    <span>{data.current.humidity}%</span>
                </div>
                <div className="d-flex justify-content-between">
                    <span>Wind:</span>
                    <span>{data.current.wind_kph} km/h</span>
                </div>
                {/*data.location.name -> city name
                data.current.temp_c -> current temperature in Celcius
                data.current.condition.text -> weather condition (e.g., Sunny, Cloudy)
                data.current.humidity or .wind_kph-> info of wind and humidity
                */}
            </div>
        </div>
    )
}

export default CityWeather