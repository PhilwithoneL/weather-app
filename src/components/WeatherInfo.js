import WeatherIcon from './WeatherIcon.js';
import { RiTempColdLine } from 'react-icons/ri';

const WeatherInfo = ( { weather } ) => {

    const tempColor = () => {

        const temp = weather.temp;
        parseInt(temp);

        if(temp <= 0) {
            return <RiTempColdLine className = "weather-temp-icon weather-temp-icon-ice" />
        } else if (temp > 0 && temp <= 10 ) {
            return <RiTempColdLine className = "weather-temp-icon weather-temp-icon-cold" />
        } else if (temp > 10 && temp <= 20 ) {
            return <RiTempColdLine className = "weather-temp-icon weather-temp-icon-cool" />
        } else if (temp > 20 && temp <= 30 ) {
            return <RiTempColdLine className = "weather-temp-icon weather-temp-icon-warm" />
        } else if (temp > 30 && temp <= 40 ) {
            return <RiTempColdLine className = "weather-temp-icon weather-temp-icon-hot" />
        } else if (temp > 50 ) {
            return <RiTempColdLine className = "weather-temp-icon weather-temp-icon-very-hot" />
        }
    }


    return (
        <div>
            <div className = "grid grid-cols-5">
                <div className = "col-span-1"></div>
                <div className = "col-span-3 text-center weather-icon mx-auto"><WeatherIcon icon = { weather.icon } /></div>
                <div className = "col-span-1"></div>
            </div>


            <div className = "grid grid-cols-5">
                <div></div>
                <div className = "col-span-3 weather-main">{weather.main}</div>
                <div></div>
            </div>

            <div>
                <div></div>
                <div className = "col-span-3 weather-description"></div>
                <div></div>
            </div>

            <div className = "grid grid-cols-5">
                <div></div>
                <div className = "col-span-3 text-center">{tempColor()}</div>
                <div></div>
            </div>

            <div className = "grid grid-cols-5 temp-section-break">
                <div></div>
                <div className = "col-span-3 text-center"></div>
                <div></div>
            </div>

            <div>
                <div></div>
                <div className = "col-span-3 weather-temp">Temperture: {weather.temp} <span>&#8451;</span></div>
                <div></div>
            </div>
        </div>
    )
}

export default WeatherInfo;