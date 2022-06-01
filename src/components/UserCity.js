import userEvent from '@testing-library/user-event';
import React from 'react'
import { useState } from 'react';
import { WiCloudy, WiDayLightning } from 'react-icons/wi'

const UserCity = ( { city } ) => {

    console.log( city );

    const uCity = city;

    return (
        <div>
             <div className = "grid grid-cols-5">
                <div></div>
                <div className = "region col-span-3 text-center">{ city }</div>
                <div></div>
            </div>
        </div>
    )
}

export default UserCity;