import React from "react";
import { roims, harvest, inventory } from "../assets";

export default function Projects() {
  return (
    <div id="projects" className="my-8 flex w-full flex-col items-center p-4">
      <div className="flex w-full max-w-[1280px] flex-col items-center gap-16 pb-8">
        <h2 className="text-2xl font-bold">My Projects</h2>
        <div className="flex w-full flex-col items-center gap-8 py-4 lg:flex-row lg:items-start lg:justify-evenly lg:gap-16">
          <img
            src={roims}
            alt="project picture"
            className="image-shadow w-full rounded-xl object-cover shadow-2xl lg:w-3/6"
          />
          <div className="w-full space-y-4">
            <p className="font-semibold">
              Records Office Information Management System
            </p>
            <p className="max-w-prose text-pretty indent-8">
              A functional recording system that can be operate by an employee
              or by the administrator. It also aids in time efficient to record
              or archive data in correct order type, as well as to speed up the
              search of finding the accurate record that they wish to view in an
              organized way.
            </p>
          </div>
        </div>

        <div className=" flex w-full flex-col items-center gap-8 py-4  lg:flex-row-reverse lg:items-start lg:justify-evenly lg:gap-16">
          <img
            src={harvest}
            alt="project picture"
            className="image-shadow w-full rounded-xl object-cover  lg:w-3/6"
          />
          <div className="w-full space-y-4">
            <p className="font-semibold">Vertical Harvest</p>
            <p className="max-w-prose text-pretty indent-8">
              Vertical Harvest serves as a solution designed to help vertical
              farmers manage their lettuce crops more efficiently. An essential
              component of VerticalHarvest is its environmental monitoring
              system and Data Analytics that will be beneficial for predicting
              the lettuce&apos;s overall quality collected from the sensors to
              measure crucial factors like temperature, humidity, and light
              levels in real time.
            </p>
          </div>
        </div>

        <div className="flex w-full flex-col items-center gap-8 py-4 lg:flex-row lg:items-start lg:justify-evenly lg:gap-16">
          <img
            src={inventory}
            alt="project picture"
            className="image-shadow w-full rounded-xl object-cover shadow-2xl lg:w-3/6"
          />
          <div className="w-full space-y-4">
            <p className="font-semibold">CCS Inventory Monitoring System</p>
            <p className="max-w-prose text-pretty indent-8">
              A functional inventory monitoring system when borrowing and
              returning items and became the first project I made to learn the
              basics of CRUD functionality.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
