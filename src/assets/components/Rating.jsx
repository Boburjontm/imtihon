import React, { useState } from "react";
import { StarIcon } from "@heroicons/react/solid";

const BasicRating = () => {
  const [value, setValue] = useState(2);

  return (
    <div className="max-w-md mx-auto">
      <div className="flex flex-col items-center">
        <h2 className="text-lg font-medium mb-2">Controlled</h2>
        <div className="flex items-center">
          {[...Array(5)].map((_, index) => (
            <StarIcon
              key={index}
              className={`h-6 w-6 ${
                index < value ? "text-yellow-500" : "text-gray-300"
              }`}
              onClick={() => setValue(index + 1)}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center mt-4">
        <h2 className="text-lg font-medium mb-2">Read only</h2>
        <div className="flex items-center">
          {[...Array(5)].map((_, index) => (
            <StarIcon
              key={index}
              className={`h-6 w-6 ${
                index < value ? "text-yellow-500" : "text-gray-300"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center mt-4">
        <h2 className="text-lg font-medium mb-2">Disabled</h2>
        <div className="flex items-center">
          {[...Array(5)].map((_, index) => (
            <StarIcon
              key={index}
              className={`h-6 w-6 ${
                index < value ? "text-yellow-500" : "text-gray-300"
              }`}
              onClick={() => setValue(index + 1)}
              disabled
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center mt-4">
        <h2 className="text-lg font-medium mb-2">No rating given</h2>
        <div className="flex items-center">
          {[...Array(5)].map((_, index) => (
            <StarIcon
              key={index}
              className={`h-6 w-6 ${
                index < value ? "text-yellow-500" : "text-gray-300"
              }`}
              onClick={() => setValue(index + 1)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BasicRating;
