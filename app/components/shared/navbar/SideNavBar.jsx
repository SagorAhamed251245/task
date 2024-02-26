"use client";
import { useContext } from "react";
import Image from "next/image";
import Link from "next/link";

import { SideNavData } from "./../../../data/navdata";
import "./nav.scss";

import NavLink from "./NavLink";
import FilterContext from "@/app/contex/FilterContext";

const SideNavBar = () => {
  const { openNav, setOpenNav } = useContext(FilterContext);
  return (
    <div
      className={` navContainer scrollbar-hidden ${
        openNav ? "fixed " : "hidden lg:block"
      } `}
    >
      <div className="navTitle ">
        <div>
          <Image
            src={"/icons/titlelogo.svg"}
            width={1920}
            height={1080}
            alt=""
            className="w-36"
          />
        </div>
      </div>
      <ul className="ul">
        {SideNavData?.map((data, index) => (
          <NavLink key={index} data={data} />
        ))}
      </ul>
      <div className={"logout"}>
        <Link href={""}>
          <img src={"/icons/logout.svg"} />
        </Link>
      </div>
    </div>
  );
};

export default SideNavBar;
