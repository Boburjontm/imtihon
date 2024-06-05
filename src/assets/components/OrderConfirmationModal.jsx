import React from "react";
import { HiOutlineMailOpen } from "react-icons/hi";

const OrderConfirmationModal = ({ isOpen, onClose, order }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg w-11/12 sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            X
          </button>
        </div>
        <div className="text-center">
          <HiOutlineMailOpen className="mx-auto text-green-600 text-6xl mb-4" />
          <h2 className="text-xl font-bold mb-4">
            Your order has been received
          </h2>
          <div className="text-left mb-4">
            <p>
              <strong>Order Number:</strong> {order.number}
            </p>
            <p>
              <strong>Date:</strong> {order.date}
            </p>
            <p>
              <strong>Total:</strong> ${order.total.toFixed(2)}
            </p>
            <p>
              <strong>Payment Method:</strong> {order.paymentMethod}
            </p>
          </div>
          <div className="text-left mb-4">
            <h3 className="font-bold">Order Details</h3>
            <table className="w-full">
              <tbody>
                {order.items.map((item) => (
                  <tr key={item.sku} className="border-b">
                    <td className="p-2">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-12 h-12 rounded mr-2"
                      />
                    </td>
                    <td className="p-2">
                      <p>{item.name}</p>
                      <p className="text-sm text-gray-500">SKU: {item.sku}</p>
                    </td>
                    <td className="p-2">x{item.quantity}</td>
                    <td className="p-2">
                      ${(item.price * item.quantity).toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex justify-between mb-2">
            <span>Shipping</span>
            <span>${order.shipping.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-2 font-bold">
            <span>Total</span>
            <span>${order.total.toFixed(2)}</span>
          </div>
          <button
            onClick={onClose}
            className="bg-green-500 text-white px-4 py-2 rounded mt-4"
          >
            Track your order
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmationModal;
