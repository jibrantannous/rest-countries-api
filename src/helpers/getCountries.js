

export const getCountries = async ()=> {

    const url = 'https://restcountries.com/v3.1/all'
    const resp = await fetch(url);
    const data = await resp.json();

    const countries = data.map( country => {

            return {
                name: country.name.common,
                nativeName: country.name.nativeName,
                population: country.population,
                capital: country.capital,
                region: country.region,
                subregion: country.subregion,
                levelDomain: country.tld,
                currencies: country.currencies,
                languages: country.languages,
                borderCountries: country.borders,
                flag: country.flags.png,
                isoCodeCca3: country.cca3
            }
    })

    return countries;
}

export const getCountry = async (countryName)=> {
    const url = `https://restcountries.com/v3.1/name/${countryName}`
    const resp = await fetch(url);
    const data = await resp.json();
    //const {} = data[0]
  
    const country = data.map( country => {
        
        return {
            name: country.name.common,
            nativeName: country.name.nativeName,
            population: country.population,
            capital: country.capital,
            region: country.region,
            subregion: country.subregion,
            levelDomain: country.tld,
            currencies: country.currencies,
            languages: country.languages,
            borderCountries: country.borders,
            flag: country.flags.png,
            isoCodeCca3: country.cca3
        }
    })
    
    return country;
}