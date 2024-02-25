import React from "react";
import LeftNav from "./LeftNav";
import RightNav from "./RightNav";

const MessagesNav = ({ setIsActions, isActions, id }) => {
  return (
    <section className="messages-nav">
      {/* left side */}
      <div className="left-nav">
        <LeftNav />
      </div>
      {/* right side */}
      <div className="right-nav">
        <RightNav setIsActions={setIsActions} isActions={isActions} id={0} />
      </div>
    </section>
  );
};

export default MessagesNav;
