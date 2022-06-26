import React,{useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

const CountryDetail = () => {
    const {countryDetail} = useParams();
    const [country, setCountry] = useState([]);

    useEffect(() => {
       const url = `https://restcountries.com/v3.1/${countryDetail}`;
       fetch(url)
       .then(res => res.json())
       .then(data => setCountry(data));
    },[])
    return (
        <div>
            <p>Country Detail Component: {countryDetail}</p>
            <h3>{country.name}</h3>
        </div>
    );
};

export default CountryDetail;