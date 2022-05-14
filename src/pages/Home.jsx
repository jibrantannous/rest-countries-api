import { useContext } from 'react'
import { CountriesContext } from '../countriesContext/CountriesContext'
import { CountriesList } from '../components/Home/CountriesList'
import { DropDown } from '../components/Home/DropDown'
import { FilterInput } from '../components/Home/FilterInput'
import { AiOutlineSearch } from "react-icons/ai";
import '../styles/components/_home.scss'


export const Home = () => {

  const {countries} = useContext(CountriesContext);
  const {darkTheme} = countries;

  return (
    <section className={ darkTheme ? "home dark-body":"home light"}>

        <div className="wrapper">

            <div className="home__container">

                {/* UP */}
                <div className="home__filters-container">

                    <AiOutlineSearch className="search-icon" />
                    {/* Left */}
                    <FilterInput />

                    {/* Right */}
                    <DropDown />
                    
                </div>

                {/* DOWN */}

                <CountriesList />
                
            </div>

        </div>
        
    </section>
  )
}
