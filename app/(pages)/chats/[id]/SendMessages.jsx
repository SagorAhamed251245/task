import React from "react";

const SendMessages = ({ sendSms }) => {
  return (
    <section className={"send-sms bg-red-500"}>
      <div className={"send-input"}>
        <input type="text" id={"send"} placeholder=" Message..." />
        <div>
          <img
            src="/icons/smile.svg
          "
            alt=""
          />
        </div>
      </div>

      <button>
        <img src="/icons/gallery.png" alt="" className="h-4 " />
      </button>
      <button>
        <img src="/icons/Vector.png" alt="" className="h-4 " />
      </button>
      <button className={"btn-p"} onClick={sendSms}>
        <img src="/icons/send.png" alt="" className="h-4 " />
      </button>
    </section>
  );
};

export default SendMessages;
