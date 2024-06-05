import React from "react";
import gul1 from "../../../public/img/gulyashil.svg";
import gul2 from "../../../public/img/gulhovoda.svg";
import { GrLinkNext } from "react-icons/gr";

const Hero3 = () => {
  return (
    <div className="container mx-auto flex flex-col lg:flex-row justify-between px-4 lg:px-8 mt-24 gap-4">
      <div className="leftsection flex flex-col lg:flex-row w-full lg:w-[50%] border-[1px] p-4">
        <img
          src={gul1}
          alt="Summer cactus & succulents"
          className="w-full lg:w-1/2 mb-4 lg:mb-0"
        />
        <div className="paragraphs flex flex-col items-center lg:items-end gap-4 justify-center lg:w-1/2">
          <h3 className="text-center lg:text-end font-bold">
            Summer cactus <br />& succulents
          </h3>
          <p className="text-center lg:text-end">
            We are an online plant shop offering a wide range of cheap and
            trendy plants.
          </p>
          <button className="flex items-center gap-2 bg-green-600 text-white py-2 px-4 rounded-lg">
            Find more
            <GrLinkNext />
          </button>
        </div>
      </div>
      <div className="rightsection flex flex-col lg:flex-row w-full lg:w-[50%] border-[1px] p-4">
        <img
          src={gul2}
          alt="Styling Trends & much more"
          className="w-full lg:w-1/2 mb-4 lg:mb-0"
        />
        <div className="paragraphs flex flex-col items-center lg:items-end gap-4 justify-center lg:w-1/2">
          <h3 className="text-center lg:text-end font-bold">
            Styling Trends <br />& much more
          </h3>
          <p className="text-center lg:text-end">
            We are an online plant shop offering a wide range of cheap and
            trendy plants.
          </p>
          <button className="flex items-center gap-2 bg-green-600 text-white py-2 px-4 rounded-lg">
            Find more
            <GrLinkNext />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero3;
