import React from "react";
import { Icon } from "@iconify/react";
import { useState } from "react";

const Navbar = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <>
      <div className="sticky top-0  ">
        <nav className=" h-14 w-full flex bg-black justify-between  ">
          <div className="flex items-center justify-center p-3 ">
            <div className="m-2 p-2 cursor-pointer hover:bg-zinc-700 hover:rounded-full">
              <Icon fontSize={30} color="#FFFFFF" icon="basil:menu-solid" />
            </div>
            <div>
              <img
                className="m-2 h-10 p-2 cursor-pointer hidden md:block"
                src="/images/youtube.png"
                alt="YouTube"
              />
              <img
                className="m-2 h-10 p-2 cursor-pointer block md:hidden"
                src="/icons/youtubeicon.png"
                alt=""
              />
            </div>
          </div>

          <div className=" w-1/3 flex items-center justify-center">
            <input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className=" bg-black text-[#FFFFFF] rounded-full rounded-e-none h-4/5 pl-4 focus:outline-none focus:border focus:border-sky-800 w-full border-2 border-[#222222] hidden md:block lg:block xl:block"
              type="text"
              placeholder="Search"
            />
            <div
              className={`${
                inputValue === "" ? "hidden" : "block"
              }  bg-[#222222] hover:bg-zinc-700 h-4/5 flex items-center cursor-pointer `}
            >
              <Icon
                onClick={() => {
                  setInputValue("");
                }}
                fontSize={30}
                color="#FFFFFF"
                icon="ph:x-thin"
              />
            </div>

            <div className="flex items-center p-3 md:bg-[#222222] lg:bg-[#222222] h-4/5 md:rounded-full cursor-pointer md:rounded-s-none rounded-full hover:bg-[#222222] md:hover:bg-[#222222]">
              <Icon fontSize={30} color="#FFFFFF" icon="ic:baseline-search" />
            </div>

            <div className=" flex items-center p-3 md:bg-[#222222] lg:bg-[#222222] h-4/5 m-3 rounded-full cursor-pointer hover:bg-zinc-700">
              <Icon fontSize={25} color="#FFFFFF" icon="mdi:microphone" />
            </div>
          </div>

          <div className=" flex items-center justify-end mx-4">
            <div className="flex items-center justify-center h-12 w-12 p-3  my-1  rounded-full cursor-pointer hover:bg-zinc-700">
              <Icon
                fontSize={25}
                color="#FFFFFF"
                icon="solar:videocamera-add-outline"
              />
            </div>
            <div className="flex items-center justify-center h-12 w-12 p-3 my-1  rounded-full cursor-pointer hover:bg-zinc-700">
              <Icon
                fontSize={25}
                color="#FFFFFF"
                icon="basil:notification-outline"
              />
            </div>
            <div className="flex items-center justify-center h-12 w-12 p-2 mx-4 my-1  rounded-full cursor-pointer">
              <img className="rounded-full" src="/images/profile.jpg" alt="" />
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
