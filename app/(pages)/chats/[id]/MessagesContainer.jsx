"use client";
import React, { useState } from "react";
import MessagesNav from "./MessagesNav";
import UserMessage from "./UserMessage";
import Mymessages from "./Mymessages";
import TimeLength from "./TimeLength";
import SendMessages from "./SendMessages";

const MessagesContainer = () => {
  const [isActions, setIsActions] = useState({ isActions: false, _id: null });
  const [chatMessages, setChatMessages] = useState([
    { text: null, _id: null, time: null },
  ]);
  const randomId = Math.random(0, 1000);
  const d = new Date();
  const formattedTime = d.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const sendSms = () => {
    if (document.getElementById("send")) {
      const text = document.getElementById("send").value;
      setChatMessages((prevMessages) => {
        return [
          ...prevMessages,
          { text: text, _id: randomId, time: formattedTime },
        ];
      });
      document.getElementById("send").value = "";
    }
  };

  return (
    <section className={` messages-container scrollbar-hidden  `}>
      <MessagesNav
        setIsActions={setIsActions}
        isActions={isActions}
        id={"#4453s4"}
        img={"/icons/user.jpg"}
        name={"FC"}
      />
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
          <TimeLength time={"11-9-2024, Monday"} />
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
          <TimeLength time={"Yesterday"} />
          <Mymessages
            setIsActions={setIsActions}
            isActions={isActions}
            id={10}
            time={"11: 30pm"}
          >
            this is umy Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Sapiente eveniet labore minima temporibus tempora iusto ab
            voluptatibus molestias in molestiae consectetur illo exercitationem
            maiores, vel illum quidem? Alias, perspiciatis quia.
          </Mymessages>
          <TimeLength time={"Today"} />
          <Mymessages
            setIsActions={setIsActions}
            isActions={isActions}
            id={12}
            time={"11: 30pm"}
          >
            this is umy Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Sapiente eveniet labore minima temporibus tempora iusto ab
            voluptatibus molestias in molestiae consectetur illo exercitationem
            maiores, vel illum quidem? Alias, perspiciatis quia.
          </Mymessages>
          {chatMessages.map(
            (chat, index) =>
              chat.text && (
                <Mymessages
                  key={index}
                  setIsActions={setIsActions}
                  isActions={isActions}
                  id={chat?._id}
                  time={chat?.time}
                >
                  {chat?.text}
                </Mymessages>
              )
          )}
        </div>
      </div>
      <SendMessages sendSms={sendSms} />
    </section>
  );
};

export default MessagesContainer;
