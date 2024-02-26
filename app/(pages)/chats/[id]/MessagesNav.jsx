import React from "react";
import LeftNav from "./LeftNav";
import RightNav from "./RightNav";

const MessagesNav = ({ setIsActions, isActions, id, name, img }) => {
  return (
    <section className="messages-nav">
      {/* left side */}
      <div className="left-nav">
        <LeftNav id={id} img={img} name={name} />
      </div>
      {/* right side */}
      <div className="right-nav">
        <RightNav setIsActions={setIsActions} isActions={isActions} id={0} />
      </div>
    </section>
  );
};

export default MessagesNav;
