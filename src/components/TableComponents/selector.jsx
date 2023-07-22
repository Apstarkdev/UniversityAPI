import React from 'react';

const Selector = ({ countries, selectedCountry, setSelectedCountry }) => {
  const handleCountryChange = (event) => {
    const selectedValue = event.target.value;
    if (selectedValue !== '') {
      setSelectedCountry(selectedValue);
    }
  };

  return (
    <div id='selector'>
      <select
        id="paises"
        onChange={handleCountryChange}
      >
        <option value="">Elegir</option>
        {countries.map((country) => (
          <option key={country.name} value={country.name}>
            {country.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Selector;
