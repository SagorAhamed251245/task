import React from "react";

const Mymessages = ({ children, setIsActions, isActions, id, time }) => {
  return (
    <div
      className={`messages  
      justify-e
                 "
              `}
    >
      <div>
        <div
          onClick={() =>
            setIsActions({ isActions: !isActions.isActions, _id: id })
          }
          className="relative w-1 h-4 "
        >
          <img
            src="/icons/threedot.png"
            alt=""
            className="hidden w-1 h-4 cursor-pointer lg:block"
          />
          <div
            className={` arrow-right ${isActions._id === id ? " " : "hidden"} ${
              isActions.isActions === true ? " " : "hidden"
            }`}
          ></div>
        </div>

        <div className={` my-text `}>
          <div className="mySms">
            <div>{children}</div>
            <p>{time}</p>
          </div>
          {/* action */}
          <div
            className={` action ${isActions._id === id ? "" : "hidden"} ${
              isActions.isActions === true ? " " : "hidden"
            }`}
          >
            <ul>
              <li>
                <img
                  src="/icons/message.png"
                  alt=""
                  className="h-4 cursor-pointer "
                />
                Reply
              </li>
              <li>
                <img
                  src="/icons/copy.png"
                  alt=""
                  className="h-4 cursor-pointer "
                />
                Copy
              </li>
              <li>
                {" "}
                <img
                  src="/icons/edit.png"
                  alt=""
                  className="h-4 cursor-pointer "
                />
                Edit your message
              </li>
              <li>
                {" "}
                <img
                  src="/icons/delete.png"
                  alt=""
                  className="h-4 cursor-pointer "
                />
                Delete this message
              </li>
              <li>
                <img
                  src="/icons/gropu.png"
                  alt=""
                  className="h-4 cursor-pointer "
                />
                <img
                  src="/icons/plus-circle.png"
                  alt=""
                  className="h-4 cursor-pointer "
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mymessages;
