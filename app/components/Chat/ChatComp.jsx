"use client";
import { useContext } from "react";
import MessagesContainer from "./Messages/MessagesContainer";
import GroupSmsContainer from "./Messages/GroupSmsContainer";
import PeopleContainer from "./Peoples/PeopleContainer";
import FilterContext from "@/app/contex/FilterContext";

const ChatComp = () => {
  const { chatType } = useContext(FilterContext);
  return (
    <>
      <PeopleContainer />
      {chatType === "private" ? <MessagesContainer /> : <GroupSmsContainer />}
    </>
  );
};

export default ChatComp;
