import React, { useState, useEffect, useContext } from 'react';
import { RiHome2Line, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
import { Menu } from '@headlessui/react';
import { HouseContext } from './HouseContext';

const CountryDropdown = () => {
  const { country, setCountry, countries } = useContext(HouseContext);
  const [isOpen, setIsOpen] = useState(false);

  const handleCountryClick = (selectedCountry) => {
    setCountry(selectedCountry);
    setIsOpen(false); // Close the dropdown after a country is selected
  };

  return (
    <Menu as='div' className='dropdown relative'>
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className='dropdown-btn w-full text-left'
      >
        <RiHome2Line className='dropdown-icon-primary' color='purple' />
        <div>
          <div className='text-[15px] font-medium leading-tight'>{country}</div>
          <div className='text-[13px]'>Select your need</div>
        </div>
        {isOpen ? (
          <RiArrowUpSLine className='dropdown-icon-secondary' />
        ) : (
          <RiArrowDownSLine className='dropdown-icon-secondary' />
        )}
      </Menu.Button>

      <Menu.Items className='dropdown-menu'>
        {countries.map((country, index) => {
          return (
            <Menu.Item
              onClick={() => handleCountryClick(country)}
              className='cursor-pointer hover:text-violet-700 transition'
              as='li'
              key={index}
            >
              {country}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

export default CountryDropdown;
