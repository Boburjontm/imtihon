import React, { useState } from "react";

const ProductTabs = () => {
  const [activeTab, setActiveTab] = useState("description");

  const renderContent = () => {
    switch (activeTab) {
      case "description":
        return (
          <div>
            <p className="mb-4">
              The ceramic cylinder planters come with a wooden stand to help
              elevate your plants off the ground. The ceramic cylinder planters
              come with a wooden stand to help elevate your plants off the
              ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Nam fringilla augue nec est tristique auctor. Donec non est at
              libero vulputate rutrum. Morbi ornare lectus quis justo gravida
              semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit
              id nulla.
            </p>
            <p className="mb-4">
              Pellentesque aliquet, sem eget laoreet ultricies, ipsum metus
              feugiat sem, quis fermentum turpis eros eget velit. Donec ac
              tempus ante. Fusce ultricies massa massa. Fusce aliquam, purus
              eget sagittis vulputate, sapien libero hendrerit est, sed commodo
              augue nisi non neque. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Sed tempor, lorem et placerat vestibulum, metus
              nisi posuere nisl, in accumsan elit odio quis mi. Cras neque
              metus, convallis quis erat et, blandit et, luctus a nunc. Etiam
              gravida vehicula tellus, in imperdiet ligula euismod eget. The
              ceramic cylinder planters come with a wooden stand to help elevate
              your plants off the ground.
            </p>
            <div className="mb-4">
              <h2 className="text-xl font-semibold mb-2">Living Room:</h2>
              <p>
                The ceramic cylinder planters come with a wooden stand to help
                elevate your plants off the ground. The ceramic cylinder
                planters come with a wooden stand to help elevate your plants
                off the ground. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit.
              </p>
            </div>
            <div className="mb-4">
              <h2 className="text-xl font-semibold mb-2">Dining Room:</h2>
              <p>
                The benefits of houseplants are endless. In addition to cleaning
                the air of harmful toxins, they can help to improve your mood,
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2">Office:</h2>
              <p>
                The ceramic cylinder planters come with a wooden stand to help
                elevate your plants off the ground. The ceramic cylinder
                planters come with a wooden stand to help elevate your plants
                off the ground. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit.
              </p>
            </div>
          </div>
        );
      case "reviews":
        return (
          <div>
            <h2 className="text-xl font-semibold mb-2">Reviews (19)</h2>
            <p className="mb-4">
              Review 1: This product is amazing! Highly recommend it.
            </p>
            <p className="mb-4">
              Review 2: Very stylish and modern. Fits perfectly in my living
              room.
            </p>
            <p className="mb-4">
              Review 3: Excellent quality and quick delivery.
            </p>
            <p className="mb-4">Review 4: Beautiful design and very sturdy.</p>
            <p className="mb-4">
              Review 5: Exactly what I was looking for! Great purchase.
            </p>
            {/* Add more reviews as needed */}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <div className="flex flex-col lg:flex-row lg:space-x-4 border-b-2 border-gray-200 mb-4">
        <button
          className={`text-xl font-semibold pb-2 ${
            activeTab === "description"
              ? "border-b-2 border-green-500 text-green-500"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("description")}
        >
          Product Description
        </button>
        <button
          className={`text-xl font-semibold pb-2 ${
            activeTab === "reviews"
              ? "border-b-2 border-green-500 text-green-500"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("reviews")}
        >
          Reviews (19)
        </button>
      </div>
      {renderContent()}
    </div>
  );
};

export default ProductTabs;
