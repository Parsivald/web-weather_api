import React, {useEffect, useState } from 'react'

const API_KEY = 'fd8eb93c0ab44e50947105628252706'

function ForeCastBox({city}){
    //Fetching 3-day forcast days=3
    const [forecast, setForecast] = useState(null)

    useEffect(()=> {
        fetch(`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=3&lang=en`)
        .then((res)=>res.json())
        .then((data)=> setForecast(data.forecast))
        .catch(()=> setForecast(null))


    }, [city])

    if(!forecast) return null

    return (
        <div className='card shadow p-3 mx-auto' style={{maxWidth: '500px'}}>
            <h4 className='text-center mb-3'>Forecast for {city}</h4>
            {/*
            For each day in forecast: Display date, shows weather icon, display average temp

            */}
            {forecast.forecastday.map((ForecastEntry)=>(
                <div key={ForecastEntry.date} className='d-flex justify-content-between align-items-center border-top pt-2 mt-2'>
                    <span>{ForecastEntry.date}</span>
                    <img src={ForecastEntry.day.condition.icon} alt={ForecastEntry.day.condition.text} width={32} />
                    <span>{ForecastEntry.day.avgtemp_c}<sup>o</sup>C</span>
                </div>
            ))}
            {/*ForecastEntry -> one element of the forecastday array
            ForecastEntry.day -> day object inside each Forecastday
            */}
        </div>

    )

}

export default ForeCastBox