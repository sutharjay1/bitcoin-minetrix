import React from "react";
import AppLogo from "./AppLogo";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Link } from "react-router-dom";
import { P } from "./typographypara";
import { BsTwitterX } from "react-icons/bs";
import { FaTelegram } from "react-icons/fa";
import { PiDiscordLogo } from "react-icons/pi";


const link = [
  { name: "Stake to Mine", href: "/stake-to-mine" },
  { name: "What is it", href: "/what-is-it" },
  { name: "How to Buy", href: "/how-to-buy" },
  { name: "Roadmap", href: "/roadmap" },
  { name: "FAQS", href: "/faqs" },
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Cookies", href: "/cookies" },
  { name: "Terms of Use", href: "/terms-of-use" },
];

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

const Footer = () => {
  return (
    <div className="w-full relative z-10 mx-auto px-4 bg-white py-8 md:py-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="flex justify-start md:justify-start mr-auto ml-2 mb-6 md:mb-0">
          <AppLogo className="ml-0" />
        </div>
        <div className="lg:flex hidden w-full md:w-auto">
          <ul className="flex flex-wrap justify-start md:justify-start -m-4">
            {link.map((item) => (
              <li className="w-full lg:w-auto  pl-6 p-4" key={item.name}>
                <Link
                  to={item.href}
                  className="font-normal text-sm uppercase text-gray-600 hover:text-primary transition-colors duration-100"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex lg:hidden w-full md:w-auto">
          <ul className="flex flex-wrap justify-start -m-4">
            <div className="w-full grid grid-cols-2 sm:grid-cols-3   lg:grid-cols-8 gap-4">
              {link.map((item) => (
                <li className="pl-6 p-4" key={item.name}>
                  <Link
                    to={item.href}
                    className="font-normal text-sm uppercase text-gray-600 hover:text-primary transition-colors duration-100"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </div>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-8 flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left mb-6 md:mb-0">
          <P className="text-sm font-medium text-zinc-600 mb-4">
            Copyright 2023 BTC Minetrix. All Rights Reserved.
          </P>
          <P className="text-sm font-medium max-w-2xl text-zinc-600">
            Disclaimer: Cryptocurrency may be unregulated in your jurisdiction.
            The value of cryptocurrencies may go down as well as up. Profits may
            be subject to capital gains or other taxes applicable in your
            jurisdiction.
          </P>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {icon.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-center rounded-full px-1.5 py-1  border border-zinc-300"
            >
              <span>{item.icon}</span>
            </div>
          ))}
        </div>
      </div>

      
    </div>
  );
};

export default Footer;
