import Navbar from "./Navbar";
import { logo } from "../assets";

export default function Header() {
  return (
    <div className="fixed left-0 top-0 flex h-16 w-full items-center justify-center bg-green-950 bg-opacity-50 px-4 text-[#EDE9A3] backdrop-blur-xl">
      <div className="flex w-full max-w-[1680px] items-center justify-between">
        <a
          href="https://francisluy.github.io/CMS_LUY/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={logo} alt="logo" className=" size-[40px]" />
        </a>
        <Navbar />
      </div>
    </div>
  );
}
