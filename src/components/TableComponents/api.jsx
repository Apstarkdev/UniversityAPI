import React, { useState, useEffect } from 'react';
import Selector from './selector';

const ApiCall = () => {
  const countries = [
    { name: 'Chile' },
    { name: 'Peru' },
    { name: 'Ecuador' },
    { name: 'Colombia' },
    { name: 'Paraguay' },
    { name: 'Argentina' },
  ];

  const [selectedCountry, setSelectedCountry] = useState(''); 
  const [universities, setUniversities] = useState([]);

  useEffect(() => {
    if (selectedCountry !== '') {
      const apiUrl = `http://universities.hipolabs.com/search?country=${selectedCountry}`;
      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => setUniversities(data))
        .catch((error) => console.error('Error fetching universities:', error));
    } else {
      setUniversities([]);
    }
  }, [selectedCountry]);

  return (
    <div id='tabla-father-container'>
      <Selector
        countries={countries}
        selectedCountry={selectedCountry}
        setSelectedCountry={setSelectedCountry}
      />
      <table>
        <thead>
          <tr>
            <th className='table-title sticky'>Pais</th>
            <th className='table-title sticky'>Nombre</th>
            <th className='table-title sticky'>Dominio</th>
            <th className='table-title sticky'>Sitio web</th>
          </tr>
        </thead>
        <tbody>
          {universities.map((university) => (
            <tr key={university.name}>
              <td id='pais-case'>{university.country}</td>
              <td>{university.name}</td>
              <td id='dominio-case'>{university.domains[0]}</td>
              <td>
                {university.web_pages.length > 0 ? (
                  <button id='btn-link'>
                    <a href={university.web_pages[0]} target="_blank" rel="noopener noreferrer">
                      Ver
                    </a>
                  </button>
                ) : (
                  'N/A'
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ApiCall;
