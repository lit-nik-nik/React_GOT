import React from 'react';
import img from './spinner.gif'

const Spinner = () => {
    return (
        <div className="text-center">
            <img src={img} alt='spinner'></img>
        </div>
    )
}

export default Spinner;