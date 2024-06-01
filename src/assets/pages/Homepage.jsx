import React, { useState, useEffect } from 'react';
import bigimg from '../../../public/img/bigflower.svg';
import littleimg from '../../../public/img/littleflower.svg';
import Hero2 from '../components/Hero2';
import saleimg from '../../../public/img/Sale.svg';
import Slider from '@mui/material/Slider'; // Range slider komponentini import qilamiz
import Hero3 from '../components/Hero3';
import Hero4 from '../components/Hero4';


const Homepage = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeSize, setActiveSize] = useState(null);
  const [sliderValue, setSliderValue] = useState([0, 100]); // Range slider qiymatlari va standart qiymatlar

  const pages = [
    {
      title: "LET’S MAKE A BETTER ",
      title2: "PLANET",
      description: "We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!",
      button: "SHOP NOW",
    },
    {
      title: "DISCOVER OUR NEW ",
      title2: "COLLECTION",
      description: "Explore our latest collection of plants, curated just for you. Find the perfect addition to your green space.",
      button: "EXPLORE NOW",
    },
    {
      title: "JOIN OUR PLANT ",
      title2: "COMMUNITY",
      description: "Connect with other plant enthusiasts, share tips, and grow your own urban jungle together.",
      button: "JOIN US",
    },
  ];

  const categories = [
    { name: "House Plants", count: 33 },
    { name: "Potter Plants", count: 12 },
    { name: "Seeds", count: 12 },
    { name: "Small Plants", count: 12 },
    { name: "Big Plants", count: 12 },
    { name: "Succulents", count: 12 },
    { name: "Terrariums", count: 12 },
    { name: "Gardening", count: 12 },
    { name: "Accessories", count: 12 },
  ];

  const sizes = [
    { name: "Small", count: 119 },
    { name: "Medium", count: 86 },
    { name: "Large", count: 78 },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPage((prevPage) => (prevPage + 1) % pages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handlePageChange = (index) => {
    setCurrentPage(index);
  };

  const handleCategoryClick = (index) => {
    setActiveCategory(index);
  };

  const handleSizeClick = (index) => {
    setActiveSize(index);
  };

  const handleSliderChange = (event, newValue) => {
    setSliderValue(newValue); // Slider qiymatlari o'zgarganda funksiyani amalga oshiramiz
  };

  return (
    <div className="w-[100%] h-[500px] bg-gray-100 py-8 mt-4">
      <div className="flex mt-2">
        <div className="leftsection mx-16 mt-16">
          <p className="font-sans">WELCOME TO GREENSHOP</p>
          <h1 className="text-7xl w-[70%] font-bold">
            {pages[currentPage].title} <span className="text-green-600">{pages[currentPage].title2}</span>
          </h1>
          <p className="w-[60%] text-sm mt-4">{pages[currentPage].description}</p>
          <button className="text-white bg-green-600 px-5 py-2 rounded-lg mt-4">
            {pages[currentPage].button}
          </button>
        </div>
        <div className="rightsection flex items-baseline relative">
          <img
            src={littleimg}
            alt=""
            className="w-[50%] absolute left-[-100px] top-44"
          />
          <img src={bigimg} alt="" className="w-[80%]" />
        </div>
      </div>
      <div className="flex justify-center mt-8">
        {pages.map((_, index) => (
          <button
            key={index}
            className={`mx-2 w-4 h-4 rounded-full ${
              currentPage === index ? 'bg-green-600' : 'bg-gray-400 w-3 h-3'
            }`}
            onClick={() => handlePageChange(index)}
          />
        ))}
      </div>
      <div className="hero2 w-[100%] h-[240%] container-sm gap-4 px-4 mt-24 mx-auto flex justify-between">
        <div className="categories w-[18%] py-4 px-8 rounded bg-gray-100">
          <h3 className="font-semibold">Categories</h3>
          <div className="plants mt-4">
            <ul className="flex flex-col gap-4 ml-2">
              {categories.map((category, index) => (
                <li
                  key={index}
                  className={`flex justify-between cursor-pointer ${
                    activeCategory === index ? 'text-green-600' : ''
                  }`}
                  onClick={() => handleCategoryClick(index)}
                >
                  {category.name} <span>({category.count})</span>
                </li>
              ))}
            </ul>
             <div className="range-slider mt-8 mx-4">
              <h2 className='font-bold ml-[-20px]'>Prise Range</h2>
        {/* Range slider */}
        <Slider
  value={sliderValue}
  onChange={handleSliderChange}
  valueLabelDisplay="auto"
  aria-labelledby="range-slider"
  min={39}
  max={1230}
  className='slider-color'
/>

        <p>Price: <span className='text-green-600 font-bold'>$39-$1230</span></p>
      </div>
          </div>
          <div className="plants mt-4">
            <h3 className="font-semibold ml-[-2]">Size</h3>
            <ul className="flex flex-col gap-4 ml-2 mt-4">
              {sizes.map((size, index) => (
                <li
                  key={index}
                  className={`flex justify-between cursor-pointer ${
                    activeSize === index ? 'text-green-600' : ''
                  }`}
                  onClick={() => handleSizeClick(index)}
                >
                  {size.name} <span>({size.count})</span>
                </li>
              ))}
            </ul>
          </div>
          <img src={saleimg} alt="Sale" className="mt-4 w-full" />
        </div>
        <Hero2 />
      </div>
        <Hero3/>
        <Hero4/>

     
    </div>  
  );
};

export default Homepage;
