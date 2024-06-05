import React from "react";
import guln1 from "../../../public/img/whiteflow.svg";
import guln2 from "../../../public/img/twoflow.svg";
import guln3 from "../../../public/img/threeflow.svg";
import guln4 from "../../../public/img/blackflow.svg";
import { GrFormNextLink } from "react-icons/gr";

const Hero4 = () => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="flex justify-center mt-12 text-2xl font-bold">
        Our Blog Posts
      </h1>
      <p className="flex justify-center text-gray-600 mt-4 text-center">
        We are an online plant shop offering a wide range of cheap and trendy
        plants.
      </p>
      <div className="cards flex flex-wrap justify-center lg:justify-between mt-8 gap-4">
        <div className="card cursor-pointer max-w-xs mx-4 lg:mx-0">
          <img
            src={guln1}
            alt="Cactus & Succulent Care Tips"
            className="w-full"
          />
          <p className="text-green-600 mt-2">
            September 12 | Read in 6 minutes
          </p>
          <h2 className="text-lg font-bold">
            Cactus & Succulent <br />
            Care Tips
          </h2>
          <p className="text-gray-500">
            Cacti are succulents are easy care plants for any home or patio.
          </p>
          <button className="flex items-center gap-2 mt-2 text-green-600">
            Read more <GrFormNextLink />
          </button>
        </div>
        <div className="card cursor-pointer max-w-xs mx-4 lg:mx-0">
          <img
            src={guln4}
            alt="Top 10 Succulents for Your Home"
            className="w-full"
          />
          <p className="text-green-600 mt-2">
            September 13 | Read in 2 minutes
          </p>
          <h2 className="text-lg font-bold">
            Top 10 Succulents for <br />
            Your Home
          </h2>
          <p className="text-gray-500">
            Best in hanging baskets. Prefers medium to high light.
          </p>
          <button className="flex items-center gap-2 mt-2 text-green-600">
            Read more <GrFormNextLink />
          </button>
        </div>
        <div className="card cursor-pointer max-w-xs mx-4 lg:mx-0">
          <img
            src={guln3}
            alt="Cactus & Succulent Care Tips"
            className="w-full"
          />
          <p className="text-green-600 mt-2">
            September 15 | Read in 2 minutes
          </p>
          <h2 className="text-lg font-bold">
            Cactus & Succulent <br />
            Care Tips
          </h2>
          <p className="text-gray-500">
            Cacti are succulents are easy care plants for any home or patio.
          </p>
          <button className="flex items-center gap-2 mt-2 text-green-600">
            Read more <GrFormNextLink />
          </button>
        </div>
        <div className="card cursor-pointer max-w-xs mx-4 lg:mx-0">
          <img
            src={guln2}
            alt="Best Houseplants Room by Room"
            className="w-full"
          />
          <p className="text-green-600 mt-2">
            September 12 | Read in 6 minutes
          </p>
          <h2 className="text-lg font-bold">
            Best Houseplants <br />
            Room by Room
          </h2>
          <p className="text-gray-500">
            The benefits of houseplants are endless. In addition to..
          </p>
          <button className="flex items-center gap-2 mt-2 text-green-600">
            Read more <GrFormNextLink />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero4;
