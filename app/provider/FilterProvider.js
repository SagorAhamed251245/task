"use client";
import { useState, useEffect } from "react";
import FilterContext from "../contex/FilterContext";

const FilterProvider = ({ children }) => {
  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }
  const [chatType, SetChatType] = useState("private");
  const [deviceSize, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  console.log("windowDimensions :>> ", deviceSize);
  const [mobileChat, setMobileChat] = useState(false);
  const value = {
    chatType,
    SetChatType,
    mobileChat,
    setMobileChat,
    deviceSize,
  };
  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  );
};

export default FilterProvider;
