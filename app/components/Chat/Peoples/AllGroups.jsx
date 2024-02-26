import Link from "next/link";

const AllGroups = () => {
  return (
    <>
      <Link href={"chats/id"} className={`single-chat lg:hidden`}>
        <div>
          <img className="useImg" src="/icons/group.jpg" alt="" />
          <div>
            <div>
              <p className="user-name">
                We are Dev <span>#3432fre2</span>
              </p>
              <p className="message">Hassan a video message</p>
            </div>
            <div className="sms-time">
              <p>12:30 pm</p>
              <div>
                <p className="sms-count text-right bg-[#CC176A] text-xs w-4 h-4 rounded-full flex justify-center items-center">
                  5
                </p>
              </div>
            </div>
          </div>
        </div>
      </Link>
      <div className={`single-chat hidden lg:block`}>
        <div>
          <img className="useImg" src="/icons/group.jpg" alt="" />
          <div>
            <div>
              <p className="user-name">
                We are Dev <span>#4453s4</span>
              </p>
              <p className="message">Hassan a video message</p>
            </div>
            <div className="sms-time">
              <p>12:30 pm</p>
              <div>
                <p className="sms-count text-right bg-[#CC176A] text-xs w-4 h-4 rounded-full flex justify-center items-center">
                  5
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllGroups;
