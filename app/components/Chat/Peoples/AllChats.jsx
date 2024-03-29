"use client";
import React, { useState, useContext } from "react";
import AllPeople from "./AllPeople";
import FilterContext from "@/app/contex/FilterContext";
import AllGroups from "./AllGroups";
import CreatGroup from "./CreatGroup";

const AllChats = () => {
  let allPeoples = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5];

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
      {/* creat group */}
      {chatType === "group" && <CreatGroup />}

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
