import React from 'react'

export const Currencies = ({currencies}) => {

    const currenciesKeys = Object.keys(currencies)
    
    const {name} = currencies[currenciesKeys[0]]


  return (
    <p>Currencies:&nbsp;&nbsp;<span>{name}</span></p>
  )
}
