import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faShoppingCart,
  faInfoCircle,
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { data } from "../../data/data";

const Hero2 = ({ onAddToCart }) => {
  const [activePlants, setActivePlants] = useState(0);
  const [plantData, setPlantData] = useState(data);
  const [currentPage, setCurrentPage] = useState(1);
  const [showNextPages, setShowNextPages] = useState(false);
  const plantsPerPage = 9;

  const plants = [
    { name: "All plants" },
    { name: "New Arrivals" },
    { name: "Sale" },
  ];

  const handlePlantsClick = (index) => {
    setActivePlants(index);
  };

  const totalPages = Math.ceil(plantData.length / plantsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleNextClick = () => {
    setShowNextPages(true);
    setCurrentPage(3);
  };

  const handleBackClick = () => {
    setShowNextPages(false);
    setCurrentPage(1);
  };

  const indexOfLastPlant = currentPage * plantsPerPage;
  const indexOfFirstPlant = indexOfLastPlant - plantsPerPage;
  const currentPlants = plantData.slice(indexOfFirstPlant, indexOfLastPlant);

  const handleCartClick = (plant) => {
    onAddToCart(plant);
    console.log("Add to cart clicked for plant ID:", plant.id);
  };

  return (
    <div className="p-4 md:p-8">
      <div className="hero2_navbar flex flex-col md:flex-row items-center justify-between">
        <div className="ulsection">
          <ul className="flex gap-4">
            {plants.map((plant, index) => (
              <li
                key={index}
                className={`flex justify-between cursor-pointer ${
                  activePlants === index
                    ? "text-green-600 border-b-green-600 border-b-[2px]"
                    : ""
                }`}
                onClick={() => handlePlantsClick(index)}
              >
                {plant.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="sortsection flex mt-4 md:mt-0">
          <p className="mr-2">Sort by:</p>
          <select
            name=""
            id="plants"
            className="border border-gray-300 rounded p-1"
          >
            <option value="">Default sorting</option>
            <option value="">Option 1</option>
            <option value="">Option 2</option>
          </select>
        </div>
      </div>
      <div className="cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
        {currentPlants.map((plant) => (
          <div
            className="card relative rounded-sm overflow-hidden group"
            key={plant.id}
          >
            <Link to="/shop">
              <img
                src={plant.image_url}
                alt={plant.name ? plant.name : "Plant"}
                className="w-full h-48 sm:h-60 md:h-72 object-cover hover:border-t-[3px] hover:border-t-green-600"
              />
            </Link>
            <div className="absolute bg-white bottom-0 left-0 right-0 bg-opacity-90 p-2 flex justify-around items-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <FontAwesomeIcon
                icon={faShoppingCart}
                className="text-gray-600 hover:text-green-600 cursor-pointer"
                onClick={() => handleCartClick(plant)}
              />
              <FontAwesomeIcon
                icon={faHeart}
                className="text-gray-600 hover:text-green-600 cursor-pointer"
              />
              <FontAwesomeIcon
                icon={faInfoCircle}
                className="text-gray-600 hover:text-green-600 cursor-pointer"
              />
            </div>
            <div className="card_info p-4 mb-4 absolute mt-[-80px] sm:mt-[-100px] md:mt-[-120px] bg-white">
              <h3 className="font-semibold text-lg cursor-pointer">
                {plant.common_name ? plant.common_name : "Unknown Plant"}
              </h3>
              <p className="text-sm text-green-600 font-bold">
                {plant.cost ? plant.cost : "No description available"}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination flex justify-center md:justify-end mt-8">
        {showNextPages && (
          <button
            className="mx-2 px-2 py-1 rounded bg-white text-gray-700"
            onClick={handleBackClick}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
        )}
        {Array.from({ length: totalPages }, (_, index) =>
          (!showNextPages && index < 2) || (showNextPages && index >= 2) ? (
            <button
              key={index}
              className={`mx-1 px-2 py-1 rounded ${
                currentPage === index + 1
                  ? "bg-green-600 text-white"
                  : "bg-white text-gray-700 border-[1px] border-gray-300"
              }`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ) : null
        )}
        {!showNextPages && totalPages > 2 && (
          <button
            className="px-2 py-1 rounded bg-white text-gray-700"
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
