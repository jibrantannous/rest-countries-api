import React, { useContext } from 'react'
import {CountriesContext} from '../../countriesContext/CountriesContext'

import { Country } from './Country'
import BeatLoader from "react-spinners/ClipLoader";

//import { useFetchCountries } from "../../hooks/useFetchCountries";

export const CountriesList = () => {
    
    //const {data, loading} = useFetchCountries();
    const { countries } = useContext(CountriesContext);
    const {loading, forFilter}= countries;


  return (
        <div className="cards__container ">

            { loading && <BeatLoader  css={'margin: 0 auto;'} color={'#2b3945'} /> }

            {
                forFilter.map( country => (
                    <Country {...country} key={country.name} />
                    
                ))
            }
                  
        </div>
  )
}
