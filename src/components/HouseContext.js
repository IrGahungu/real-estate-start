import React, { createContext, useState, useEffect } from 'react';
import { housesData } from '../data';

export const HouseContext = createContext();

const HouseContextProvider = ({ children }) => {
  const [houses, setHouses] = useState(housesData);
  const [country, setCountry] = useState('Choose Here');
  const [countries, setCountries] = useState([]);
  const [property, setProperty] = useState('Activity');
  const [properties, setProperties] = useState([]);
  const [price, setPrice] = useState('Price range (any)');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const allCountries = housesData.map((house) => house.country);
    const uniqueCountries = ['Choose Here', ...new Set(allCountries)];
    setCountries(uniqueCountries);
  }, []);

  useEffect(() => {
    const allProperties = housesData.map((house) => house.type);
    const uniqueProperties = ['Activity', ...new Set(allProperties)];
    setProperties(uniqueProperties);
  }, []);

  const isDefault = (str) => {
    return str.includes('(any)');
  };

  const handleClick = () => {
    setLoading(true);

    const minPrice = parseInt(price.split('-')[0]);
    const maxPrice = parseInt(price.split('-')[1]);

    const newHouses = housesData.filter((house) => {
      const housePrice = parseInt(house.price);

      if (
        (isDefault(country) || house.country === country) &&
        (isDefault(property) || house.type === property) &&
        (isDefault(price) || (housePrice >= minPrice && housePrice <= maxPrice))
      ) {
        return house;
      }
    });

    setTimeout(() => {
      setHouses(newHouses);
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    const handleBackButton = () => {
      // Redirect the user to the previous page when the back button is pressed
      window.history.back();
    };

    window.addEventListener('popstate', handleBackButton);

    return () => {
      // Cleanup: remove the event listener when the component unmounts
      window.removeEventListener('popstate', handleBackButton);
    };
  }, []);

  return (
    <HouseContext.Provider
      value={{
        houses,
        country,
        setCountry,
        countries,
        property,
        setProperty,
        properties,
        price,
        setPrice,
        loading,
        handleClick,
      }}
    >
      {children}
    </HouseContext.Provider>
  );
};

export default HouseContextProvider;
