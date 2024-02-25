"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ data, key }) => {
  const navPath = usePathname();

  return (
    <Link
      href={data.path}
      key={key}
      className={` ${navPath === data.path ? "active" : "li"}`}
    >
      <span>{data.icon}</span>
      <span>{data?.title}</span>
    </Link>
  );
};

export default NavLink;
