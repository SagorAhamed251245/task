import React from "react";

const AllPeople = () => {
  return (
    <div className="single-chat">
      <div>
        <img className="useImg" src="/icons/user.jpg" alt="" />
        <div>
          <div>
            <p className="user-name">
              FC <span>#4453s4</span>
            </p>
            <p className="message">Send a video message</p>
          </div>
          <div className="sms-time">
            <p>11:30 pm</p>
            <div>
              <p className="sms-count text-right bg-[#CC176A] text-xs w-4 h-4 rounded-full flex justify-center items-center">
                5
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllPeople;
