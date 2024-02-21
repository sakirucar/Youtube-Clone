import React from "react";

const SubscriptionItem = (props) => {
  return (
    <div className="flex items-start justify-start cursor-pointer hover:rounded-md hover:bg-[#222222] py-2 mx-6">
      <div className="flex items-center justify-center mx-3">
        <div className="flex w-8 h-8">
          <img className="flex w-full h-full rounded-full" src={props.channelIcon} alt="" />
        </div>
        <div className="hidden lg:block xl:block whitespace-nowrap mx-6">
          {props.channelName}
        </div>
      </div>
    </div>
  );
};

export default SubscriptionItem;
