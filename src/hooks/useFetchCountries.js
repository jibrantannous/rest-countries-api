import { useEffect, useState } from "react"

import { getCountries } from "../helpers/getCountries";



export const useFetchCountries = () => {

    const [state, setState] = useState({
        data:[],
        loading: true
    });

    
    useEffect(() => {
      
        getCountries()
            .then(countries =>{
                setState({
                    data: countries,
                    loading: false
                })
            })
    
    }, [])
    
  return state
}
