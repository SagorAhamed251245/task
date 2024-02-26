"use client";
import Link from "next/link";
import FilterContext from "@/app/contex/FilterContext";
import React, { useState, useEffect, useContext } from "react";
const LeftNav = ({ img, name, id }) => {
  const { mobileChat, setMobileChat } = useContext(FilterContext);
  return (
    <>
      <Link
        href={"/chats"}
        className={"md:hidden   flex justify-start items-center"}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.57 5.92969L3.5 11.9997L9.57 18.0697M20.5 11.9997H3.67"
            stroke="black"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </Link>
      <div className="img-div">
        <img src={img} alt="" />
        <div></div>
      </div>
      <div>
        <p className="font-bold">
          {name} <span className="text-xs">{id}</span>
        </p>
        <p>online</p>
      </div>
    </>
  );
};

export default LeftNav;
