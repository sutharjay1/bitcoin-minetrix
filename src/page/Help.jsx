import React from "react";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import Marquee from "../components/marquee";
import { H3 } from "../components/typographyh3";
import { BsTwitterX } from "react-icons/bs";
import { FaTelegram } from "react-icons/fa";
import { PiDiscordLogo } from "react-icons/pi";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/Accordion";
import { P } from "../components/typographypara";

const socialIcons = [
  {
    icon: <BsTwitterX className="text-zinc-600" size={24} />,
    href: "https://x.com/bitcoinminetrix?s=21",
  },
  {
    icon: <FaTelegram className="text-zinc-600" size={24} />,
    href: "https://t.me/bitcoinminetrix",
  },
  {
    icon: <PiDiscordLogo className="text-zinc-600" size={24} />,
    href: "https://discord.gg/HDSx3AQWwV",
  },
];

const faqs = [
  {
    question: "What is Bitcoin mining?",
    answer:
      "Bitcoin mining is the process of creating new bitcoin. Thousands of mining rigs compete to solve complex equations that validate Bitcoin transactions and maintain the public ledger, and earn new bitcoin (BTC) for doing so.",
  },
  {
    question: "What is cloud mining?",
    answer:
      "Cloud mining is the same process as bitcoin mining but allows individuals to purchase or rent a stake in third-party mining operations, to remove the need to set up their own hardware.",
  },
  {
    question: "Why do we need Bitcoin Minetrix?",
    answer:
      "Bitcoin (BTC) mining is prohibitively expensive for the ordinary person, but anybody can buy and stake BTCMTX tokens to secure a share in the BTC Minetrix cloud mining platform. Traditional cloud mining has unfortunately been soured by scams, but Bitcoin Minetrix removes this risk with a decentralized solution to cloud mining.",
  },
  {
    question: "How is this different from traditional cloud mining?",
    answer:
      "BTC Minetrix is different from regular cloud mining services in a few important ways. Firstly, by utilizing ERC-20 tokens, we ensure that no money needs to change hands to participate in our cloud mining platform. Secondly, users decide how much bitcoin mining power they want to own by the number of mining credits they earn through BTCMTX token staking. Thirdly, thanks to the smart contract capabilities of the Ethereum blockchain, staking enables us to auto-manage user allocations in the safest and most decentralized way possible for end users.",
  },
  {
    question: "What is the difference between tokens and credits?",
    answer:
      "BTCMTX is an ERC-20 utility token that needs to be staked in order to earn mining credits. There is a total supply of 4 billion tokens. Mining credits are non-transferable ERC-20 tokens that need to be burned in exchange for cloud mining power. There is no max cap on mining credit tokens.",
  },
  {
    question: "What are the BTCMTX tokenomics?",
    answer:
      "The tokenomics of BTCMTX are as follows:\n- Network: Ethereum\n- Ticker: BTCMTX\n- Total Supply: 4,000,000,000\n- Bitcoin Mining: 1,700,000,000 (42.5%)\n- Marketing: 1,400,000,000 (35.0%)\n- Community: 600,000,000 (15.0%)\n- Staking: 300,000,000 (7.5%)\n- Presale Starting Price: $0.011",
  },
  {
    question: "What are the presale and launch dates?",
    answer:
      "The BTC Minetrix presale will run from the last week of September in predefined stages, or until it sells out. Once the presale ends, buyers will be able to claim their BTCMTX from the website at the same time as the token is listed on its first exchange. All claim and launch dates will be announced on our social media channels.",
  },
  {
    question: "Why can't I see my BTCMTX tokens in my wallet?",
    answer:
      "If you've purchased BTCMTX tokens in the presale, you'll be able to claim them before we list on our first exchange. Claiming will be available at bitcoinminetrix.com.",
  },
];

