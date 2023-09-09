// Header.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../assets/img/logo.png'; // Replace 'logo.png' with your image filename and extension

const Header = () => {
  const location = useLocation();

  // Check if the current path is '/houses' (the search results page)
  const isSearchResultsPage = location.pathname === '/houses';

  return (
    <header className='py-6 nb-12 border-b'>
      <div className='container mx-auto flex justify-between items-center'>
        {/* logo */}
        {isSearchResultsPage ? (
          // If on the search results page, link back to the home page using <Link>
          <Link to='/' style={{ cursor: 'pointer' }}>
            <img src={Logo} alt='Logo' style={{ width: '200px', height: '30px' }} />
          </Link>
        ) : (
          // If on any other page, don't use <Link> to avoid double wrapping links
          <div style={{ cursor: 'pointer' }} onClick={() => (window.location.href = '/')}>
            <img src={Logo} alt='Logo' style={{ width: '200px', height: '30px' }} />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
