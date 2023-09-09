import React from 'react';

// import routes and route 
import { Routes, Route } from 'react-router-dom';

// import components
import Header from './components/Header';
import Footer from './components/Footer';
import HouseList from './components/HouseList'; // Make sure the path to the HouseList.js file is correct

// import pages
import Home from './pages/Home';
import PropertyDetails from './pages/PropertyDetails';
const App = () => {
  return (
    <div className='max-w-[1440px] mx-auto bg-white'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/property/:id' element={<PropertyDetails />} />
        <Route path='/houses' element={<HouseList />} /> {/* New route for the HouseList component */}
      </Routes>
      <Footer />
    </div>
  );  
};

export default App;
