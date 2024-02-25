import React from "react";
import "../chats.scss";
import "../../../globalScss/variables.module.scss";
import MabileChat from "./mabileChat";
const page = () => {
  return (
    <div className="chats-Container">
      <MabileChat />
    </div>
  );
};

export default page;
