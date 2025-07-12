"use client";
import React from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import Link from "next/link";
import MagicButton from "./ui/MagicButton";
import { TypewriterEffect } from "./ui/TypewriterEffect";
import { ContainerTextFlip } from "@/components/ui/container-text-flip";

const Hero = () => {
  return (
    <div className="px-4">
      <div className="flex justify-center relative my-20">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center text-center">
          {/* Typewriter Intro */}
          <div>
            <TypewriterEffect
              words={[
                { text: "Igniting" },
                { text: "Bold" },
                { text: "&" },
                { text: "Visionary" },
                { text: "Web" },
                { text: "Experiences" },
              ]}
              className="max-md:text-xs md:text-sm lg:text-sm text-slate-400 font-serif"
            />
          </div>

          {/* Name */}
          <div>
            <TextGenerateEffect
              className="text-2xl md:text-3xl lg:text-4xl font-bold mt-4 max-md:mt-12"
              words="Abdi Sileshi Worku"
            />
          </div>

          {/* Role + Skills */}
          <div>
            <div className="flex gap-2 md:gap-3 lg:gap-4 items-center">
              <TextGenerateEffect
                className="text-xl md:text-2xl lg:text-4xl mt-4 leading-snug"
                words="Software Engineer"
              />
              <ContainerTextFlip
                words={["Frontend", "Backend", "Full-Stack", "UI/UX", "APIs"]}
                className="text-lg md:text-xl lg:text-2xl mt-4 leading-snug"
              />
            </div>
            <p className="text-sm md:text-base mt-2 text-slate-500 dark:text-gray-400 max-w-xs mx-auto">
              Weaving code into stunning, impactful web solutions that spark
              innovation and inspire.
            </p>
          </div>

          {/* Button */}
          <div className="max-md:pt-24 md:pt-12">
            <Link href="/projects">
              <MagicButton
                title="Unleash My Portfolio"
                icon={<FaLocationArrow />}
                position="right"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
