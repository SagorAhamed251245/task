"use client";
import Link from "next/link";
import FilterContext from "@/app/contex/FilterContext";
import React, { useState, useEffect, useContext } from "react";
const LeftNav = () => {
  const { mobileChat, setMobileChat } = useContext(FilterContext);
  return (
    <>
      <Link
        href={"/chats"}
        className={"md:hidden   flex justify-start items-center"}
      >
        <img src="/icons/arroew.png" alt="" className={"w-full "} />
      </Link>
      <div className="img-div">
        <img src="/icons/user.jpg" alt="" />
        <div></div>
      </div>
      <div>
        <p className="font-bold">
          FC <span className="text-xs">#4453s4</span>
        </p>
        <p>online</p>
      </div>
    </>
  );
};

export default LeftNav;
