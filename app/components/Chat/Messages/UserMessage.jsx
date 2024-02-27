"use Client";

const UserMessage = ({ children, userPhoto, setIsActions, isActions, id }) => {
  return (
    <div
      className={`messages  
      justify-s
              `}
    >
      <div className="">
        <div className={`img-div ${!userPhoto && "invisible"}`}>
          <div>
            <img src="/icons/user.jpg" alt="" />
            <div></div>
          </div>
        </div>

        <div className={` user-text `}>
          <div className="userSms">
            <div>{children}</div>
            <p>11: 30 PM</p>
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

        <div
          onClick={() =>
            setIsActions({ isActions: !isActions.isActions, _id: id })
          }
          className="relative w-1 h-4 "
        >
          <img
            src="/icons/threedot.png"
            alt=""
            className="w-1 h-4 cursor-pointer "
          />
          <div
            className={` arrow-left ${isActions._id === id ? " " : "hidden"} ${
              isActions.isActions === true ? " " : "hidden"
            }`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default UserMessage;
