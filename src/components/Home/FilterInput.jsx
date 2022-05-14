import React, { useContext } from 'react'
import { CountriesContext } from '../../countriesContext/CountriesContext'
import { useForm } from '../../hooks/useForm'
import { types } from '../../types/types';

export const FilterInput = () => {

  const {dispatch}=useContext(CountriesContext);

  const [values, handeInputChange, reset] = useForm({
    country: ''
  })

  const { country } = values;

  const handleSubmit = (e)=>{
      e.preventDefault();
      //primero debo crear los handles de los dispacth en App y usarlas aquí (ver TodoApp)
      //dispatch( enviar )

      dispatch({type: types.filter, payload: country})

      reset()
  }


  return (
    <form onSubmit={handleSubmit}>
      
        <input 
            className="filter-input"
            type="text" 
            placeholder="Search for a country..."
            autoComplete='off'
            name="country"
            value={country}
            onChange={handeInputChange}
        />

    </form>
  )
}
