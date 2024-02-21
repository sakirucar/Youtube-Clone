import React from "react";
import { Icon } from "@iconify/react";

const SidebarItem = (props) => {
  return (
    <div
      onClick={() => props.setSelectedItem(props.index)}
      className={`${
        props.index === props.selected ? "rounded-md bg-[#222222]" : ""
      } flex items-start justify-start cursor-pointer hover:rounded-md hover:bg-[#222222] py-2 mx-6`}
    >
      <div className="flex items-center justify-center mx-3">
        <Icon
          icon={props.iconName}
          style={{
            fontSize: 25,
            color: props.index === props.selected ? "white" : "black",
            stroke: props.index === props.selected ? "black" : "white",
          }}
        />
        <div className="hidden lg:block xl:block whitespace-nowrap mx-6">
          {props.menuName}
        </div>
      </div>
    </div>
  );
};

export default SidebarItem;
