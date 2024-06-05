import { Rating } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaRegHeart,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const ProductPage = () => {
  const [selectedImage, setSelectedImage] = useState(
    "../../../public/img/blackflow.svg"
  ); // Replace with the actual main image path

  const images = [
    "../../../public/img/blackflow.svg",
    "../../../public/img/whiteflow.svg",
    "../../../public/img/blackflow.svg",
    "../../../public/img/whiteflow.svg",
  ]; // Replace with the actual image paths

  const navigate = useNavigate();

  const handleBuyNow = () => {
    navigate("/shopp");
  };

  return (
    <div className="flex flex-col lg:flex-row p-5 lg:p-10 bg-gray-50">
      <div className="flex-1 lg:mr-5 mb-5 lg:mb-0">
        <img
          src={selectedImage}
          alt="Selected"
          className="w-full h-auto rounded-lg shadow-md"
        />
        <div className="flex justify-between mt-4">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Thumbnail ${index}`}
              className="w-1/5 h-auto cursor-pointer rounded-lg shadow-sm transition-transform transform hover:scale-105"
              onClick={() => setSelectedImage(image)}
            />
          ))}
        </div>
      </div>
      <div className="flex-1">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">
          Barberton Daisy
        </h1>
        <div className="flex justify-between mb-4">
          <p className="text-2xl font-semibold text-green-600">$119.00</p>
          <div className="flex items-center gap-2">
            <Rating value={4} readOnly />
            <p className="text-gray-600">19 Customer Reviews</p>
          </div>
        </div>
        <p className="text-gray-700 mb-6 lg:w-[60%]">
          The ceramic cylinder planters come with a wooden stand to help elevate
          your plants off the ground. The ceramic cylinder planters come with a
          wooden stand to help elevate your plants off the ground.
        </p>
        <p className="font-bold mb-2">Size</p>
        <div className="mb-6 flex gap-4">
          {["S", "M", "L", "XL"].map((size) => (
            <span
              key={size}
              className="py-1 px-4 cursor-pointer flex shadow border-green-600 justify-center items-center bg-white rounded-full text-center border hover:bg-gray-100 hover:border-green-600 transition duration-200"
            >
              {size}
            </span>
          ))}
        </div>
        <div className="flex items-center mb-6 gap-4">
          <input
            type="number"
            defaultValue={1}
            min={1}
            className="w-20 border border-gray-300 rounded px-2 py-1 text-green-600"
          />
          <button
            className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-green-600 transition duration-200"
            onClick={handleBuyNow}
          >
            BUY NOW
          </button>
          <a
            href="/shop"
            className="bg-white text-green-600 px-4 py-2 border border-green-600 rounded-lg shadow-lg hover:bg-green-500 hover:text-white transition duration-200"
          >
            ADD TO CART
          </a>
          <FaRegHeart className="text-green-600 cursor-pointer" />
        </div>
        <p className="text-gray-600 mb-2">
          <span className="text-gray-400">SKU:</span> 1995751877966
        </p>
        <p className="text-gray-600 mb-2">
          <span className="text-gray-400">Categories:</span> Potted Plants
        </p>
        <p className="text-gray-600 mb-4">
          <span className="text-gray-400">Tags:</span> Home, Garden, Plants
        </p>
        <div className="font-bold flex items-center gap-4 text-lg">
          Share this product:
          <a href="https://facebook.com">
            <FaFacebookF className="text-blue-600 hover:text-blue-800 transition duration-200" />
          </a>
          <a href="https://twitter.com">
            <FaTwitter className="text-blue-400 hover:text-blue-600 transition duration-200" />
          </a>
          <a href="https://linkedin.com">
            <FaLinkedinIn className="text-blue-700 hover:text-blue-900 transition duration-200" />
          </a>
          <a href="mailto:example@example.com">
            <HiOutlineMail className="text-gray-600 hover:text-gray-800 transition duration-200" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
