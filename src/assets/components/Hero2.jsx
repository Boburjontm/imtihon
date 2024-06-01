import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingCart, faInfoCircle, faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { data } from '../../data/data';

const Hero2 = () => {
  const [activePlants, setActivePlants] = useState(0); // Default to 'All plants'
  const [plantData, setPlantData] = useState(data);
  const [currentPage, setCurrentPage] = useState(1);
  const [showNextPages, setShowNextPages] = useState(false);
  const plantsPerPage = 9; // Number of plants per page

  const plants = [
    { name: 'All plants' },
    { name: 'New Arrivals' },
    { name: 'Sale' }
  ];

  const handlePlantsClick = (index) => {
    setActivePlants(index);
  };

  // Calculate total pages based on plant data length
  const totalPages = Math.ceil(plantData.length / plantsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleNextClick = () => {
    setShowNextPages(true);
    setCurrentPage(3); // Start from page 3 when "Next" is clicked
  };

  const handleBackClick = () => {
    setShowNextPages(false);
    setCurrentPage(1); // Go back to page 1 when "Back" is clicked
  };

  // Get current plants based on the currentPage and plantsPerPage
  const indexOfLastPlant = currentPage * plantsPerPage;
  const indexOfFirstPlant = indexOfLastPlant - plantsPerPage;
  const currentPlants = plantData.slice(indexOfFirstPlant, indexOfLastPlant);

  return (
    <div>
      <div className="hero2_navbar flex items-center justify-between">
        <div className="ulsection">
          <ul className="flex gap-4">
            {plants.map((plant, index) => (
              <li
                key={index}
                className={`flex justify-between cursor-pointer ${
                  activePlants === index ? 'text-green-600 border-b-green-600 border-b-[2px]' : ''
                }`}
                onClick={() => handlePlantsClick(index)}
              >
                {plant.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="sortsection flex">
          <p>Sort by:</p>
          <select name="" id="plants">
            <option value="">Default sorting</option>
            <option value="">Option 1</option>
            <option value="">Option 2</option>
          </select>
        </div>
      </div>
      <div className="cards grid grid-cols-3 gap-16 mt-8">
        {currentPlants.map((plant) => (
          <div key={plant.id} className="card relative rounded-sm overflow-hidden group">
            <img 
              src={plant.image_url} 
              alt={plant.name ? plant.name : 'Plant'} 
              className="w-full h-72 object-cover hover:border-t-[3px] hover:border-t-green-600"
            />
            <div className="absolute bg-white bottom-0 left-0 right-0 bg-opacity-90 p-2 flex justify-around items-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <FontAwesomeIcon icon={faShoppingCart} className="text-gray-600 hover:text-green-600 cursor-pointer" />
              <FontAwesomeIcon icon={faHeart} className="text-gray-600 hover:text-green-600 cursor-pointer" />
              <FontAwesomeIcon icon={faInfoCircle} className="text-gray-600 hover:text-green-600 cursor-pointer" />
            </div>
            <div className="card_info p-4 mb-4 absolute mt-[-120px] bg-white">
              <h3 className="font-semibold text-lg cursor-pointer">{plant.common_name ? plant.common_name : 'Unknown Plant'}</h3>
              <p className="text-sm text-green-600 font-bold">{plant.cost ?  plant.cost : 'No description available'}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination flex justify-end mt-8">
        {showNextPages && (
          <button
            className="mx-2 px-2 py-1 rounded bg-white-300 text-gray-700"
            onClick={handleBackClick}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
        )}
        {Array.from({ length: totalPages }, (_, index) => (
          (!showNextPages && index < 2) || (showNextPages && index >= 2) ? (
            <button
              key={index}
              className={`mx-1 px-2 py-1 rounded ${
                currentPage === index + 1 ? 'bg-green-600 text-white' : 'bg-white text-gray-700 border-[1px] border-gray-300'
              }`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ) : null
        ))}
        {!showNextPages && totalPages > 2 && (
          <button
            className=" px-2 py-1 rounded bg-white-300 text-gray-700"
            onClick={handleNextClick}
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        )}
      </div>
    </div>
  );
};

export default Hero2;
