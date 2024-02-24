"use client";
import React, { useState, useEffect } from "react";
import MessagesNav from "./MessagesNav";

import Mymessages from "./Mymessages";
import TimeLength from "./TimeLength";
import SendMessages from "./SendMessages";
import GroupSms from "./GroupSms";

const GroupSmsContainer = () => {
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
    <section className=" messages-container scrollbar-hidden">
      <MessagesNav setIsActions={setIsActions} isActions={isActions} id={0} />
      <div className="messages-box">
        <div
          className={`absolute top-0   opacity-0
       w-full h-full bg-black ${
         isActions.isActions === true ? "z-10 " : "z-0 "
       }`}
          onClick={() => setIsActions({ isActions: false, _id: null })}
        ></div>
        <div>
          <GroupSms setIsActions={setIsActions} isActions={isActions} id={1}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda,
            nisi! Vel saepe eveniet tenetur nihil placeat quibusdam iure modi
            pariatur odit ex provident harum quos corrupti expedita eum, neque
            repellat?
          </GroupSms>
          <TimeLength time={"11-9-2024, Monday"} />
          <GroupSms setIsActions={setIsActions} isActions={isActions} id={2}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum rerum
            natus cumque excepturi. Harum, rerum! Rem saepe adipisci obcaecati
            nam voluptas. Earum, vero dolorum quo quia nemo, voluptates dolores
            nam illum repellat laudantium nulla? Alias facere dolore eum vero
            corporis labore? Tempore beatae ea eaque commodi doloremque
            doloribus, nisi libero?
          </GroupSms>
          <GroupSms
            userPhoto={true}
            setIsActions={setIsActions}
            isActions={isActions}
            id={3}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
            labore!
          </GroupSms>
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

export default GroupSmsContainer;
