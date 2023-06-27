import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function Cemtrex() {
  const tasks = [
    {
      text: "Seasoned Associate Lead Developer with expertise in PHP. JavaScript, Next.js/React, NodeJS, WordPress, Shopify, Laravel, AWS and vercel",
      keywords: ["PHP", "JavaScript", "WordPress", "Shopify", "Laravel", "Next.js/React", "NodeJS", "AWS", "Vercel"],//"NFT Marketplace"],
    },
    {
      text: "Successfully led teams in delivering high-quality solutions and optimizing performance.",
      keywords: [],//"Next.js/React", "AWS", "Vercel"],
    },
    {
      text: "Passionate about leveraging innovative technologies to drive business growth.",
      keywords: [],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Associate Lead Software Developer <span className="text-AAsecondary"></span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">April 2018 - March 2023</span>
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
