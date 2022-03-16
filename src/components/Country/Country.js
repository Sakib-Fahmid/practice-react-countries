import React from 'react';
import './Country.css';

const Country = (props) => {
    // console.log(props.country);
    const {population,area,region,name,flags} = props.country;
    return (
        <div className='single-country'>
            <h2>Country Name : {name.common}</h2>
            <img src={flags.png} alt="" />
            <h3>Populaion : {population}</h3>
            <p>Area : {area} </p>
            <p><small>Region : {region}</small></p>
        </div>
    );
};

export default Country;