
import { useContext } from "react";
import { IoMoonOutline  } from "react-icons/io5";
import { CountriesContext } from "../countriesContext/CountriesContext";

import '../styles/components/_navbar.scss'

export const NavBar = () => {

  const {countries,dispatch}= useContext(CountriesContext)
  const {darkTheme} = countries

  

  return (
    <header className={ darkTheme ? "dark-header" : ""}> 
          <div className="wrapper">

              <div className="header__container">
                    <p className="logo">
                        Where in the world?
                    </p>

                    <div className="header__dark-mode">
                        <IoMoonOutline className="moon"/>
                        <button 
                            onClick={()=> dispatch({type: 'darkTheme', payload: !darkTheme })}
                        >
                          Dark Mode
                        </button>
                    </div>
              </div>

          </div>

    </header>
  )
}