const Help = () => {
  return (
    <>
      <div className="relative w-full min-h-screen bg-no-repeat bg-cover bg-[url('/help-mine.svg')]">
        <div className="w-full z-40">
          {[
            "top-24 -ml-[42rem]",
            "top-52 -ml-[29rem]",
            "top-36 -ml-[12rem]",
            "top-20 -ml-[64rem]",
          ].map((pos, idx) => (
            <div key={idx} className={`absolute ${pos} w-[100vw]`}>
              <Marquee
                cloud={true}
                className="w-full"
                repeat={1}
                reverse={true}
                cloudDuration={1.5}
              >
                <img src="/cloud.svg" alt="cloud" className="w-48 h-auto" />
              </Marquee>
            </div>
          ))}
        </div>

        <MaxWidthWrapper className="max-w-8xl h-fit bg-transparent font-poppins pt-5 px-4 sm:px-8 lg:px-0">
          <div id="home" className="w-full relative pt-20 lg:pt-32 py-10 z-40">
            <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="flex flex-col justify-center text-center lg:text-left">
                <div className="text-3xl sm:text-4xl font-semibold mb-4">
                  <H3 className="block text-3xl sm:text-4xl text-zinc-700">
                    Bitcoin Minetrix
                  </H3>
                  <span className="flex justify-center  text-zinc-700">
                    Help and
                    <span className="block text-primary ml-1">Support</span>
                  </span>
                </div>{" "}
                <P className="flex text-base sm:text-lg text-zinc-600 mb-6 text-balance">
                  If you need further assistance or have specific queries
                  related to our Bitcoin Minetrix presale, this section is here
                  to provide the necessary guidance and support.
                </P>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </div>

      <div className="font-poppins  bg-gradient-to-b from-blue-200/35 to-transparent ">
        <MaxWidthWrapper className="font-poppins bg-transparent max-w-8xl pt-5 px-4 sm:px-8 lg:px-0">
          <div className="py-12">
            <div className="mx-auto px-4">
              <div className="flex flex-col items-center space-y-8 justify-center">
                <div className="text-center max-w-4xl">
                  <H3 className="heading text-2xl sm:text-3xl text-zinc-500 mt-4 mb-6 tracking-wide font-poppins">
                    The Bitcoin Minetrix Website
                  </H3>
                  <p className=" text-base text-zinc-600 mb-4">
                    The only official domain for Bitcoin Minetrix is
                    <a
                      href="https://bitcoinminetrix.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary ml-1 hover:underline"
                    >
                      https://bitcoinminetrix.com
                    </a>
                    . Please consider any other websites to be malicious or
                    scams. Always exercise diligence and avoid connecting your
                    wallet to any unofficial domain, as this may compromise your
                    wallet and result in the loss of funds.
                  </p>
                </div>

                <div className="text-center max-w-2xl">
                  <H3 className="heading text-2xl sm:text-3xl text-zinc-500 mt-4 mb-6 tracking-wide font-poppins">
                    Bitcoin Minetrix Socials
                  </H3>
                  <p className=" text-base text-zinc-600 mb-4">
                    Bitcoin Minetrix is responsible for content on only 3 social
                    media accounts:
                  </p>
                </div>

                <div className="flex flex-wrap justify-center gap-4">
                  {socialIcons.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-center rounded-full px-1.5 py-1  border border-zinc-300"
                    >
                      <span>{item.icon}</span>
                    </div>
                  ))}
                </div>

                <div className="col-md-10 offset-md-1 text-center mt-2 max-w-4xl">
                  <p className=" font-medium text-lg text-primary font-poppins">
                    IMPORTANT:
                  </p>

                  <p className=" text-base text-zinc-600 mb-4">
                    The Bitcoin Minetrix Team and Moderators will NEVER message
                    you first. Messages from accounts claiming to be 'Official',
                    'Support', 'Assistance', or 'Help' should be regarded as
                    scams. Do not engage with these accounts and block them
                    immediately. Never share your seed phrase with anyone.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>

        <div className="max-w-6xl mx-auto  w-full  p-4 flex justify-start">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem value={`item-${index}`}>
                <AccordionTrigger>
                  <P className="heading max-w-5xl text-base text-left sm:text-lg font-sans text-zinc-500 tracking-normal">
                    {faq.question}
                  </P>
                </AccordionTrigger>
                <AccordionContent>
                  {" "}
                  <P className="heading max-w-5xl text-base sm:text-lg font-light text-zinc-700 tracking-normal">
                    {faq.answer}{" "}
                  </P>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default Help;
