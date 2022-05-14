import React, { useContext } from 'react'
import { useNavigate } from 'react-router';
import { CountriesContext } from '../../countriesContext/CountriesContext';

export const ButtonBorderCountry = ({border,setCountry}) => {

  const {countries, dispatch} = useContext(CountriesContext);
  const {data, loading} = countries;

  const country = data.find( country => {
    
     return border === country.isoCodeCca3
  })

  const navigate = useNavigate()

  const handleCountryScreen = ()=>{

    navigate(`/country/${country.name.toLowerCase()}`)
    
    setCountry([country])
    dispatch({type: 'loading', payload: !loading})
  };


  return (
    <button onClick={handleCountryScreen}>{country.name}</button>
  )
}
