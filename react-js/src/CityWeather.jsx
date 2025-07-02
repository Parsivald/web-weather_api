import React, {useEffect, useState} from 'react';

const API_KEY = 'fd8eb93c0ab44e50947105628252706';

function CityWeather({city}){
    const [data, setData] = useState(null);

    useEffect(()=>{
        fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&lang=pl`)
        .then(res=>res.json())
        .then(setData)
        .catch(err => console.error('Błąd pobierania danych'))
    },[city])

    if (!data) {
        return <p>Ładowanie pogody dla {city}...</p>
    }

    return(
        <div className="card shadow">
            <div className="card-body">
                <h3>{data.location.name}</h3>
                <img src={data.current.condition.icon} className="d-block mx-auto" alt={data.current.condition.text} />
                <p className="mb-1">{data.current.temp_c}<sup>o</sup>C</p>
                <p>{data.current.condition.text}</p>
                <div className="d-flex justify-content-between">
                    <span>Wilgotność:</span>
                    <span>{data.current.humidity}%</span>
                </div>
                <div className="d-flex justify-content-between">
                    <span>Wiatr:</span>
                    <span>{data.current.wind_kph} km/h</span>
                </div>
                
            </div>
        </div>
    )
}

export default CityWeather