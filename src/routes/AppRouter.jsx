import {BrowserRouter, Routes, Route, } from 'react-router-dom'
import { NavBar } from '../components/NavBar'
import { CountryScreen } from '../pages/CountryScreen'
import { Home } from '../pages/Home'


export const AppRouter = () => {
  return (
    <BrowserRouter>
        <NavBar />
        <main>
            <Routes>
                <Route  path='/' element={ <Home /> }/>
                <Route  path='/country/:countryName' element={ <CountryScreen /> }/>
            </Routes>
        </main>
    </BrowserRouter>
  )
}
