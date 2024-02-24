import React from "react";

import "./chats.scss";
import PeopleContainer from "@/app/components/Chat/Peoples/PeopleContainer";
import MessagesContainer from "@/app/components/Chat/Messages/MessagesContainer";

const ChatsPage = () => {
  return (
    <div className="chats-Container">
      <PeopleContainer />
      <MessagesContainer />
    </div>
  );
};

export default ChatsPage;
