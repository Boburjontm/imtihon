import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const products = [
  { name: 'Beach Spider Lily', price: '$129.00', image: '/img/littleflower.svg' },
  { name: 'Blushing Bromeliad', price: '$139.00', image: '/img/threeflow.svg' },
  { name: 'Aluminum Plant', price: '$179.00', image: '/img/twoflow.svg' },
  { name: "Bird's Nest Fern", price: '$99.00', image: '/img/gulhovoda.svg' },
  { name: 'Chinese Evergreen', price: '$39.00', image: '/img/blackflow.svg' },
  { name: 'Chinese Evergreen', price: '$39.00', image: '/img/whiteflow.svg' },
  { name: 'Chinese Evergreen', price: '$39.00', image: '/img/gulhovoda.svg' },
  { name: 'Chinese Evergreen', price: '$39.00', image: '/img/gulyashil.svg' },
  { name: 'Chinese Evergreen', price: '$39.00', image: '/img/threeflow.svg' },
  { name: 'Chinese Evergreen', price: '$39.00', image: '/img/twoflow.svg' },
];

const ProductCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? products.length - 4 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === products.length - 4;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="relative max-w-7xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-green-600">Related Products</h2>
      <div className="flex justify-center items-center">
        <button onClick={prevSlide} className="text-3xl text-gray-500 hover:text-gray-700">
          <FaChevronLeft />
        </button>
        <div className="w-full overflow-hidden ">
          <div
            className="flex transition-transform duration-700 "
            style={{ transform: `translateX(-${currentIndex * 5}%)` }} 
          >
            {products.map((product, index) => (
              <div key={index} className="w-1/4 px-2"> 
                <div className="bg-white rounded-lg shadow-md p-4 text-center cursor-pointer">
                  <img src={product.image} alt={product.name} className="w-full h-auto mb-4" />
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <p className="text-green-600">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button onClick={nextSlide} className="text-3xl text-gray-500 hover:text-gray-700">
          <FaChevronRight />
        </button>
      </div>
      <div className="flex justify-center mt-4">
        {products.slice(0, products.length - 3).map((_, slideIndex) => (
          <button
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`h-2 w-2 mx-1 rounded-full ${
              slideIndex === currentIndex ? 'bg-green-600' : 'bg-gray-300'
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ProductCarousel;
