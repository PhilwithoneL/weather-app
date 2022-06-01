import config from './config.js';
import React, { useState, useEffect } from 'react';
import Title from './components/Title';
import SearchWeather from './components/SearchWeather';
import WeatherDisplay from './components/WeatherDisplay';
import UserCity from './components/UserCity';


const App = () => {
  

//Finds the location of user

const [userInfo, setWeatherInfo] = useState({ apiRan: false, cityFound: true});
 
//Get user info

  useEffect (() => {

      setTimeout(function(){

      //Gets the user's location
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition((position) => {

            const lat = position.coords.latitude;
            const lon = position.coords.longitude;

            let opResponse;

            //API for opencage data to find city
              
              async function getCity() {


                await fetch(`/.netlify/functions/get-op-data?lat=${lat}&lon=${lon}`)
                .then(res => res.json())
                .then(data => opResponse = data)


                const opData = opResponse;
                const { list } = opData;
                const weatherData = opData.list[0].weather[0];
                const uCity = opData.list[0].name;

                const temp = opData.list[0].main;
                const apiRan = true;
                const userInfo = { ...weatherData, uCity, apiRan, ...temp}

              setWeatherInfo(userInfo);

              }

              getCity();

          })
          } else {
            alert('Geolocation not supported by your browser')
          }
      }, 1500);
    }, []);

  const AddWeatherInfo = () => {

    if (userInfo.apiRan === true) {
      if(userInfo.cityFound === false) {
        return <UserCity city = { userInfo.uCity } />
      } else {
        return <WeatherDisplay weather = { userInfo } />
      }
    } else {
      return <div>
              <div className = "grid grid-cols-3 grid-rows-3">
                <div></div>
                <div className  = "awaiting-api col-span-1 text-center">Finding Weather</div>
                <div></div>
                
                <div></div>
                <div className = "text-center col-span-3">
                  <div className = "lds-ripple"> 
                    <div className = "lds-ripple"></div>
                  </div>
                </div>
                <div></div>

                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
    }
  }


  const addWeatherError = () => {
    return <div>
    <div className = "grid grid-cols-3 grid-rows-3">
      <div></div>
      <div className  = "awaiting-api col-span-1 text-center">Finding Weather</div>
      <div></div>
      
      <div></div>
      <div className = "text-center col-span-3">
        <div className = "lds-ripple"> 
          <div className = "lds-ripple"></div>
        </div>
      </div>
      <div></div>

      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
  }

  const search = (userInput) => {

    async function checkRequest() {

      let opResponse;

      setWeatherInfo({ apiRan: false, cityFound: false})
      
      try {

        await fetch(`/.netlify/functions/search-weather?userInput=${userInput}`)
          .then(res => res.json())
            .then(data => opResponse = data)

          const opData = opResponse;
         
          // setWeatherInfo({ apiRan: true, cityFound: false, uCity: 'City not found' })

          if(!opData.coord) {

            // throw new SyntaxError('City not found')

          } else {
            const apiRan = true;
            const cityFound = true;

            const weatherData = opData.weather[0];
            let uCity = opData.name;
            const temp = opData.main;

            let userInfo = { ...weatherData, uCity, apiRan, ...temp, apiRan, cityFound}

            setWeatherInfo(userInfo);
          }
  
      } catch(err) {
      
          setWeatherInfo({ apiRan: true, cityFound: false, uCity: 'City not found' })

      } 
  }
    
    setTimeout( function() {
      checkRequest();
    },1500);
    
  }

// Gets Weather info

  return (
    <div>
      {/* Adds title */}
      <Title />

      {/*Search for weather*/}

      <SearchWeather handleClick = { search } />

      {/*Displays weather*/}
      <AddWeatherInfo />
      <addWeatherError />
    </div>
  );
}

export default App;
