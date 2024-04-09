import { useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";
import { cn } from "../lib/utils";

const navItems = [
  {
    name: "Home",
    href: "#",
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Skills",
    href: "#skills",
  },

  {
    name: "Experiences",
    href: "#experiences",
  },

  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Artworks",
    href: "#artworks",
  },

  {
    name: "Contact",
    href: "#contact",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className="hidden items-center gap-4 lg:flex">
        {navItems.map((navItem) => (
          <a
            key={navItem.name}
            href={navItem.href}
            className="relative whitespace-nowrap"
          >
            <div className="flex items-center rounded-md p-2 outline-none hover:bg-green-50 hover:bg-opacity-20">
              {navItem.name}
            </div>
          </a>
        ))}
      </div>
      <button onClick={toggleNavbar} className="text-3xl lg:hidden">
        {isOpen ? <MdClose /> : <MdMenu />}
      </button>
      <div
        onClick={toggleNavbar}
        className={cn(
          "absolute right-0 top-0 z-[-1] flex w-full origin-top scale-y-0 flex-col items-center gap-4 rounded-b-xl bg-green-950 bg-opacity-95 px-10 pb-10 pt-12 transition ease-in-out lg:hidden",
          isOpen && "scale-y-100",
        )}
      >
        {navItems.map((navItem) => (
          <a
            key={navItem.name}
            href={navItem.href}
            className="relative whitespace-nowrap"
            onClick={toggleNavbar}
          >
            <div className="flex items-center rounded-md p-2 outline-none hover:bg-green-50 hover:bg-opacity-20">
              {navItem.name}
            </div>
          </a>
        ))}
      </div>
    </nav>
  );
}
// top-[-10px] right-[-10px]
