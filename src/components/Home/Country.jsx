import React, { useContext } from 'react'
import {  useNavigate } from 'react-router'
import { CountriesContext } from '../../countriesContext/CountriesContext';


export const Country = ({name,population,region,capital,flag}) => {

   const {countries, dispatch} = useContext(CountriesContext);
   const {loading} = countries;


   const navigate = useNavigate();

   const handleCountryScreen = ()=>{
       navigate(`/country/${name.toLowerCase()}`)
       dispatch({type: 'loading', payload: !loading})

   };
    
  return (
        <div className="card animate__animated animate__fadeInLeft animate__slow" onClick={handleCountryScreen}>

            <figure>
                <img src={flag} alt="" />
            </figure>

            <div className="card__main">
                <h2>{name}</h2>
                <p>Population:&nbsp;&nbsp;<span>{population}</span></p>
                <p>Region:&nbsp;&nbsp;<span>{region}</span></p>
                <p>Capital:&nbsp;&nbsp;<span>{capital}</span></p>
            </div>


        </div>
  )
}
