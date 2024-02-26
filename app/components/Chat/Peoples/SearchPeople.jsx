import React from "react";

const SearchPeople = () => {
  return (
    <div className="search-people">
      <div className={"search-input"}>
        <input type="text" className="" placeholder="search..." />
        <div className={"search-icon"}>
          <img src="icons/searchnormal1.svg" alt="" />
        </div>
      </div>
      <button>
        <div>
          <div>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.6668 2H1.3335L6.66683 8.30667V12.6667L9.3335 14V8.30667L14.6668 2Z"
                stroke="white"
                stroke-width="1.3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>

          <div>Filter</div>
        </div>
      </button>
    </div>
  );
};

export default SearchPeople;
