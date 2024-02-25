"use client";
import { useState, useEffect } from "react";
import FilterContext from "../contex/FilterContext";

const FilterProvider = ({ children }) => {
  const [chatType, SetChatType] = useState("private");

  const [mobileChat, setMobileChat] = useState(false);
  const value = {
    chatType,
    SetChatType,
    mobileChat,
    setMobileChat,
  };
  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  );
};

export default FilterProvider;
