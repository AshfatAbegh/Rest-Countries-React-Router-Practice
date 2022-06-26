import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Country = (props) => {
    const {common, official} = props.country.name;
    const {capital} = props.country;
    const history = useHistory();
    const handleClick = (capital) =>{
        const url = `/country/${capital}`;
        history.push(url);
    }
    const countryStyle = {
        border: '1px solid purple',
        margin: '20px',
        padding: '20px',
        borderRadius: '20px'
    }
    return (
        <div style = {countryStyle}>
            <h2>Common Name: {common}</h2>
            <p>Official Name: {official}</p>
            <Link to ={`/country/${capital}`}>Show detail of {capital} </Link>
            <button onClick = { () => handleClick(capital)}>Click Here</button>
        </div>
    );
};

export default Country;