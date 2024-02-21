import React, { useState } from "react";
import Sidedata from "../fakedb/submenu-data.json";
import Subdata from "../fakedb/subscription-data.json";
import SidebarItem from "./SidebarItem";
import Divider from "./Divider";
import { Icon } from "@iconify/react";
import SubscriptionItem from "./SubscriptionItem";

const Sidebar = () => {
  const [selectedItem, setSelectedItem] = useState(0);

  console.log(selectedItem)

  return (
    <>
      <div className=" text-[#FFFFFF] h-full flex-col bg-black overflow-auto hidden md:block lg:block xl:block">
        {Sidedata.map((item, index) => (
          <>
            {index < 9 && (
              <SidebarItem
                iconName={item.iconName}
                menuName={item.menuName}
                selected={selectedItem}
                setSelectedItem={setSelectedItem}
                index={index}
              />
            )}

            {index === 3 || index === 9 ? <Divider /> : null}
            {index === 3 && (
              <div className="flex gap-2 cursor-pointer mt-4">
                <div className="hidden lg:block xl:block whitespace-nowrap ml-6 font-bold">
                  You
                </div>
                <Icon
                  fontSize={25}
                  color="#FFFFFF"
                  icon="teenyicons:right-outline"
                />
              </div>
            )}

            {index === 9 && (
              <div className="flex gap-2 cursor-pointer my-4">
                <div className="hidden lg:block xl:block whitespace-nowrap ml-6 font-bold">
                  Subscriptions
                </div>
              </div>
            )}
          </>
        ))}

        <div>
          {Subdata.map((item) => (
            <>
              <SubscriptionItem
                channelName={item.channelName}
                channelIcon={item.channelIcon}
              />
            </>
          ))}
        </div>
        <div className="flex items-start justify-start cursor-pointer hover:rounded-md hover:bg-[#222222] py-2 mx-6">
          <div className="flex items-center justify-center mx-3">
            <div className="flex w-8 h-8">
              <Icon
                fontSize={25}
                color="#FFFFFF"
                icon="teenyicons:down-outline"
              />
            </div>
            <div className="hidden lg:block xl:block whitespace-nowrap mx-6">
              Show 97 More
            </div>
          </div>
        </div>
        <Divider />
        <div className="flex gap-2 cursor-pointer my-4">
          <div className="hidden lg:block xl:block whitespace-nowrap ml-6 font-bold">
            Explore
          </div>
        </div>
        <div>
          {Sidedata.map((item, index) => (
            <>
              {index > 9 && (
                <SidebarItem
                  iconName={item.iconName}
                  menuName={item.menuName}
                  selected={selectedItem}
                  setSelectedItem={setSelectedItem}
                  index={index}
                />
              )}
            </>
          ))}
        </div>
        <Divider />
      </div>
    </>
  );
};
export default Sidebar;
