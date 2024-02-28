import React from "react";
import { profilePic, avatar } from "../assets";

export default function About() {
  return (
    <div id="about" className="flex w-full flex-col items-center p-4">
      <div className="flex w-full max-w-[1280px] flex-col items-center pb-8">
        <h2 className="py-8 text-2xl font-bold">About Me</h2>
        <div className="flex w-full flex-col items-center gap-8 py-4 lg:flex-row lg:justify-evenly">
          <img
            src={profilePic}
            alt="profile picture"
            className="size-[200px] rounded-full"
          />
          <p className="max-w-prose text-pretty indent-8">
            I am a senior Information Technology student with a keen focus on
            IoT projects, particularly demonstrating proficiency in utilizing
            C++ for Arduino-based applications. My expertise extends to graphic
            design, where I've honed my creative skills to bring visual aspects
            to life. My proficiency in project management is complemented by a
            hands-on approach to IoT and a flair for graphic design, enabling me
            to blend technical prowess with creative solutions. This unique
            skill set positions me as a versatile professional capable of
            navigating the intersection of technology, creativity, and effective
            project leadership.
          </p>
        </div>
      </div>
    </div>
  );
}
