import nubisoftLogo from "./assets/nubisoft.svg";
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CityWeather from './CityWeather';

function App() {
  return (
    <>
    <div className="flex justify-center flex-col gap-4 items-center">
      <div>
        <a href="https://nubisoft.io/" target="_blank">
          <img src={nubisoftLogo} className="" alt="Nubisoft logo" />
        </a>
      </div>
      <h1>NubiWeather</h1>
    </div>
    <div className="container py-5 text-center">
      
      <div className="row justify-content-center g-4">
        <div className="col-md-6">
          <CityWeather city="Gliwice"/>
        </div>
        <div className="col-md-6">
          <CityWeather city="Hamburg"/>
        </div>
        
      </div>
    </div>
    </>
  );
}

export default App;
