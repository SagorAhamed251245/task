"use client";
import React, { useState } from "react";
import AllPeople from "./AllPeople";

const AllChats = () => {
  let allPeoples = [1, 2, 3];
  const [chatType, SetChatType] = useState("private");

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
            <AllPeople />
          </div>
        ))}
      </section>
    </div>
  );
};

export default AllChats;
