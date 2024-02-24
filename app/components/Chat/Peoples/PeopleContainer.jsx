import React from "react";
import SearchPeople from "./SearchPeople";
import AllChats from "./AllChats";

const PeopleContainer = () => {
  return (
    <section className="people-container">
      <SearchPeople />
      <AllChats />
    </section>
  );
};

export default PeopleContainer;
