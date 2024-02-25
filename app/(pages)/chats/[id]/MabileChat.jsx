"use client";

import React, { useContext } from "react";

import FilterContext from "@/app/contex/FilterContext";
import MessagesContainer from "./MessagesContainer";
import GroupSmsContainer from "./GroupSmsContainer";

const MabileChat = () => {
  const { chatType } = useContext(FilterContext);
  return (
    <>
      {chatType === "private" ? <MessagesContainer /> : <GroupSmsContainer />}
    </>
  );
};

export default MabileChat;
