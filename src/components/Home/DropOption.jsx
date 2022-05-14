import { useContext } from "react"
import { CountriesContext } from "../../countriesContext/CountriesContext"
import { types } from "../../types/types"


export const DropOption = ({region}) => {

    const {dispatch} = useContext(CountriesContext)


  return (
        <li
            onClick={()=> dispatch({
                type: types.region,
                payload: region
            })}
        >
            {region}
        </li>
  )
}
