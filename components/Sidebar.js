import React from "react";
import Image from "next/image";
import SidebarLink from "./SidebarLink";
import { signOut, useSession } from "next-auth/react";
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
  const { data: session } = useSession();
  return (
    // Note to myself. Position stikcy only work with fixed height of parents
    <div className="hidden sm:flex flex-col items-center xl:items-start xl:w-[300px] px-2 fixed top-0 py-4 xl:pr-10 overflow-auto h-full ">
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
      <button className="xl:grid place-items-center hidden bg-[#1d9bf0] rounded-full py-3 w-full text-lg mt-4 font-bold hover:bg-[#1d9bf0]/80 shadow-md transition duration-200 mb-4">
        Tweet
      </button>

      <div
        className="flex items-center justify-center mt-auto hoverAnimation w-full"
        onClick={signOut}
      >
        <img
          src={session.user.image}
          alt=""
          className="h-9 w-9 rounded-full object-cover xl:mr-3"
          referrerPolicy="no-referrer"
        />
        <div className="hidden xl:inline leading-5">
          <h4 className="font-bold">{session.user.name}</h4>
          <p className="text-[#6e767d]">{session.user.tag}</p>
        </div>
        <DotsHorizontalIcon className="h-5 hidden xl:inline ml-auto" />
      </div>
    </div>
  );
};

export default Sidebar;
