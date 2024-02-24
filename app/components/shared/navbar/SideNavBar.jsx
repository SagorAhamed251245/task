import React from "react";
import Image from "next/image";

import { SideNavData } from "./../../../data/navdata";
import "./nav.scss";

import NavLink from "./NavLink";
const SideNavBar = () => {
  return (
    <div className="navContainer">
      <div className="navTitle">
        <div>
          <p>Biye</p>
          <Image
            src={"/icons/Group.png"}
            width={1920}
            height={1080}
            alt=""
            className="w-10"
          />
          <p>Korun</p>
        </div>

        <p>
          <Image
            src={"/icons/rightarrow.png"}
            width={1920}
            height={1080}
            alt=""
            className="w-5"
          />
          Meet & Get Married{" "}
          <Image
            src={"/icons/leftarrow.png"}
            width={1920}
            height={1080}
            alt=""
            className="w-5"
          />
        </p>
      </div>
      <ul className="ul">
        {SideNavData?.map((data, index) => (
          <NavLink key={index} data={data} />
        ))}
      </ul>
    </div>
  );
};

export default SideNavBar;
