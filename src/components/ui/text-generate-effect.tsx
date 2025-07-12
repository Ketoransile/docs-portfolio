"use client";
import { useEffect } from "react";

import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  let wordsArray = words.split(" ");
  const renderWords = () => {
    return (
      <div>
        {wordsArray.map((word, idx) => {
          return (
            <span
              key={word + idx}
              className={`${
                idx > 2
                  ? "text-violet-800 dark:text-purple"
                  : "dark:text-white text-black"
              } opacity-100`}
              style={{
                filter: filter ? "blur(0px)" : "none",
              }}
            >
              {word}{" "}
            </span>
          );
        })}
      </div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="my-4">
        <div className=" dark:text-white text-black  leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
