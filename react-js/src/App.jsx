import nubisoftLogo from "./assets/nubisoft.svg"
import React, {useState} from 'react' /*React - for components, useState - hook React for holding state of {selectedCity} */
import 'bootstrap/dist/css/bootstrap.min.css' /*loading Bootstrap's styles*/
import CityWeather from './CityWeather' //component with current weather
import ForeCastBox from './ForeCastBox' //component with forecast weather

function App() {
  const [selectedCity, setSelectedCity] = useState(null)//holds name of selected city (or null if none)

  return (
    
    //header and logo
    <div className="flex justify-center flex-col gap-4 items-center mt-3" >
      <div>
        <a href="https://nubisoft.io/" target="_blank">
          <img src={nubisoftLogo} className="" alt="Nubisoft logo" />
        </a>
      </div>
      <h1>NubiWeather</h1>
      
      <div className="container py-5 text-center">
      <h3 className='text-center mb-3'>Current Weather:</h3>
      <div className="row justify-content-center g-4">
        {/*list of cities*/}
        {['Gliwice', 'Hamburg'].map((city)=>( 
          <div className="col-md-6" key={city}>
          <CityWeather 
          city={city}
          isSelected={selectedCity === city}
          onClick={()=>setSelectedCity(city)}
          />
        </div>
        ))}
        {/*.map() use to create two Cityweathers cards
        isSelected is true only for the currently selected city
        onClick sets selected city state*/}
      </div>
      {/*Conditionally Showing forcast*/}
        {selectedCity && (
          <div className="mt-5">
            <ForeCastBox city={selectedCity} />
          </div>
        )}
        {/*Only renders ForeCastBox if a city is selected
        use condition rendering: if selectedCity is true, it shows the forecast*/}
    </div>
    </div>
  )
}

export default App;
