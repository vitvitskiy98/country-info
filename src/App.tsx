import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CountriesList from "./components/CountriesList";
import CountryDetail from "./components/CountryDetail";

interface Country {
  cca3: string;
  name: {
    common: string;
  };
  capital: string;
  region: string;
  population: number;
  flags: {
    png: string;
  };
}

const App: React.FC = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);

  useEffect(() => {
    axios
      .get<Country[]>("https://restcountries.com/v3.1/all")
      .then((response) => {
        const sortedCountries = response.data.sort((a, b) =>
          a.name.common.localeCompare(b.name.common)
        );
        setCountries(sortedCountries);
        if (sortedCountries.length > 0) {
          setSelectedCountry(sortedCountries[0]);
        }
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Countries App</h1>
      <div className="row">
        <div className="col-md-6">
          <CountriesList
            countries={countries}
            onSelectCountry={setSelectedCountry}
          />
        </div>
        <div className="col-md-6">
          {selectedCountry && <CountryDetail country={selectedCountry} />}
        </div>
      </div>
    </div>
  );
};

export default App;
