import React, { useEffect, useState } from "react";
import { BiChevronDown, BiChevronRight } from "react-icons/bi";
import { CgMenuGridO } from "react-icons/cg";
import { FaHamburger, FaPhone, FaTelegram } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { colorTheme } from "./../constants/colorTheme";
import { Button } from "./Button";
import AppLogo from "./AppLogo";
import { RxHamburgerMenu } from "react-icons/rx";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./Sheet";
import { BsTwitterX } from "react-icons/bs";
import { PiDiscordLogo } from "react-icons/pi";
import { HashLink } from "react-router-hash-link";

const icon = [
  { icon: <BsTwitterX className="text-zinc-600" size={16} /> },
  { icon: <FaTelegram className="text-zinc-600" size={16} /> },
  { icon: <PiDiscordLogo className="text-zinc-600" size={16} /> },
  {
    icon: (
      <img
        src="/dex-screener.svg"
        alt="dex-screener"
        className="text-zinc-600 bg-zinc-600 rounded-full object-cover h-5 w-auto"
      />
    ),
  },
  {
    icon: (
      <img
        src="/dextools.svg"
        alt="dextools"
        className="object-cover h-4 w-auto"
      />
    ),
  },
];

const NavBar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState(null);

  const menuOptions = [
    { title: "Stake to mine", path: "/dashboard" },
    {
      title: "About",
      path: "#about",
      submenu: [
        { title: "  WHAT IS IT", path: "#what-is-it" },
        { title: "HOW TO BUY", path: "#how-to-buy" },
        { title: "ROADMAP", path: "#roadmap" },
        { title: "FAQs", path: "#faqs" },
      ],
    },
    { title: "Minedrop", path: "#minedrop" },
    { title: "Help", path: "/help" },
  ];

  useEffect(() => {
    setIsOpen(false);
    setExpandedMenu(null);
  }, [location.pathname]);

  const handleMenuClick = (option) => {
    if (option.submenu) {
      setExpandedMenu(expandedMenu === option.title ? null : option.title);
    } else {
      setIsOpen(false);
      setExpandedMenu(null);
    }
  };

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 w-full z-50 border-b-[1px] border-zinc-400/50 font-poppins transition-colors ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <div className="w-full flex items-center justify-center py-4 px-4 z-20   ">
          <div className="max-w-8xl w-full flex items-center justify-between">
            <div className=" flex items-center justify-center gap-2">
              <SheetTrigger asChild className="lg:hidden">
                <button onClick={() => setIsOpen(true)} aria-label="Open menu">
                  <RxHamburgerMenu size={20} />
                </button>
              </SheetTrigger>
              <div className="text-xl font-semibold tracking-wide select-none">
                <Link to={"/"}>
                  <AppLogo />
                </Link>
              </div>
            </div>

            <nav className="hidden lg:flex items-center justify-center gap-10">
              {menuOptions.map((option) => (
                <div key={option.path} className="relative group">
                  <HashLink
                    smooth
                    // to={option.submenu ? null : option.path}
                    to={option.path}
                    className={`text-sm uppercase font-normal tracking-wider ${
                      option.path === location.pathname
                        ? "text-primary font-semibold"
                        : `text-zinc-500`
                    } hover:text-primary/95 transition-colors flex items-center`}
                  >
                    {option.title}
                    {option.submenu && <BiChevronDown className="ml-1" />}
                  </HashLink>
                  {option.submenu && (
                    <div className="absolute left-0 mt-3  p-2 w-48 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out">
                      <div
                        className="py-1"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="options-menu"
                      >
                        {option.submenu.map((subItem) => (
                          <HashLink
                            smooth
                            // to={option.submenu ? null : option.path}
                            to={subItem.path}
                            key={subItem.path}
                            className="block px-4 py-3 text-sm text-gray-600 hover:text-primary hover:bg-zinc-200 rounded-lg"
                            role="menuitem"
                          >
                            {subItem.title}
                          </HashLink>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}

              <div className="flex flex-wrap justify-center gap-2">
                {icon.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center rounded-full px-1.5 py-1  border border-zinc-300"
                  >
                    <span>{item.icon}</span>
                  </div>
                ))}
              </div>

              <Button
                bg
                href="/get-started"
                className={
                  "bg-primary  hover:bg-primary/95 rounded-md px-6 py-4 hidden lg:flex text-base font-bold sm:text-base"
                }
              >
                Buy Now
              </Button>
            </nav>
          </div>
        </div>
        <SheetContent
          side="right"
          // direction="left"
          // close={handleMenu}
          className="bg-zinc-50  w-full h-full p-3 pt-8"
        >
          <SheetHeader>
            <SheetTitle>
              {" "}
              <Link to={"/"} onClick={() => setIsOpen(false)}>
                <AppLogo className="ml-3" />
              </Link>
            </SheetTitle>
          </SheetHeader>
          <div className="flex  flex-col h-full  ">
            <nav className="flex-1 mt-6 grid gap-y-4 pt-4 ">
              {menuOptions.map((option) => (
                <div key={option.path}>
                  <div
                    onClick={() => handleMenuClick(option)}
                    className={`flex items-center justify-between rounded-md p-1 py-2 pb-3 px-2 text-sm font-semibold ${
                      option.path === location.pathname
                        ? "text-primary underline underline-offset-8 font-bold"
                        : "text-zinc-800"
                    } hover:bg-zinc-200`}
                  >
                    <span className="ml-3 text-base font-normal">
                      {option.title}
                    </span>
                    {option.submenu ? (
                      <BiChevronDown
                        className={`h-4 w-4 transition-transform ${
                          expandedMenu === option.title ? "rotate-180" : ""
                        }`}
                      />
                    ) : (
                      <BiChevronRight className="h-4 w-4" />
                    )}
                  </div>
                  {option.submenu && expandedMenu === option.title && (
                    <div className="ml-6 mt-2 space-y-2">
                      {option.submenu.map((subItem) => (
                        <Link
                          key={subItem.path}
                          to={subItem.path}
                          onClick={() => setIsOpen(false)}
                          className="block p-2 text-sm text-gray-600 hover:primary/95 hover:bg-zinc-200 rounded-md"
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            <div className="mt-3 space-y-2">
              <div className="space-y-1 w-full">
                <Link to={"/auth?mode=login"} onClick={() => setIsOpen(false)}>
                  <button
                    type="button"
                    className="w-full rounded-md bg-primary px-3 py-[0.5rem] text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  >
                    BUY BTCMTX TOKEN
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default NavBar;
