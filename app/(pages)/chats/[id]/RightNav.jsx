import React from "react";

const RightNav = ({ setIsActions, isActions, id }) => {
  return (
    <>
      <div>
        <img src="/icons/phone.png" alt="" />
      </div>
      <div>
        <img src="/icons/video.png" alt="" />
      </div>
      <div>
        <img src="/icons/delete.png" alt="" />
      </div>
      <div
        onClick={() =>
          setIsActions({ isActions: !isActions.isActions, _id: id })
        }
        className="relative flex items-center justify-center w-3 lg:w-10"
      >
        <img src="/icons/dot.png" alt="" />
        {/* action */}
        <div
          className={` arrow-right-nav ${
            isActions._id === id ? " " : "hidden"
          } ${isActions.isActions === true ? " " : "hidden"}`}
        ></div>
        <div
          className={` nav-action ${isActions?._id === id ? "" : "hidden"} ${
            isActions.isActions === true ? " " : "hidden"
          }`}
        >
          <ul>
            <li>
              <img
                src="/icons/volume-high.png"
                alt=""
                className="h-4 cursor-pointer "
              />
              Mute Notification
            </li>
            <li>
              <img
                src="/icons/search-normal.png"
                alt=""
                className="h-4 cursor-pointer "
              />
              Search
            </li>
            <li>
              <img
                src="/icons/user-add.png"
                alt=""
                className="h-4 cursor-pointer "
              />
              Share my contact
            </li>
            <li>
              {" "}
              <img
                src="/icons/Group 1171280729.png"
                alt=""
                className="h-4 cursor-pointer "
              />
              Clear History
            </li>
            <li>
              {" "}
              <img
                src="/icons/delete.png"
                alt=""
                className="h-4 cursor-pointer "
              />
              Delete Chat
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default RightNav;
