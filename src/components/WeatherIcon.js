import React from 'react'

export const WeatherIcon = ( { icon } ) => {

    const iconURL = `http://openweathermap.org/img/wn/${icon}@2x.png`;

    return (
        <div>
            <div className = "iconBox">
                <img src = {iconURL} className = "weatherIcon"></img>
            </div>
        </div>
    )
}

export default WeatherIcon;
