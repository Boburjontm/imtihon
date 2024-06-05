import React from "react";
import kaktus1 from "../../../public/img/kaktus1.svg";
import kaktus2 from "../../../public/img/kaktus2.svg";
import kaktus3 from "../../../public/img/kaktus3.svg";
import Logo from "../../../public/img/Logo (1).svg";
import Plastcard from "../../../public/img/plastcard.svg";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full mt-24">
      <div className="footerpageone flex flex-wrap justify-between w-full px-4 lg:px-16">
        <img src={kaktus1} alt="" className="cursor-pointer mb-4 lg:mb-0" />
        <img src={kaktus2} alt="" className="cursor-pointer mb-4 lg:mb-0" />
        <img src={kaktus3} alt="" className="cursor-pointer mb-4 lg:mb-0" />
        <div className="emailsection w-full lg:w-1/3">
          <p className="font-bold text-xl text-center lg:text-left">
            Would you like to join newsletters?
          </p>
          <div className="email mt-4 flex flex-wrap justify-center lg:justify-start">
            <input
              type="email"
              placeholder="Enter your email address ..."
              className="w-full lg:w-2/3 border-[1px] py-2 px-4 rounded-l-lg mb-2 lg:mb-0"
            />
            <button className="px-6 py-2 bg-green-600 text-white rounded-r-lg w-full lg:w-auto">
              Join
            </button>
          </div>
          <p className="mt-4 text-gray-400 text-center lg:text-left">
            We usually post offers and challenges in the newsletter. We’re your
            online houseplant destination. We offer a wide range of houseplants
            and accessories shipped directly from our (green)house to yours!
          </p>
        </div>
      </div>
      <div className="footerpagetwo w-full mt-8 bg-green-200">
        <ul className="flex flex-wrap justify-between items-center mx-4 lg:mx-16 p-8">
          <li className="flex items-center cursor-pointer mb-4 lg:mb-0">
            <a href="/home">
              <img src={Logo} alt="Logo" />
            </a>
          </li>
          <li className="flex items-center gap-2 cursor-pointer text-center mb-4 lg:mb-0 w-full lg:w-auto">
            <CiLocationOn className="text-green-600 text-xl" />
            70 West Buckingham Ave. <br />
            Farmingdale, NY 11735
          </li>
          <li className="flex items-center gap-2 cursor-pointer text-center mb-4 lg:mb-0 w-full lg:w-auto">
            <MdOutlineEmail className="text-green-500 text-xl" />
            contact@greenshop.com
          </li>
          <li className="flex items-center gap-2 cursor-pointer text-center w-full lg:w-auto">
            <FiPhoneCall className="text-green-500" />
            +99890109371
          </li>
        </ul>
      </div>
      <div className="footerthree flex flex-wrap justify-between mx-4 lg:mx-16 bg-gray-100 px-8 py-4">
        <ul className="flex flex-col gap-2 mb-4 lg:mb-0 w-full lg:w-auto">
          <li className="text-lg font-bold">My Account</li>
          <li className="hover:text-green-600">
            <a href="#">My Account</a>
          </li>
          <li className="hover:text-green-600">
            <a href="#">Our stores</a>
          </li>
          <li className="hover:text-green-600">
            <a href="#">Contact us</a>
          </li>
          <li className="hover:text-green-600">
            <a href="#">Career</a>
          </li>
          <li className="hover:text-green-600">
            <a href="#">Special</a>
          </li>
        </ul>
        <ul className="flex flex-col gap-2 mb-4 lg:mb-0 w-full lg:w-auto">
          <li className="text-lg font-bold">Help & Guide</li>
          <li className="hover:text-green-600">
            <a href="#">Help & Guide</a>
          </li>
          <li className="hover:text-green-600">
            <a href="#">How to buy</a>
          </li>
          <li className="hover:text-green-600">
            <a href="#">Shipping & Delivery</a>
          </li>
          <li className="hover:text-green-600">
            <a href="#">Product Policy</a>
          </li>
          <li className="hover:text-green-600">
            <a href="#">How to Return</a>
          </li>
        </ul>
        <ul className="flex flex-col gap-2 mb-4 lg:mb-0 w-full lg:w-auto">
          <li className="text-lg font-bold">Categories</li>
          <li className="hover:text-green-600">
            <a href="#">House Plants</a>
          </li>
          <li className="hover:text-green-600">
            <a href="#">Potter Plants</a>
          </li>
          <li className="hover:text-green-600">
            <a href="#">Seeds</a>
          </li>
          <li className="hover:text-green-600">
            <a href="#">Small Plants</a>
          </li>
          <li className="hover:text-green-600">
            <a href="#">Accessories</a>
          </li>
        </ul>
        <ul className="flex flex-col gap-2 w-full lg:w-auto">
          <li className="text-lg font-bold">Social Media</li>
          <li className="flex gap-2 mb-4 lg:mb-6">
            <FaFacebookF className="p-1 cursor-pointer rounded-lg border-green-600 border-[1px] text-green-600 text-2xl" />
            <FaInstagram className="p-1 cursor-pointer rounded-lg border-green-600 border-[1px] text-green-600 text-2xl" />
            <FaTwitter className="p-1 cursor-pointer rounded-lg border-green-600 border-[1px] text-green-600 text-2xl" />
            <FaLinkedinIn className="p-1 cursor-pointer rounded-lg border-green-600 border-[1px] text-green-600 text-2xl" />
            <FaYoutube className="p-1 cursor-pointer rounded-lg border-green-600 border-[1px] text-green-600 text-2xl" />
          </li>
          <li className="text-lg font-bold">
            <a href="#">We accept</a>
          </li>
          <li className="hover:text-green-600 cursor-pointer">
            <img src={Plastcard} alt="Plastcard" />
          </li>
        </ul>
      </div>
      <p className="flex justify-center items-center py-4">
        © 2024 GreenShop. Bahodirov Bobur.
      </p>
    </div>
  );
};

export default Footer;
