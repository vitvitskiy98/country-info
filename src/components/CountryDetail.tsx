import React from "react";

interface Country {
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

interface CountryDetailProps {
  country: Country;
}

const CountryDetail: React.FC<CountryDetailProps> = ({ country }) => {
  return (
    <div>
      <h2>Country Details</h2>
      <h3>{country.name.common}</h3>
      <p>
        <strong>Capital:</strong> {country.capital}
      </p>
      <p>
        <strong>Region:</strong> {country.region}
      </p>
      <p>
        <strong>Population:</strong> {country.population}
      </p>
      <img
        src={country.flags.png}
        alt={`Flag of ${country.name.common}`}
        className="img-fluid"
      />
    </div>
  );
};

export default CountryDetail;
