import {  useContext, useEffect, useState } from "react";
import { CountriesContext } from "../countriesContext/CountriesContext";
import { Link, useParams, } from "react-router-dom"

import { getCountry } from "../helpers/getCountries";

import { NativeName } from "../components/CountryScreen/NativeName";
import { Currencies } from "../components/CountryScreen/Currencies";
import { Languages } from "../components/CountryScreen/Languages";
import { ButtonBorderCountry } from "../components/CountryScreen/ButtonBorderCountry";

import { HiArrowNarrowLeft } from "react-icons/hi";

import BeatLoader from "react-spinners/ClipLoader";


export const CountryScreen = () => {

    /* const {countries, dispatch} = useContext(CountriesContext);

    const {countrySelected} = countries;
    const {flag, name, nativeName, population, region, subregion, capital, levelDomain, currencies, languages} = countrySelected;
    
    console.log(countries)
    const {countryName} = useParams()
    useEffect(() => {
        dispatch({
            type: 'countrySelected',
            payload: countryName
         })
    }, [])
    
    //En caso de que el país no exista o el usuario modifique la url
    if (!countries.countrySelected) {
        return <Navigate to='/' />
    } */
    const {countries, dispatch} = useContext(CountriesContext);
    const {darkTheme, loading} = countries;

    const [country, setCountry] = useState([])
    const {countryName} = useParams()

    useEffect(() => {
        getCountry( countryName )
            .then( countryReceived =>{
                setCountry(countryReceived)
                dispatch({type: 'loading', payload: !loading})
            })
    }, [countryName])
    
    //const [countryObject] = country
    console.log(country)
    /* const {flag, name, nativeName, population, region, subregion, capital, levelDomain, currencies, languages} = countryObject; */
 

    
  return (
    <section className={ darkTheme ? "country__screen dark-body":"country__screen light"}> 
        
        <div className="wrapper">

             
            <Link className="back-button" to="/">
                 <HiArrowNarrowLeft size={15}  style={{ verticalAlign: 'middle', marginRight: '10px'} }/> 
                 Back
            </Link>

            <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>

                { loading && <BeatLoader  css={'margin: 0 auto;'} color={'#2b3945'} /> }

            </div>
            
            {   
                
                country.map(country => (
                        
                        <div className="container-height " key={country.name}>
                            <div className="country__container animate__animated animate__fadeInLeft animate__slow" >

                                {/* left */}
                                <figure>
                                    <img src={country.flag} alt="" />
                                </figure>
                                
                                {/* right */}
                                <div className="country__info__container">

                                    <h2>{country.name}</h2>

                                    <div className="country__info-content">
                                        {/* left */}
                                        <div>
                                            <NativeName nativeName={country.nativeName} />
                                            <p>Population:{' '}<span>{country.population}</span></p>
                                            <p>Region:{' '}<span>{country.region}</span></p>
                                            <p>Sub Region:{' '}<span>{country.subregion}</span></p>
                                            <p>Capital:{' '}<span>{country.capital[0]}</span></p>
                                        </div>
                                        {/* right */}
                                        <div>
                                            <p>Top Level Domain:{' '}<span>{country.levelDomain[0]}</span></p>
                                            <Currencies currencies={country.currencies} />
                                            <Languages languages={country.languages} />
                                        </div>
                                    </div>

                                    <div className="border__countries-container">
                                        <p>Border Countries:</p>

                                        <div>
                                            {
                                            
                                                country.borderCountries?.map( border =>(
                                                    
                                                    <ButtonBorderCountry 
                                                        key={border}
                                                        border={border} 
                                                        setCountry={setCountry} 
                                                    /> 
                                                    
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                ))
            }

        </div>

    </section>
  )
}
