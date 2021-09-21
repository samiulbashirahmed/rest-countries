import React, { useEffect, useState } from 'react';
import Country from './Country/Country';
import './Countries.css';

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
            .then(response => response.json())
            .then(data => setCountries(data));
    }, [])
    return (
        <div>
            <h1 style={{ color: 'blueviolet' }}>The whole world : {countries.length}</h1>
            <div className="container">
                {
                    countries.map(country =>
                        <Country
                            country={country}
                            key={country.alpha3Code}>

                        </Country>)
                }
            </div>

        </div>
    );
};

export default Countries;