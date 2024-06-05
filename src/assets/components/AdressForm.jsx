import React, { useState } from "react";

const AddressForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    country: "",
    city: "",
    street: "",
    state: "",
    zip: "",
    email: "",
    phone: "",
  });

  const [selectedMenu, setSelectedMenu] = useState("Address");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const renderContent = () => {
    switch (selectedMenu) {
      case "Account Details":
        return <div>Account Details Content</div>;
      case "Address":
        return (
          <div>
            <h2 className="text-xl font-semibold mb-2">Billing Address</h2>
            <p className="mb-4">
              The following addresses will be used on the checkout page by
              default.
            </p>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="form-group">
                  <label className="block mb-1">First Name *</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="block mb-1">Last Name *</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="block mb-1">Country / Region *</label>
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                  >
                    <option value="">Select a country / region</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    {/* Add more options as needed */}
                  </select>
                </div>
                <div className="form-group">
                  <label className="block mb-1">Town / City *</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="block mb-1">Street Address *</label>
                  <input
                    type="text"
                    name="street"
                    value={formData.street}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="block mb-1">State *</label>
                  <select
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                  >
                    <option value="">Select a state</option>
                    <option value="CA">California</option>
                    <option value="NY">New York</option>
                    {/* Add more options as needed */}
                  </select>
                </div>
                <div className="form-group">
                  <label className="block mb-1">Zip *</label>
                  <input
                    type="text"
                    name="zip"
                    value={formData.zip}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="block mb-1">Email address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="block mb-1">Phone Number *</label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                  />
                </div>
              </div>
              <button
                type="submit"
                className="mt-4 px-4 py-2 bg-green-600 text-white rounded"
              >
                Save Address
              </button>
            </form>
            <h3 className="text-lg font-semibold mt-8">Shipping Address</h3>
            <p className="mb-4">
              You have not set up this type of address yet.
            </p>
            <div className="flex items-center">
              <label className="mr-2">
                <input type="checkbox" className="mr-1" />
                Same as billing address
              </label>
              <button className="ml-4 px-4 py-2 bg-green-600 text-white rounded">
                Add
              </button>
            </div>
          </div>
        );
      case "Orders":
        return <div>Orders Content</div>;
      case "Wishlist":
        return <div>Wishlist Content</div>;
      case "Reports":
        return <div>Reports Content</div>;
      case "Downloads":
        return <div>Downloads Content</div>;
      case "Support":
        return <div>Support Content</div>;
      case "Logout":
        return <div>Logout Content</div>;
      default:
        return <div>Select a menu item</div>;
    }
  };

  return (
    <div className="flex">
      <aside className="w-1/4 p-4">
        <ul className="list-none p-0">
          {[
            "Account Details",
            "Address",
            "Orders",
            "Wishlist",
            "Reports",
            "Downloads",
            "Support",
            "Logout",
          ].map((item) => (
            <li
              key={item}
              className={`my-2 cursor-pointer ${
                selectedMenu === item ? "font-bold" : ""
              } ${item === "Logout" ? "text-red-600" : ""}`}
              onClick={() => setSelectedMenu(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      </aside>
      <div className="flex-grow p-4">{renderContent()}</div>
    </div>
  );
};

export default AddressForm;
