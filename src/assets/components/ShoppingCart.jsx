import React, { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Barberton Daisy",
      price: 119.0,
      quantity: 2,
      sku: "1995751877966",
      image: "../../../public/img/bigflower.svg",
    },
    {
      id: 2,
      name: "Blushing Bromeliad",
      price: 139.0,
      quantity: 6,
      sku: "1995751875065",
      image: "../../../public/img/gulhovoda.svg",
    },
    {
      id: 3,
      name: "Aluminum Plant",
      price: 179.0,
      quantity: 9,
      sku: "1995751877786",
      image: "../../../public/img/threeflow.svg",
    },
  ]);

  const handleQuantityChange = (id, amount) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + amount) }
          : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const shipping = 16.0;
  const total = subtotal + shipping;

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col lg:flex-row mb-6">
        <div className="w-full lg:w-2/3 pr-4">
          <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="py-2">Products</th>
                  <th className="py-2">Price</th>
                  <th className="py-2">Quantity</th>
                  <th className="py-2">Total</th>
                  <th className="py-2"></th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id} className="border-b">
                    <td className="py-2 flex items-center">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-12 h-12 rounded mr-4"
                      />
                      <div>
                        <p>{item.name}</p>
                        <p className="text-sm text-gray-500">SKU: {item.sku}</p>
                      </div>
                    </td>
                    <td className="py-2">${item.price.toFixed(2)}</td>
                    <td className="py-2">
                      <div className="flex items-center">
                        <button
                          className="bg-gray-300 text-gray-700 px-2 py-1 rounded"
                          onClick={() => handleQuantityChange(item.id, -1)}
                        >
                          -
                        </button>
                        <span className="mx-2">{item.quantity}</span>
                        <button
                          className="bg-gray-300 text-gray-700 px-2 py-1 rounded"
                          onClick={() => handleQuantityChange(item.id, 1)}
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="py-2 text-green-500">
                      ${(item.price * item.quantity).toFixed(2)}
                    </td>
                    <td className="py-2">
                      <button
                        className="text-black-500 hover:text-red-700"
                        onClick={() => handleRemoveItem(item.id)}
                      >
                        <AiOutlineDelete />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="w-full lg:w-1/3 pl-4">
          <h2 className="text-2xl font-bold mb-4">Cart Totals</h2>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="mb-4">
              <label htmlFor="coupon" className="block text-gray-700">
                Coupon Apply
              </label>
              <div className="flex mt-2">
                <input
                  type="text"
                  id="coupon"
                  className="flex-grow border rounded-l px-3 py-2"
                  placeholder="Enter coupon code here..."
                />
                <button className="bg-green-500 text-white px-4 py-2 rounded-r">
                  Apply
                </button>
              </div>
            </div>
            <div className="border-t pt-4">
              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Coupon Discount</span>
                <span className="text-red-500">(-) 00.00</span>
              </div>
              <div className="flex justify-between mb-4">
                <span>Shipping</span>
                <span>${shipping.toFixed(2)}</span>
              </div>
              <div className="border-t pt-4">
                <div className="flex justify-between mb-4">
                  <span>Total</span>
                  <span className="text-green-500">${total.toFixed(2)}</span>
                </div>
                <NavLink to="/checkout">
                  <button className="bg-green-500 text-white w-full py-2 rounded mb-2">
                    Proceed To Checkout
                  </button>
                </NavLink>
                <NavLink
                  to="/home"
                  className=" text-green-700 w-full py-2 rounded flex justify-center"
                >
                  Continue Shopping
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
