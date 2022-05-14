
import { CountriesProvider } from "./countriesContext/CountriesContext";
import { AppRouter } from "./routes/AppRouter";



function App() {
  

    return (
        <CountriesProvider>

            <AppRouter />

        </CountriesProvider>
    );
}

export default App;
