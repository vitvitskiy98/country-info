import React from "react";

interface Country {
  cca3: string;
  name: {
    common: string;
  };
}

interface CountriesListProps {
  countries: Country[];
  onSelectCountry: (country: Country) => void;
}

const CountriesList: React.FC<CountriesListProps> = ({
  countries,
  onSelectCountry,
}) => {
  return (
    <div className="countries-list">
      <h2>Countries List</h2>
      <ul className="list-group">
        {countries.map((country) => (
          <li
            key={country.cca3}
            className="list-group-item"
            onClick={() => onSelectCountry(country)}
          >
            {country.name.common}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CountriesList;
