"use client";
import { useState } from "react";
import FilterContext from "../contex/FilterContext";

const FilterProvider = ({ children }) => {
  const [chatType, SetChatType] = useState("private");
  const value = { chatType, SetChatType };
  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  );
};

export default FilterProvider;
