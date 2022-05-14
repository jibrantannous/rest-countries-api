import { types } from "../types/types";




export const countriesReducer = (state = {}, action) => {
  
        switch (action.type) {

            case 'setCountries':
                return {
                    loading: false,
                    data: action.payload,
                    forFilter: action.payload,
                    countrySelected: {},
                    darkTheme: false

                };

                
            case types.filter:

                return {
                    ...state,
                    forFilter: state.data.filter( country => country.name.toLowerCase().includes(action.payload.toLowerCase()))
                };

            case types.region:
                
                return {
                    ...state,
                    forFilter: state.data.filter(country => country.region === action.payload)
                };

            case 'countrySelected':
                
                return {
                    ...state,
                    countrySelected: state.data.find(country => country.name === action.payload)
                };
            case 'darkTheme':
                
                return {
                    ...state,
                    darkTheme: action.payload
                };
                
            case 'loading':
                
                return {
                    ...state,
                    loading: action.payload
                };
        
            default:
                return state;
        }

}
