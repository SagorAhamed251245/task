"use client";
import { useContext } from "react";
import "./nav.scss";

import FilterContext from "@/app/contex/FilterContext";
const Topnavbar = () => {
  const { openNav, setOpenNav } = useContext(FilterContext);

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
          <img src="/icons/Group 26257.svg" alt="" />
        </div>
      </div>
      {/* mobile  */}
      <div className={"mobile-left"} onClick={() => setOpenNav(!openNav)}>
        <div className={"hamberger"}>
          <img src="/icons/Group 1171282471.png" alt="" />
        </div>
      </div>
      <div className={"mobile-center"}>
        <div className={"notify"}>
          <img src="/icons/logo.svg" alt="" />
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
