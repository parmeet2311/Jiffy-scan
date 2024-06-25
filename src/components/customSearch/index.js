import React, { useState } from "react";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { IconButton } from "@mui/material";
import { IoMdClose } from "react-icons/io";
export const SearchBarDesktop = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="flex items-center w-full  h-[40px] bg-white rounded-full border-[2px] border-[#DADCE0] px-[24px] py-[4px] max-w-lg mx-auto search-bar">
      <div className="flex min-w-fit items-center pl-1 gap-3">
        <Image
          src="/assets/logo/Lightning.png" 
          alt="Icon"
          width={20}
          height={20}
        />
        <IoIosArrowDown />
      </div>
      <div className="w-[1px] h-[24px] bg-gray-300 mx-4 hidden lg:block"></div>{" "}
      <input
        type="text"
        className="h-full w-full flex-grow px-2 py-2 text-gray-700 focus:outline-none"
        placeholder="Search an userOp"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};
export const SearchBarMobile = () => {
  const [show, setShow] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <IconButton onClick={() => setShow(true)}>
        <CiSearch className="text-2xl" />
      </IconButton>
      <div className={`popup-search relative  ${show ? "show" : ""}`}>
        <div className="h-full container relative">
          <div className="absolute right-5 top-2">
            <IconButton onClick={() => setShow(false)}>
              <IoMdClose className="text-lg text-black " />
            </IconButton>
          </div>
          <div className="flex items-center h-full">
            <div className="flex w-full items-center  bg-white rounded-full border-[2px] border-[#DADCE0] px-[24px] py-[4px] mx-auto search-bar">
              <div className="flex min-w-fit items-center pl-1 gap-3">
                <Image
                  src="/assets/logo/Lightning.png" // replace with the actual path to your icon
                  alt="Icon"
                  width={20}
                  height={20}
                />
                <IoIosArrowDown />
              </div>
              <div className="w-[1px] h-[24px] bg-gray-300 mx-4"></div>{" "}
              <input
                type="text"
                className="h-full w-full flex-grow px-2 py-2 text-gray-700 focus:outline-none"
                placeholder="Search an userOp"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
      <div
        onClick={() => setShow(false)}
        className={`search-screen ${show ? "search-screen-show" : ""}`}
      >
        &nbsp;
      </div>
    </div>
  );
};

export const Search3 = () => {
  return (
    <div className="flex w-full justify-center items-center  ">
      <div className="relative w-full">
        <svg
          className="absolute left-5 top-[50%] translate-y-[-50%] h-5 w-5 text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M12.9 14.32a8 8 0 111.414-1.414l4.387 4.386a1 1 0 01-1.415 1.415l-4.386-4.387zM8 14A6 6 0 108 2a6 6 0 000 12z"
            clipRule="evenodd"
          />
        </svg>
        <input
          type="text"
          className="bg-[#F1F5F9] w-full pl-12 pr-4 py-3 w-80  rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Search Bounties, Profiles, and more..."
        />
      </div>
    </div>
  );
};
