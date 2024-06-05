import React, { useState } from "react";
import OrderConfirmationModal from "./OrderConfirmationModal"; // Import the modal component
import PayPal from "../../../public/img/plastcard.svg";
import gul1 from "../../../public/img/blackflow.svg";
import gul2 from "../../../public/img/whiteflow.svg";
import gul3 from "../../../public/img/twoflow.svg";

const CheckoutAndAccountDetails = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    username: "",
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
    country: "",
    city: "",
    streetAddress: "",
    apartment: "",
    state: "",
    zip: "",
    phoneNumber: "",
    differentAddress: false,
    orderNotes: "",
    paymentMethod: "paypal",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
    console.log("Form submitted:", formData);
  };

  const order = {
    number: "1958687",
    date: new Date().toLocaleDateString(),
    total: 2683 + 16,
    paymentMethod: formData.paymentMethod,
    items: [
      {
        name: "Barberton Daisy",
        price: 238,
        quantity: 1,
        sku: "1995751877966",
        image: gul1,
      },
      {
        name: "Blushing Bromeliad",
        price: 834,
        quantity: 1,
        sku: "1995751875065",
        image: gul2,
      },
      {
        name: "Aluminum Plant",
        price: 1611,
        quantity: 1,
        sku: "1995751877786",
        image: gul3,
      },
    ],
    shipping: 16,
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
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
          <div>
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
          <div>
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
          <div>
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
          <div>
            <label className="block mb-1">Username *</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
        </div>
        <h3 className="text-lg font-semibold mt-4">Password Change</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-1">Current password</label>
            <input
              type="password"
              name="currentPassword"
              value={formData.currentPassword}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="block mb-1">New password</label>
            <input
              type="password"
              name="newPassword"
              value={formData.newPassword}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="block mb-1">Confirm new password</label>
            <input
              type="password"
              name="confirmNewPassword"
              value={formData.confirmNewPassword}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
        </div>

        <h2 className="text-xl font-semibold mb-4 mt-8">Billing Address</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="country"
              className="text-sm font-medium text-gray-700"
            >
              Country / Region *
            </label>
            <select
              id="country"
              name="country"
              required
              className="mt-1 w-full shadow-sm sm:text-sm border-gray-300 border-[1px] px-8 py-2 rounded-md"
              value={formData.country}
              onChange={handleChange}
            >
              <option value="">Select a country / region</option>
              <option value="USA">USA</option>
              <option value="Canada">Canada</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <label htmlFor="city" className="text-sm font-medium text-gray-700">
              Town / City *
            </label>
            <input
              type="text"
              name="city"
              id="city"
              required
              className="mt-1 w-full shadow-sm sm:text-sm border-gray-300 border-[1px] px-8 py-2 rounded-md"
              value={formData.city}
              onChange={handleChange}
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="streetAddress"
            className="text-sm font-medium text-gray-700"
          >
            Street Address *
          </label>
          <input
            type="text"
            name="streetAddress"
            id="streetAddress"
            required
            className="mt-1 w-full shadow-sm sm:text-sm border-gray-300 border-[1px] px-8 py-2 rounded-md"
            placeholder="House number and street name"
            value={formData.streetAddress}
            onChange={handleChange}
          />
          <input
            type="text"
            name="apartment"
            id="apartment"
            className="mt-2 w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            placeholder="Apartment, suite, unit, etc. (optional)"
            value={formData.apartment}
            onChange={handleChange}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="state"
              className="text-sm font-medium text-gray-700"
            >
              State *
            </label>
            <select
              id="state"
              name="state"
              required
              className="mt-1 w-full shadow-sm sm:text-sm border-gray-300 border-[1px] px-8 py-2 rounded-md"
              value={formData.state}
              onChange={handleChange}
            >
              <option value="">Select a state</option>
              <option value="California">California</option>
              <option value="New York">New York</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <label htmlFor="zip" className="text-sm font-medium text-gray-700">
              Zip *
            </label>
            <input
              type="text"
              name="zip"
              id="zip"
              required
              className="mt-1 w-full shadow-sm sm:text-sm border-gray-300 border-[1px] px-8 py-2 rounded-md"
              value={formData.zip}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-700"
            >
              Email Address *
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="mt-1 w-full shadow-sm sm:text-sm border-gray-300 border-[1px] px-8 py-2 rounded-md"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              htmlFor="phoneNumber"
              className="text-sm font-medium text-gray-700"
            >
              Phone Number *
            </label>
            <input
              type="tel"
              name="phoneNumber"
              id="phoneNumber"
              required
              className="mt-1 w-full shadow-sm sm:text-sm border-gray-300 border-[1px] px-8 py-2 rounded-md"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="flex items-center mt-4">
          <input
            id="differentAddress"
            name="differentAddress"
            type="checkbox"
            className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
            checked={formData.differentAddress}
            onChange={handleChange}
          />
          <label
            htmlFor="differentAddress"
            className="ml-2 text-sm text-gray-900"
          >
            Ship to a different address?
          </label>
        </div>

        <div className="mt-4">
          <label
            htmlFor="orderNotes"
            className="text-sm font-medium text-gray-700"
          >
            Order Notes (optional)
          </label>
          <textarea
            id="orderNotes"
            name="orderNotes"
            rows="3"
            className="mt-1 w-full shadow-sm sm:text-sm border-gray-300 rounded-md border"
            value={formData.orderNotes}
            onChange={handleChange}
          ></textarea>
        </div>

        <h2 className="text-xl font-semibold mb-4 mt-8">Your Order</h2>
        <div className="mt-4 bg-gray-50 p-4 rounded-lg shadow-lg">
          <ul className="divide-y divide-gray-200">
            <li className="py-4 flex justify-between">
              <img src={gul1} alt="" className="w-[10%]" />
              <div>Barberton Daisy</div>
              <div>$238.00</div>
            </li>
            <li className="py-4 flex justify-between">
              <img src={gul2} alt="" className="w-[10%]" />
              <div>Blushing Bromeliad</div>
              <div>$834.00</div>
            </li>
            <li className="py-4 flex justify-between">
              <img src={gul3} alt="" className="w-[10%]" />
              <div>Aluminum Plant</div>
              <div>$1,611.00</div>
            </li>
            <li className="py-4 flex justify-between font-semibold">
              <div>Subtotal</div>
              <div>$2,683.00</div>
            </li>
            <li className="py-4 flex justify-between font-semibold">
              <div>Shipping</div>
              <div>$16.00</div>
            </li>
            <li className="py-4 flex justify-between font-semibold">
              <div>Total</div>
              <div>$2,699.00</div>
            </li>
          </ul>
        </div>

        <h2 className="text-xl font-semibold mb-4 mt-8">Payment Method</h2>
        <div className="mt-4 space-y-4">
          <div className="flex items-center">
            <input
              id="paypal"
              name="paymentMethod"
              type="radio"
              className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
              value="paypal"
              checked={formData.paymentMethod === "paypal"}
              onChange={handleChange}
            />
            <img src={PayPal} alt="" className="ml-2" />
          </div>
          <div className="flex items-center">
            <input
              id="bankTransfer"
              name="paymentMethod"
              type="radio"
              className="focus:ring-green-500 h-4 w-4 text-green-600 border-gray-300"
              value="bankTransfer"
              checked={formData.paymentMethod === "bankTransfer"}
              onChange={handleChange}
            />
            <label
              htmlFor="bankTransfer"
              className="ml-3 block text-sm font-medium text-gray-700"
            >
              Direct Bank Transfer
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="cashOnDelivery"
              name="paymentMethod"
              type="radio"
              className="focus:ring-green-500 h-4 w-4 text-green-600 border-gray-300"
              value="cashOnDelivery"
              checked={formData.paymentMethod === "cashOnDelivery"}
              onChange={handleChange}
            />
            <label
              htmlFor="cashOnDelivery"
              className="ml-3 block text-sm font-medium text-gray-700"
            >
              Cash on Delivery
            </label>
          </div>
        </div>

        <div className="mt-8">
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Place Order
          </button>
        </div>
      </form>

      <OrderConfirmationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        order={order}
      />
    </div>
  );
};

export default CheckoutAndAccountDetails;

