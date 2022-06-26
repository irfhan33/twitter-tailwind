import React from "react";
import Input from "./Input";
import { SparklesIcon } from "@heroicons/react/outline";

const Feeds = () => {
  return (
    <div className="grow max-w-2xl border-r border-l border-gray-700 h-[200vh]">
      <div className="flex justify-between items-center px-4 py-1  backdrop-blur-xl sticky top-0">
        <h2 className="text-lg font-bold">Home</h2>
        <div className="hoverAnimation">
          <SparklesIcon className="h-6 " />
        </div>
      </div>
      <Input />
    </div>
  );
};

export default Feeds;
