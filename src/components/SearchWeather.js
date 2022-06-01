import { FaSearch } from 'react-icons/fa';
import React, { useState, useEffect } from 'react';

export const SearchWeather = ( { handleClick } ) => {

    const [userInput, addUserInput] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();

        if(!userInput) {
            alert('Input a city')
            return
        }

        handleClick(userInput)
    }

    return (
        <div>
            <div className = "grid grid-cols-7 search-bar">
                <div className = "grid col-span-1"></div>
                <div className = "grid col-span-5 text-center">
                <form className="container" onSubmit = { onSubmit } >
                        <input type="text" placeholder ="Search a for city..." value = { userInput }  onChange = { (e) => addUserInput( e.target.value ) }></input>
                        <div className="search">
                            <button className = "search-icon" ><FaSearch /></button>
                        </div>
                    </form>
                </div>
                <div className = "grid col-span-1"></div>
            </div>
        </div>
    )
}

export default SearchWeather;
