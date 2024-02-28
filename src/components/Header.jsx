import React from "react";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <div className="fixed left-0 top-0 flex h-16 w-full items-center justify-center bg-green-950 bg-opacity-50 px-8 text-[#EDE9A3] backdrop-blur-xl">
      <div className="flex w-full max-w-[1680px] items-center justify-between">
        <div className="border-b-2 border-[#EDE9A3] text-2xl font-black">
          CFL
        </div>
        <Navbar />
      </div>
    </div>
  );
}
