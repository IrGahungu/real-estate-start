import React, { useState, useEffect, useContext} from 'react';

// import icons
import { RiWallet3Line, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';

// import headless ul
import { Menu } from '@headlessui/react';

// import house context
import { HouseContext } from './HouseContext';

const PriceRangeDropdown = () => {
  const { price, setPrice } = useContext(HouseContext);

  const [isOpen, setIsOpen] = useState(false);

  const prices = [
    {
      value: 'Price range (any)',
    },
    {
      value: '180000-190000',
    },
    {
      value: '200000-250000',
    },
    {
      value: '300000-350000',
    },
    {
      value: '400000-500000',
    },
    {
      value: '10000-30000',
    },
    {
      value: '600000-650000',
    },

  ]

  return (
  <Menu as='div' className=' dropdown relative '>
            <Menu.Button onClick={()=> setIsOpen(!isOpen)}
            className='dropdown-btn w-full text-left'>

              <RiWallet3Line className='dropdown-icon-primary' />
              <div>
                <div className='text-[15px] font-medium 
                leading-tight'>
                  {price}
                  </div>
                <div className='text-[13px]'>Choose Price Range</div>
                </div>
                {isOpen ? (
                      <RiArrowUpSLine 
                      className='dropdown-icon-secondary' />
                  ) : (
                    <RiArrowDownSLine 
                       className='dropdown-icon-secondary' />
                  
                   
                  )}
              
            </Menu.Button>

            <Menu.Items className='dropdown-menu'>
              {prices.map((price, index) => {
                return (
                  <Menu.Item
                  onClick={()=> setPrice(price.value)}
                   className='cursor-pointer hover:text-violet-700 transition' as='li'
                  key={index}
                  >
                    {price.value}

                  </Menu.Item>

                );
              })}

            </Menu.Items>
  </Menu>
  );
};

export default PriceRangeDropdown;
