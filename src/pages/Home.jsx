import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Videocard from "../components/Videocard";
import Sidebar from "../components/Sidebar";
import CardData from "../fakedb/card-data.json";
import Buttons from "../components/Buttons";
import Category from "../fakedb/category.json";

const Home = () => {

  const [selectedButton,setSelectedButton]= useState(0)

  return (
    <>
      <div className="sticky top-0">
        <Navbar />
      </div>

      <div className="bg-black flex justify-start items-start w-full">
        <div className="w-0 md:w-1/6 lg:w-1/6 xl:w-1/6 h-screen ">
          <Sidebar />
        </div>

        <div className=" flex flex-wrap w-full md:w-5/6 lg:w-5/6 xl:w-5/6 ">
          <div className="flex  overflow-x-auto gap-4 p-4 bg-black">
            {Category.map((item,index) => (
              <Buttons Category={item.Category}
                      Selected ={selectedButton}
                     setSelectedButton={setSelectedButton} 
                     index={index}/>
            ))}
          </div>

          <div className="flex flex-wrap w-full justify-between gap-1 p-4 mb-2 ">
            {CardData.map((item) => (
              <Videocard
                thumbnailImageSrc={item.thumbnailImageSrc}
                channelImageSrc={item.channelImageSrc}
                videoTitle={item.videoTitle}
                channelName={item.channelName}
                viewCount={item.viewCount}
                uploadTime={item.uploadTime}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
