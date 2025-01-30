// Card.js
import React from "react";
import { Link } from "react-router-dom";

const Card = ({ title, description, image, buttons }) => {
  return (
    <div
      className="border-[3px] border-black rounded-[16px]  shadow-lg p-6  relative overflow-hidden flex flex-col  w-[90%] top-[-66px] px-[64px] py-[52px] justify-between"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "100% 100%", 
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        minHeight: "523px",
        border: "1px solid black"
      }}
    >
    

      {/* Content */}
      <div className="relative p-4  overflow-hidden flex flex-col gap-[200px] text-left !text-white w-full">
        <div>
          {" "}
          <h3
            style={{ color: "white", fontWeight: "600" }}
            className="w-[50%] !text-[50.22px]"
          >
            {title}
          </h3>
          <p style={{ color: "white",  }} className="!text-white w-[50%] !text-[20px]">{description}</p>
        </div>
     
      </div>
      <div className="mt-4 space-y-2 flex gap-[20px] w-full flex-wrap">
      {buttons.map((button, index) => (
  <div key={index} className="flex flex-col items-center">
    <Link to="/videoPage" className="no-underline ">
      <button className="bg-blue-500 text-white cursor-pointer rounded-[8px] border-[1px] border-black text-[20px] hover:bg-blue-700 relative z-10 flex px-[24px] py-[10px]">
        {button.text}
      </button>
    </Link>
    <p className="text-sm text-gray-300 mt-2">{button.subText}</p>
  </div>
))}
        </div>
    </div>
  );
};

export default Card;
