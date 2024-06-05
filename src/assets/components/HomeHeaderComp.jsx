import React, { useState } from "react";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Logo from "../../../public/img/Logo (1).svg";
import { FiSearch, FiShoppingCart } from "react-icons/fi";
import { IoExit } from "react-icons/io5";
import Homepage from "../pages/Homepage";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import Hero2 from "./Hero2";
import Footer from "./Footer";
import AddressForm from "./AdressForm";
import AccountDetails from "./AccauntDetails";
import PlantCare from "../pages/PlantCare";
import Pages from "../pages/Pages";
import ShoppingCart from "./ShoppingCart";
import ProductPage from "./ProductPage";
import ProductTabs from "./ProductTabs";
import ProductCarousel from "../../../ProductCarousel";
import Checkout from "./Checkout";

// Import products data
import { data } from "../../data/data.js";

const HomeHeaderComp = () => {
  const [isSearchModalOpen, setSearchModalOpen] = useState(false);
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  const toggleSearchModal = () => {
    setSearchModalOpen(!isSearchModalOpen);
  };

  const toggleLoginModal = () => {
    setLoginModalOpen(!isLoginModalOpen);
  };

  const switchModalContent = () => {
    setIsLogin(!isLogin);
  };

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
    handleSearch(e.target.value);
  };

  const handleSearch = (query) => {
    const results = data.filter(
      (data) =>
        data.common_name.toLowerCase().includes(query.toLowerCase()) ||
        data.scientific_name.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(results);
  };

  const handleCartClick = () => {
    console.log("Cart clicked");
  };

  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <div className="container mx-auto">
      <Router>
        <div className="relative">
          <div
            className={`container mx-auto p-4 flex flex-col md:flex-row justify-between items-center border-b-[1px] ${
              isSearchModalOpen || isLoginModalOpen ? "blur-sm" : ""
            }`}
          >
            <a href="/home">
              <img src={Logo} alt="sitelogo" className="h-10" />
            </a>
            <ul className="flex flex-col md:flex-row gap-4 mt-4 md:mt-0">
              {["Home", "Shop", "Plant Care", "Blogs"].map((item) => (
                <li key={item}>
                  <NavLink
                    to={`/${item.toLowerCase().replace(" ", "-")}`}
                    className={({ isActive }) =>
                      `cursor-pointer ${
                        isActive
                          ? "text-black font-semibold border-b-[2px] pb-1 md:pb-6 border-green-700"
                          : "text-gray-600 "
                      }`
                    }
                  >
                    {item}
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className="searchsection flex items-center gap-4 mt-4 md:mt-0">
              <FiSearch
                onClick={toggleSearchModal}
                className="cursor-pointer"
              />
              <NavLink to="shoppp">
                <div className="relative">
                  <FiShoppingCart
                    className="text-green-700 cursor-pointer"
                    onClick={handleCartClick}
                  />
                  {cartCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
                      {cartCount}
                    </span>
                  )}
                </div>
              </NavLink>
              <button
                className="flex items-center px-4 py-2 bg-green-700 text-white rounded-2xl gap-2"
                onClick={toggleLoginModal}
              >
                <IoExit />
                Login
              </button>
            </div>
          </div>

          {isSearchModalOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
              <div className="bg-white w-full md:w-1/2 lg:w-1/3 h-3/4 mt-10 p-8 rounded-lg shadow-lg relative transform transition-transform duration-300 ease-in-out translate-y-0">
                <button
                  onClick={toggleSearchModal}
                  className="absolute top-2 right-2 text-2xl"
                >
                  &times;
                </button>
                <h2 className="text-2xl mb-4">Search</h2>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Search for items..."
                  value={searchQuery}
                  onChange={handleSearchInputChange}
                />
                <div className="mt-4 overflow-y-auto">
                  {searchResults.map((item) => (
                    <div key={item.id} className="card mb-4 p-4 border rounded">
                      <h3 className="text-xl font-semibold">
                        {item.common_name}
                      </h3>
                      <p>{item.scientific_name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
          {isLoginModalOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
              <div className="bg-white w-full md:w-1/2 lg:w-1/3 p-8 rounded-lg shadow-lg relative transform transition-transform duration-300 ease-in-out translate-y-0">
                <button
                  onClick={toggleLoginModal}
                  className="absolute top-2 right-2 text-2xl"
                >
                  &times;
                </button>
                {isLogin ? (
                  <>
                    <h2 className="text-2xl mb-4">Login</h2>
                    <input
                      type="text"
                      className="w-full p-2 mb-4 border border-gray-300 rounded"
                      placeholder="Username"
                    />
                    <input
                      type="password"
                      className="w-full p-2 mb-4 border border-gray-300 rounded"
                      placeholder="Password"
                    />
                    <NavLink to="/login">
                      <button className="w-full bg-green-700 text-white py-2 rounded mb-4">
                        Login
                      </button>
                    </NavLink>

                    <p className="flex justify-center items-center">
                      Or login with
                    </p>
                    <div className="flex flex-col gap-4 justify-between items-center mt-4">
                      <button className="flex items-center gap-2 bg-white-500 w-[80%] justify-center text-black border py-2 px-4 rounded">
                        <FaGoogle className="text-red-500" />
                        Login with Google
                      </button>
                      <button className="flex items-center gap-2 bg-white-600 border w-[80%] justify-center text-black py-2 px-4 rounded">
                        <FaFacebook className="text-blue-500" />
                        Login with Facebook
                      </button>
                    </div>
                    <p className="mt-4 text-center">
                      Don't have an account?{" "}
                      <span
                        onClick={switchModalContent}
                        className="text-green-700 cursor-pointer"
                      >
                        Register
                      </span>
                    </p>
                  </>
                ) : (
                  <>
                    <h2 className="text-2xl mb-4">Register</h2>
                    <input
                      type="text"
                      className="w-full p-2 mb-4 border border-gray-300 rounded"
                      placeholder="Username"
                    />
                    <input
                      type="email"
                      className="w-full p-2 mb-4 border border-gray-300 rounded"
                      placeholder="Email"
                    />
                    <input
                      type="password"
                      className="w-full p-2 mb-4 border border-gray-300 rounded"
                      placeholder="Password"
                    />
                    <button className="w-full bg-green-700 text-white py-2 rounded mb-4">
                      Register
                    </button>
                    <div className="flex justify-between items-center">
                      <button className="flex items-center gap-2 bg-white-500 text-black py-2 px-4 rounded border">
                        <FaGoogle className="text-red-500" />
                        Register with Google
                      </button>
                      <button className="flex items-center gap-2 bg-white-600 text-black py-2 px-4 rounded border">
                        <FaFacebook className="text-blue-500" />
                        Register with Facebook
                      </button>
                    </div>
                    <p className="mt-4 text-center">
                      Already have an account?{" "}
                      <span
                        onClick={switchModalContent}
                        className="text-green-700 cursor-pointer"
                      >
                        Login
                      </span>
                    </p>
                  </>
                )}
              </div>
            </div>
          )}

          <Routes>
            <Route path="/home" element={<Homepage />} />
            <Route
              path="/shop"
              element={
                <>
                  <Hero2 onAddToCart={handleAddToCart} />
                  <Footer />
                </>
              }
            />
            <Route path="/plant-care" element={<PlantCare />} />
            <Route path="/blogs" element={<Pages />} />
            <Route path="*" element={<Navigate to="/home" />} />
            <Route path="/login2" element={<AccountDetails />} />
            <Route path="/login" element={<AddressForm />} />
            <Route
              path="/checkout"
              element={
                <>
                  <Checkout />
                  <Footer />
                </>
              }
            />
            <Route
              path="/shopp"
              element={
                <>
                  <ShoppingCart />
                  <ProductCarousel />
                  <Footer />
                </>
              }
            />
            <Route
              path="/shoppp"
              element={
                <>
                  <ProductPage />
                  <ProductTabs />
                  <ProductCarousel />
                  <Footer />
                </>
              }
            />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default HomeHeaderComp;
