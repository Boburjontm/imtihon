import React, { useState, useEffect } from "react";
import bigimg from "../../../public/img/bigflower.svg";
import littleimg from "../../../public/img/littleflower.svg";
import Hero2 from "../components/Hero2";
import saleimg from "../../../public/img/Sale.svg";
import Slider from "@mui/material/Slider"; // Range slider komponentini import qilamiz
import Hero3 from "../components/Hero3";
import Hero4 from "../components/Hero4";
import Footer from "../components/Footer";

const Homepage = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeSize, setActiveSize] = useState(null);
  const [sliderValue, setSliderValue] = useState([0, 100]); // Range slider qiymatlari va standart qiymatlar

  const pages = [
    {
      title: "LET’S MAKE A BETTER ",
      title2: "PLANET",
      description:
        "We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!",
      button: "SHOP NOW",
    },
    {
      title: "DISCOVER OUR NEW ",
      title2: "COLLECTION",
      description:
        "Explore our latest collection of plants, curated just for you. Find the perfect addition to your green space.",
      button: "EXPLORE NOW",
    },
    {
      title: "JOIN OUR PLANT ",
      title2: "COMMUNITY",
      description:
        "Connect with other plant enthusiasts, share tips, and grow your own urban jungle together.",
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
    <div className="w-full bg-gray-100 py-8 mt-4">
      <div className="flex flex-col lg:flex-row mt-2">
        <div className="leftsection mx-8 lg:mx-16 mt-8 lg:mt-16 text-center lg:text-left">
          <p className="font-sans">WELCOME TO GREENSHOP</p>
          <h1 className="text-3xl lg:text-7xl font-bold">
            {pages[currentPage].title}{" "}
            <span className="text-green-600">{pages[currentPage].title2}</span>
          </h1>
          <p className="w-full lg:w-3/5 text-sm mt-4 mx-auto lg:mx-0">
            {pages[currentPage].description}
          </p>
          <button className="text-white bg-green-600 px-5 py-2 rounded-lg mt-4">
            {pages[currentPage].button}
          </button>
        </div>
        <div className="rightsection flex items-center justify-center relative mt-8 lg:mt-0">
          <img
            src={littleimg}
            alt=""
            className="w-1/3 lg:w-1/4 absolute left-[-50px] lg:left-[-100px] top-32 lg:top-44"
          />
          <img src={bigimg} alt="" className="w-2/3 lg:w-4/5" />
        </div>
      </div>
      <div className="flex justify-center mt-8">
        {pages.map((_, index) => (
          <button
            key={index}
            className={`mx-2 w-4 h-4 rounded-full ${
              currentPage === index ? "bg-green-600" : "bg-gray-400"
            }`}
            onClick={() => handlePageChange(index)}
          />
        ))}
      </div>
      <div className="hero2 w-full container mx-auto flex flex-col lg:flex-row justify-between gap-4 px-4 mt-24">
        <div className="categories w-full lg:w-1/4 py-4 px-4 lg:px-8 rounded bg-gray-100">
          <h3 className="font-semibold">Categories</h3>
          <div className="plants mt-4">
            <ul className="flex flex-col gap-2 ml-2">
              {categories.map((category, index) => (
                <li
                  key={index}
                  className={`flex justify-between cursor-pointer ${
                    activeCategory === index
                      ? "text-green-600"
                      : "hover:text-green-600"
                  }`}
                  onClick={() => handleCategoryClick(index)}
                >
                  {category.name} <span>({category.count})</span>
                </li>
              ))}
            </ul>
            <div className="range-slider mt-8 mx-2 lg:mx-4">
              <h2 className="font-bold">Price Range</h2>
              <Slider
                value={sliderValue}
                onChange={handleSliderChange}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                min={39}
                max={1230}
                className="slider-color"
              />
              <p className="mt-2">
                Price:{" "}
                <span className="text-green-600 font-bold">$39-$1230</span>
              </p>
              <button className="px-6 py-2 text-white bg-green-600 rounded-lg mt-2">Filter</button>
            </div>
          </div>
          <div className="plants mt-4">
            <h3 className="font-semibold">Size</h3>
            <ul className="flex flex-col gap-2 ml-2 mt-4">
              {sizes.map((size, index) => (
                <li
                  key={index}
                  className={`flex justify-between cursor-pointer ${
                    activeSize === index
                      ? "text-green-600"
                      : "hover:text-green-600"
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
        <div className="w-full lg:w-3/4">
          <Hero2 />
        </div>
      </div>
      <Hero3 />
      <Hero4 />
      <Footer />
    </div>
  );
};

export default Homepage;
