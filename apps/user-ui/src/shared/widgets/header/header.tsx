"use client";

import Link from "next/link";
import { Search, CircleUserRound, HeartIcon, ShoppingCart } from "lucide-react";
import React from "react";
import HeaderBottom from "./header-bottom";

const Header = () => {
  return (
    <div className="w-full sticky top-0 left-0 bg-white shadow-sm z-50">
      <div className="w-[80%] py-4 m-auto flex items-center justify-between">
        <div>
          <Link href={"/"}>
            <span className="text-3xl font-[500]">Chhota दुकान</span>
          </Link>
        </div>

        <div className="w-[42%] relative flex items-center">
          <input
            type="text"
            placeholder="Search for products"
            className="w-full px-4 py-2 font-Poppins border rounded-md outline-none h-[52px]"
          />
          <div className="w-[60px] h-[45px] cursor-pointer flex items-center justify-center absolute right-0">
            <Search className="w-6 h-6" />
          </div>
        </div>

        <div className="flex items-center gap-8">
          <Link href={"/login"} className="relative flex flex-col items-center">
            <div className="w-[50px] h-[50px] flex flex-col items-center justify-center">
              <CircleUserRound className="w-8 h-8" />
              <span className="font-medium">Profile</span>
            </div>
          </Link>

          <div className="h-8 w-px bg-gray-300"></div>

          <Link
            href={"/wishlist"}
            className="relative flex flex-col items-center"
          >
            <div className="w-[50px] h-[50px] flex flex-col items-center justify-center">
              <HeartIcon className="w-8 h-8" />
              <span className="font-medium">Wishlist</span>
            </div>
            <div className="w-6 h-6 border-2 border-white bg-red-500 rounded-full flex items-center justify-center absolute top-[-8px] right-[-8px]">
              <span className="text-white font-medium text-xs">0</span>
            </div>
          </Link>

          <div className="h-8 w-px bg-gray-300"></div>

          <Link href={"/cart"} className="relative flex flex-col items-center">
            <div className="w-[50px] h-[50px] flex flex-col items-center justify-center">
              <ShoppingCart className="w-8 h-8" />
              <span className="font-medium">Cart</span>
            </div>
            <div className="w-6 h-6 border-2 border-white bg-red-500 rounded-full flex items-center justify-center absolute top-[-8px] right-[-8px]">
              <span className="text-white font-medium text-xs">0</span>
            </div>
          </Link>
        </div>
      </div>

      <div className="border-b border-gray-300"></div>
      <HeaderBottom />
    </div>
  );
};

export default Header;
