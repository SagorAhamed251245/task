"use client";
import React, { useState } from "react";
import MessagesNav from "./MessagesNav";
import UserMessage from "./UserMessage";
import Mymessages from "./Mymessages";

const MessagesContainer = () => {
  const [isActions, setIsActions] = useState({ isActions: false, _id: null });
  console.log("isActions :>> ", isActions);
  const [chatMessages, setChatMessages] = useState([
    {
      text: "Hello! How can I help you today? Hello! How can I help you today?Hello! How can I help you today?Hello! How can I help you today?  ",
      isUser: true,
    },
    { text: "Hello! How can I help you today?  ", isUser: true },
    { text: "Hello! How can I help you today? ", isUser: true },
    { text: "Hello! How can I help you today? ", isUser: true },
    { text: "Hello! How can I help you today?", isUser: false },
    { text: "Hello! How can I help you today?", isUser: true },
    { text: "Hello! How can I help you today?", isUser: true },
  ]);
  return (
    <section className=" messages-container scrollbar-hidden">
      <MessagesNav />
      <div className="messages-box">
        <div
          className={`absolute top-0   opacity-0
           w-full h-full bg-black ${
             isActions.isActions === true ? "z-10 " : "z-0 "
           }`}
          onClick={() => setIsActions({ isActions: false, _id: null })}
        ></div>
        <div>
          <UserMessage setIsActions={setIsActions} isActions={isActions} id={1}>
            This Is a demo 1 This Is a demo 1This Is a demo 1This Is a demo
            1This Is a demo 1This Is a demo 1This Is a demo 1
          </UserMessage>
          <UserMessage setIsActions={setIsActions} isActions={isActions} id={2}>
            This Is a demo 2
          </UserMessage>
          <UserMessage
            userPhoto={true}
            setIsActions={setIsActions}
            isActions={isActions}
            id={3}
          >
            This Is a demo 3
          </UserMessage>
          <Mymessages setIsActions={setIsActions} isActions={isActions} id={10}>
            this is umy Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Sapiente eveniet labore minima temporibus tempora iusto ab
            voluptatibus molestias in molestiae consectetur illo exercitationem
            maiores, vel illum quidem? Alias, perspiciatis quia.
          </Mymessages>
          <Mymessages setIsActions={setIsActions} isActions={isActions} id={12}>
            this is umy Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Sapiente eveniet labore minima temporibus tempora iusto ab
            voluptatibus molestias in molestiae consectetur illo exercitationem
            maiores, vel illum quidem? Alias, perspiciatis quia.
          </Mymessages>
        </div>
      </div>
    </section>
  );
};

export default MessagesContainer;
