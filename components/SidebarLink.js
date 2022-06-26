import React from "react";

const SidebarLink = ({ text, Icon, active }) => {
  return (
    <div
      className={`flex items-center justify-center xl:justify-start text-xl space-x-3 hoverAnimation ${
        active && "font-bold"
      }`}
    >
      <Icon className="h-7 w-7" />
      <span className="hidden xl:inline">{text}</span>
    </div>
  );
};

export default SidebarLink;
