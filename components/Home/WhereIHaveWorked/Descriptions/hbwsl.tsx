import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function Hbwsl() {
  const tasks = [
    {
      text: "Responsible for end to end development of WordPress plugins & themes.",
      keywords: ["WordPress"],
    },
    {
      text: "Worked on creating addons for WooCommerce plugin in WordPress.",
      keywords: ["WordPress", "WooCommerce"],
    },
    {
      text: "End to end testing for plugins and themes developed",
      keywords: [],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Software Developer <span className="text-AAsecondary"></span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">February 2015 - March 2018</span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description 1 */}
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-1">
                <ArrowIcon className={" h-5 w-4 text-AAsecondary flex-none"} />
                <span
                  className="text-gray-500 sm:text-sm text-xs"
                  dangerouslySetInnerHTML={{
                    __html: getTasksTextWithHighlightedKeyword(item.text, item.keywords),
                  }}
                ></span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
