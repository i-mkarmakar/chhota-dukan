"use client";

import { navItems } from "apps/user-ui/src/configs/constants";
import { AlignLeft, ChevronDown } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const HeaderBottom = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="w-full relative">
      <div className="w-[80%] relative m-auto flex items-center justify-between py-0">
        <div
          className="w-[260px] cursor-pointer flex items-center justify-between px-5 h-[60px] bg-[#000]"
          onClick={() => setShow(!show)}
        >
          <div className="flex items-center gap-2">
            <AlignLeft color="white" />
            <span className="text-white font-medium">All Categories</span>
          </div>
          <ChevronDown color="white" />
        </div>

        {show && (
          <div className="absolute left-0 top-[50px] w-[260px] h-[400px] bg-[#f5f5f5]"></div>
        )}

        <div className="flex items-center">
          {navItems.map((i: NavItemsTypes, index: number) => (
            <Link key={index} href={i.href} className="px-6 font-medium">
              {i.title}
            </Link>
          ))}
        </div>
      </div>
      <div className="border-b border-gray-300"></div>
    </div>
  );
};

export default HeaderBottom;
