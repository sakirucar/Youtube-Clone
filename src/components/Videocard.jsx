import React from "react";
const Videocard = (props) => {
  return (
    <div className=" w-full md:w-[32%] lg:w-[24%] cursor-pointer text-white">
      <div className="w-full h-3/5 ">
        <img
          className="flex items-center justify-center w-full h-full rounded-3xl"
          src={props.thumbnailImageSrc}
          alt=""
        />
      </div>

      <div className="flex m-3 h-2/5">
        <div className=" w-1/6">
          <img
            className="cursor-pointer rounded-full"
            width="40"
            height="40"
            src={props.channelImageSrc}
            alt="user-male-circle--v1"
          />
        </div>

        <div className="flex flex-col ">
          <h2 className="w-full">{props.videoTitle}</h2>
          <div className="">{props.channelName}</div>
          <div className="">
            {props.viewCount} views · {props.uploadTime}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Videocard;
