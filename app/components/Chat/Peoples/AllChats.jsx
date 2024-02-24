"use client";
import React, { useState, useContext } from "react";
import AllPeople from "./AllPeople";
import FilterContext from "@/app/contex/FilterContext";
import AllGroups from "./AllGroups";

const AllChats = () => {
  let allPeoples = [1, 2, 3];

  const { chatType, SetChatType } = useContext(FilterContext);

  return (
    <div className="all-chats">
      <div className="chat-type">
        <p
          onClick={() => SetChatType("private")}
          className={` ${chatType === "private" && "active-sms-type"} `}
        >
          Private Chat
        </p>
        <p
          onClick={() => SetChatType("group")}
          className={` ${chatType === "group" && "active-sms-type"} `}
        >
          Group Chat
        </p>
      </div>
      <section>
        {allPeoples?.map((people, index) => (
          <div key={index}>
            {chatType === "private" ? <AllPeople /> : <AllGroups />}
          </div>
        ))}
      </section>
    </div>
  );
};

export default AllChats;
