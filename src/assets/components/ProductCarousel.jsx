import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const products = [
  {
    name: "Beach Spider Lily",
    price: "$129.00",
    image: "beach_spider_lily.jpg",
  },
  {
    name: "Blushing Bromeliad",
    price: "$139.00",
    image: "blushing_bromeliad.jpg",
  },
  { name: "Aluminum Plant", price: "$179.00", image: "aluminum_plant.jpg" },
  { name: "Bird's Nest Fern", price: "$99.00", image: "birds_nest_fern.jpg" },
  {
    name: "Chinese Evergreen",
    price: "$39.00",
    image: "chinese_evergreen.jpg",
  },
];

const ProductCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-green-600">
        You may be interested in
      </h2>
      <Slider {...settings}>
        {products.map((product, index) => (
          <div key={index} className="px-2">
            <div className="bg-white rounded-lg shadow-md p-4 text-center">
              <img
                src={`/images/${product.image}`}
                alt={product.name}
                className="w-full h-48 object-cover mb-4"
              />
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-green-600">{product.price}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductCarousel;
