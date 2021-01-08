import React from 'react';
import img from './error.png'

const Error = () => {
    return (
        <div className="text-center">
            <img className="w-100" src={img} alt='error'></img>
        </div>
    )
}

export default Error;