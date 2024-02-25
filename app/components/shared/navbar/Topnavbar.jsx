import React from "react";
import "./nav.scss";
import SearchPeople from "../../Chat/Peoples/SearchPeople";
const Topnavbar = () => {
  return (
    <section className="top-nav">
      <div className={"top-left"}>
        <p>Chat</p>
      </div>
      <div className={"top-right"}>
        <div className={"notify"}>
          <img src="/icons/notify.png" alt="" />
        </div>
        <div className={"userPro"}>
          <img src="/icons/userprofile.png" alt="" />
        </div>
      </div>
      {/* mobile  */}
      <div className={"mobile-left"}>
        <div className={"hamberger"}>
          <img src="/icons/Group 1171282471.png" alt="" />
        </div>
      </div>
      <div className={"mobile-center"}>
        <div className={"notify"}>
          <img src="/icons/Frame (1).png" alt="" />
        </div>
      </div>
      <div className={"mobile-right"}>
        <div className={"userPro"}>
          <img src="/icons/Mask group.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Topnavbar;
