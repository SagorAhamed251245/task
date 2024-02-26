"use client";
import Link from "next/link";
import FilterContext from "@/app/contex/FilterContext";
import React, { useState, useEffect, useContext } from "react";
const LeftNav = ({ img, name, id }) => {
  return (
    <>
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
