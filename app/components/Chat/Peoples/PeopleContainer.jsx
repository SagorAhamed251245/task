"use client";
import { useContext } from "react";
import React from "react";
import SearchPeople from "./SearchPeople";
import AllChats from "./AllChats";
import FilterContext from "@/app/contex/FilterContext";

const PeopleContainer = () => {
  const { mobileChat, setMobileChat } = useContext(FilterContext);
  return (
    <section className={`people-container scrollbar-hidden `}>
      <SearchPeople />
      <AllChats />
    </section>
  );
};

export default PeopleContainer;
