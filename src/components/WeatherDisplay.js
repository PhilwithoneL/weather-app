import WeatherInfo from './WeatherInfo';
import UserCity from './UserCity';

const WeatherDisplay = ({ weather }) => {

    return (
        <div>
            <UserCity city = { weather.uCity } />
            <div className = "grid grid-col-5 text-center">
                <div></div>        
                <div className = "region col-span-3"><WeatherInfo weather = { weather } /></div>
            </div>
        </div>
    )
}

export default WeatherDisplay;