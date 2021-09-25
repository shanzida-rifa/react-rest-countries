import React from 'react';
import './country.css'

const Country = (props) => {
    const { name, flag, region, capital, population } = props.country;
    // console.log(props.country.name);
    return (
        <div className='country'>
            <h4>This is:{name}</h4>
            <img src={flag} alt="" />
            <small>Region:{region}</small>
            <h4>Capital is:{capital}</h4>

            <p>population is:{population}</p>
            <br />

        </div>
    );
};

export default Country;