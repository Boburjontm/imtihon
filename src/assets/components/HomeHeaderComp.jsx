import React, { useState } from 'react';
import { BrowserRouter as Router, NavLink, Route, Routes } from 'react-router-dom';
import Logo from '../../../public/img/Logo (1).svg';
import { FiSearch } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";
import { IoExit } from "react-icons/io5";
import Homepage from '../pages/Homepage';

const HomeHeaderComp = () => {
  const [isSearchModalOpen, setSearchModalOpen] = useState(false);

  const toggleSearchModal = () => {
    setSearchModalOpen(!isSearchModalOpen);
  };

  return (
    <Router>
      <div className='relative'>
        <div className={`container mx-auto p-4 flex justify-between items-center border-b-[1px] ${isSearchModalOpen ? 'blur-sm' : ''}`}>
          <img src={Logo} alt="sitelogo" />
          <ul className='flex gap-4'>
            {['Home', 'Shop', 'Plant Care', 'Blogs'].map((item) => (
              <li key={item}>
                <NavLink
                  to={`/${item.toLowerCase().replace(' ', '-')}`}
                  className={({ isActive }) =>
                    `cursor-pointer ${isActive ? 'text-black font-semibold border-b-[2px] pb-6 border-green-700' : 'text-gray-600'}`
                  }
                >
                  {item}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="searchsection flex items-center gap-4">
            <FiSearch onClick={toggleSearchModal} className='cursor-pointer' />
            <FiShoppingCart className='text-green-700' />
            <button className='flex items-center px-4 py-2 bg-green-700 text-white rounded-2xl gap-2'><IoExit />Login</button>
          </div>
        </div>

        {isSearchModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white w-full md:w-1/2 lg:w-1/3 h-3/4 mt-10 p-8 rounded-lg shadow-lg relative transform transition-transform duration-300 ease-in-out translate-y-0">
              <button onClick={toggleSearchModal} className="absolute top-2 right-2 text-2xl">&times;</button>
              <h2 className="text-2xl mb-4">Search</h2>
              <input type="text" className="w-full p-2 border border-gray-300 rounded" placeholder="Search for items..." />
            </div>
          </div>
        )}

        <Routes>
          <Route path="/home" element={<div><Homepage/></div>} />
          <Route path="/shop" element={<div>Shop Page</div>} />
          <Route path="/plant-care" element={<div>Plant Care Page</div>} />
          <Route path="/blogs" element={<div>Blogs Page</div>} />
        </Routes>
      </div>
    </Router>
  );
};

export default HomeHeaderComp;
