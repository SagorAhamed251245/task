import React from "react";
import LeftNav from "./LeftNav";
import RightNav from "./RightNav";

const MessagesNav = () => {
  return (
    <section className="messages-nav">
      {/* left side */}
      <div className="left-nav">
        <LeftNav />
      </div>
      {/* right side */}
      <div className="right-nav">
        <RightNav />
      </div>
    </section>
  );
};

export default MessagesNav;
