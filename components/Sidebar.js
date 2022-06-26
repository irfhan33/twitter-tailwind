import React from "react";
import Image from "next/image";
import SidebarLink from "./SidebarLink";
import {
  BellIcon,
  BookmarkIcon,
  ClipboardListIcon,
  DotsCircleHorizontalIcon,
  DotsHorizontalIcon,
  HashtagIcon,
  HomeIcon,
  InboxIcon,
  UserIcon,
} from "@heroicons/react/outline";

const Sidebar = () => {
  return (
    <div
      className="hidden sm:flex flex-col items-center xl:items-start xl:w-[340px] px-2 fixed h-full xl:pl-24 overflow-y-auto pb-4
    "
    >
      <div className="grid place-items-center w-14 h-14 hoverAnimation   ">
        <Image src="https://rb.gy/ogau5a" width={28} height={28} />
      </div>

      <div className="space-y-2.5 mt-4 mb-2.5 ">
        <SidebarLink text="Home" Icon={HomeIcon} active />
        <SidebarLink text="Explore" Icon={HashtagIcon} />
        <SidebarLink text="Notifications" Icon={BellIcon} />
        <SidebarLink text="Messages" Icon={InboxIcon} />
        <SidebarLink text="Bookmarks" Icon={BookmarkIcon} />
        <SidebarLink text="Lists" Icon={ClipboardListIcon} />
        <SidebarLink text="Profile" Icon={UserIcon} />
        <SidebarLink text="More" Icon={DotsCircleHorizontalIcon} />
      </div>
      <button className="xl:grid place-items-center hidden bg-[#1d9bf0] rounded-full py-3 w-full text-lg mt-4 font-bold hover:bg-[#1d9bf0]/80 shadow-md transition duration-200">
        Tweet
      </button>

      <div className="flex items-center justify-center mt-auto hoverAnimation w-full">
        <img
          src="https://cdn.dribbble.com/users/1577045/screenshots/4914645/media/028d394ffb00cb7a4b2ef9915a384fd9.png?compress=1&resize=400x300&vertical=top"
          alt=""
          className="h-9 w-9 rounded-full object-cover xl:mr-3"
        />
        <div className="hidden xl:inline leading-5">
          <h4 className="font-bold">firebase 1875</h4>
          <p className="text-[#6e767d]">@firebase1865</p>
        </div>
        <DotsHorizontalIcon className="h-5 hidden xl:inline ml-auto" />
      </div>
    </div>
  );
};

export default Sidebar;
