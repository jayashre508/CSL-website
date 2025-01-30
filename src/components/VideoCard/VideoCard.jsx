import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
const VideoCard = ({ title, description, buttons, videoSrc, videoDescription, similarVideos }) => {
    const [currentVideoSrc, setCurrentVideoSrc] = useState(videoSrc);
  
    // const handleSimilarVideoClick = (src) => {
    //   setCurrentVideoSrc(src);
    // };
  return (
    <div className="border-[3px] bg-[black] border-[black] rounded-[16px] shadow-lg p-6 relative overflow-hidden flex flex-col w-[90%] px-[64px] py-[52px] justify-between">
   
      {/* Content */}
      <div className="relative p-4 overflow-hidden flex flex-col gap-[200px] text-left !text-white w-full pb-[40px]">
        <div>
          <h3
            style={{ color: "white", fontWeight: "600" }}
            className="w-[50%] !text-[50.22px]"
          >
            {title}
          </h3>
         
        </div>
      </div>
         {/* Button Section */}
         <div className="mt-4 space-y-2 flex gap-[40px] w-full flex-wrap pb-[40px]">
        {buttons.map((button, index) => (
          <div key={index} className="flex flex-col items-center">
            <Link to="/videoPage" className="no-underline">
              <button className="bg-[black] text-[white] cursor-pointer rounded-[8px] border-[1px] border-[white] text-[20px] hover:bg-blue-700 relative z-10 flex px-[24px] py-[10px]">
                {button.text}
              </button>
            </Link>
            <p className="text-sm text-gray-300 mt-2">{button.subText}</p>
          </div>
        ))}
      </div>


      {/* Video Player Section */}
      <div className="mt-4 w-full">
        <video className="w-full h-auto" controls>
          <source src={videoSrc} type="video/mp4" />
          adsfadsf
        </video>
      </div>
        {/* Video Description Section */}
        {videoDescription && (
        <div className="mt-4 text-[white]">
          <p className="text-lg">{videoDescription}</p>
        </div>
      )}

       {/* Similar Videos Section */}
       {similarVideos && similarVideos.length > 0 && (
        <div className="mt-6 w-full">
          <h4 className="text-white text-xl mb-4">Similar Videos:</h4>
          <div className="flex gap-4 overflow-x-auto gap-[40px]">
            {similarVideos.map((video, index) => (
              <div
                key={index}
                className="bg-gray-800 text-white p-4 rounded-lg cursor-pointer flex-shrink-0 w-1/2"
                // onClick={() => handleSimilarVideoClick(video.src)}
              >
                <video className=" h-auto pointer-events-none w-full " controls>
                  <source src={videoSrc} type="video/mp4" />
                 fdgdsfgs
                </video>
                <h5 className="text-lg mt-2">{video.title}</h5>
                <p className="text-sm text-gray-400">{video.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
    
  );
};

export default VideoCard;
