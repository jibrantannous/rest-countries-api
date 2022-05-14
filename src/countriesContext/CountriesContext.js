import { createContext, useEffect, useReducer } from "react";
import { getCountries } from "../helpers/getCountries";

import { countriesReducer } from "./countriesReducer";


export const CountriesContext = createContext(null)


export const CountriesProvider = ({children})=>{
    
    const initialState = {
        loading: true,
        data: [],
        forFilter: [],
        countrySelected: {},
        darkTheme: false,
    }

    const [countries, dispatch] = useReducer(countriesReducer, initialState );

    useEffect(() => {
      
        getCountries()
            .then( countriesRequest =>{
                dispatch({type: 'setCountries', payload: countriesRequest})
            })
    
    }, [])
    
    return (
        <CountriesContext.Provider value={{
            countries,
            dispatch
        }}>

            {children}
        </CountriesContext.Provider>

    )
}