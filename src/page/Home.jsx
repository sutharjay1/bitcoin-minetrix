import React from "react";
import { IoMdPaper } from "react-icons/io";
import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import ContentComponent from "../components/ContentComponent";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/Tabs";
import { H2 } from "../components/typographyh2";
import { H3 } from "../components/typographyh3";
import { H4 } from "../components/typographyh4";
import { P } from "../components/typographypara";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/Card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/Carousel";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/Table";
import Marquee from "../components/marquee";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/Accordion";
import ChartComponent from "../components/Chart";

const logos = [
  {
    src: "/cointelegraph.svg",
    alt: "cointelegraph",
  },
  {
    src: "/crypto3.svg",
    alt: "crypto3",
  },
  {
    src: "/cryptopotato.svg",
    alt: "cryptopotato",
  },
  {
    src: "/beincrypto.svg",
    alt: "beincrypto",
  },
  {
    src: "/bitcoin.svg",
    alt: "bitcoin",
  },
];

const features = [
  {
    title: "Ease of Entry",
    description:
      "Cloud mining eliminates the need for technical expertise, hardware setup, and maintenance. It's user-friendly, making it accessible to beginners.",
  },
  {
    title: "Cost Efficiency",
    description:
      "By leveraging cloud mining companies' advanced equipment, individuals avoid high electricity costs and hardware investments.",
  },
  {
    title: "Space & Noise",
    description:
      "Mining rigs are bulky, noisy, and produce heat. With cloud mining, users won't have these disruptions in their homes.",
  },
  {
    title: "No Resale Worries",
    description:
      "The rapid ageing of mining hardware can make resale challenging. Cloud mining keeps the responsibility to upgrade with the mining companies.",
  },
];

const tokenomicsData = [
  {
    fund: "Bitcoin Mining",
    allocation: "42.5%",
    token: "1,700,000,000",
    imgSrc: "https://bitcoinminetrix.com/assets/images/ellipse-darker.svg",
  },
  {
    fund: "Marketing",
    allocation: "35.0%",
    token: "1,400,000,000",
    imgSrc: "https://bitcoinminetrix.com/assets/images/ellipse-dark.svg",
  },
  {
    fund: "Staking",
    allocation: "12.5%",
    token: "500,000,000",
    imgSrc: "https://bitcoinminetrix.com/assets/images/ellipse-light.svg",
  },
  {
    fund: "Community",
    allocation: "10.0%",
    token: "400,000,000",
    imgSrc: "https://bitcoinminetrix.com/assets/images/ellipse-lighter.svg",
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

const Home = () => {
  return (
    <>
      <div className="relative  w-full bg-white bg-gradient-to-t from-transparent to-blue-200/35">
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

        <MaxWidthWrapper className="max-w-8xl bg-transparent font-poppins pt-5 px-4 sm:px-8 lg:px-0 ">
          <div id="home" className="w-full relative pt-20 lg:pt-28 py-10 ">
            <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="flex flex-col justify-start text-center  lg:text-left flex-1">
                <div className="text-3xl sm:text-4xl font-semibold mb-4">
                  <H3 className="block text-3xl sm:text-4xl text-zinc-700">
                    BITCOIN MINETRIX
                  </H3>
                  <span className="flex justify-center sm:justify-start text-zinc-700">
                    STAKE TOKENS.
                    <span className="block text-primary">MINE BITCOIN.</span>
                  </span>
                </div>
                <P className="hidden sm:flex text-base sm:text-lg text-zinc-600 mb-6 text-balance">
                  One Bitcoin mined in 2013 appreciated 27,300% in 10 years.
                  Bitcoin Minetrix provides hassle-free BTC mining for the next
                  10 years. Buy $BTCMTX today for as little as $0.0148.
                </P>
                <div className="hidden sm:flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                  <Button
                    variant="outline"
                    className="btn w-full sm:w-auto border-zinc-500 text-zinc-500 border-[1px] px-4 py-2 rounded-md hover:bg-zinc-500 hover:text-zinc-100 transition-all uppercase duration-300 ease-in-out"
                  >
                    Audit
                  </Button>
                  <Button
                    variant="outline"
                    className="btn w-full sm:w-auto border-primary text-primary border-[1px] px-4 py-2 rounded-md hover:bg-primary hover:text-zinc-100 transition-all duration-300 ease-in-out flex items-center justify-center gap-2"
                  >
                    Whitepaper <IoMdPaper className="w-6 h-6" />
                  </Button>
                </div>
                <div className="mx-auto sm:ml-20 flex-1 flex-grow w-full hidden sm:flex items-center sm:items-end justify-center">
                  <img
                    src="/Bitcoin-Cloud-Mining.svg"
                    alt="Bitcoin-Cloud-Mining"
                    className="w-full max-w-3xl mx-auto object-cover"
                  />
                </div>
              </div>
              <div className="flex flex-col items-center  justify-center h-fit   max-auto w-full">
                <div className="hidden sm:flex flex-col justify-center max-w-md w-full bg-white shadow-lg rounded-lg">
                  {" "}
                  <H4 className="bg-primary text-white text-center py-4 mb-6 text-lg sm:text-xl font-normal rounded-t-lg px-6">
                    $BTCMTX Claim and Token now LIVE!
                  </H4>
                  <div className="flex flex-col items-center justify-center gap-2 px-6 space-y-2">
                    <P className="text-zinc-700 text-center  text-base">
                      You can now claim your $BTCMTX tokens. Plus, stake your
                      tokens to earn rewards! Add 0xb11dB272e82165dB60dC70E to
                      your wallet to see your $BTCMTX.
                    </P>
                    <div className="flex flex-col items-center justify-center space-y-1 pb-4">
                      <div className="text-center flex items-center justify-center gap-2 ">
                        <P className="font-semibold text-zinc-600">
                          USDT Raised:
                        </P>
                        <P className="text-base sm:text-lg text-zinc-600">
                          $12,357,845.88
                        </P>
                      </div>
                      <div className="text-center flex items-center justify-center gap-2 ">
                        <P className="font-semibold text-zinc-600">
                          Your claimable BTCMTX
                        </P>
                        <P className="text-lg sm:text-xl">= 0</P>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center space-y-2 px-4 sm:px-6">
                    <Link
                      to="https://dexscreener.com/ethereum/0x053da4662ab98f78254437580105b37aa999749c"
                      target="_blank"
                      className="w-full"
                    >
                      <Button className="w-full btn bg-primary hover:bg-primary/90 text-white px-4 py-3 rounded-md flex justify-center items-center">
                        <img
                          src="/dex-screener.svg"
                          alt=""
                          height="20"
                          className="mr-2 object-cover h-6 w-auto"
                        />
                        <span>BUY ON DEX SCREENER</span>
                      </Button>
                    </Link>
                    <Button className="w-full btn bg-primary hover:bg-primary/90 text-white px-4 py-3 rounded-md flex justify-center items-center text-base mb-4 uppercase">
                      Connect Wallet
                    </Button>
                    <div className="my-4 pt-4 pb-6 text-center flex justify-center gap-2 items-center">
                      <P className="text-base font-medium text-zinc-800">
                        Powered by
                      </P>
                      <Link
                        to="https://web3paymentsolutions.io/"
                        target="_blank"
                        className="inline-block mt-1"
                      >
                        <img
                          src="/W3P_Black.svg"
                          alt="Web3 Payment Solutions"
                          className="mx-auto h-6 w-auto object-cover"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="flex sm:hidden flex-col justify-center max-w-md w-full  rounded-lg bg-white shadow-lg">
                  <Tabs defaultValue="account" className="mx-auto">
                    <H4 className="bg-primary text-white text-center py-4 mb-6 text-lg sm:text-xl font-normal rounded-t-lg px-6">
                      $BTCMTX Claim and Token now LIVE!
                    </H4>
                    <div className="mx-2 mb-2">
                      <TabsList className="grid w-full grid-cols-2 mx-auto p-1 ">
                        <TabsTrigger value="account">BUY BTCMTX</TabsTrigger>
                        <TabsTrigger value="info">Info</TabsTrigger>
                      </TabsList>
                    </div>
                    <TabsContent value="account">
                      <div className="flex flex-col items-center justify-center gap-2 px-6 space-y-2">
                        <P className="text-zinc-700 text-center  text-base">
                          You can now claim your $BTCMTX tokens. Plus, stake
                          your tokens to earn rewards! Add
                          0xb11dB272e82165dB60dC70E to your wallet to see your
                          $BTCMTX.
                        </P>
                        <div className="flex flex-col items-center justify-center space-y-1 pb-4">
                          <div className="text-center flex items-center justify-center gap-2 ">
                            <P className="font-semibold text-zinc-600">
                              USDT Raised:
                            </P>
                            <P className="text-base sm:text-lg text-zinc-600">
                              $12,357,845.88
                            </P>
                          </div>
                          <div className="text-center flex items-center justify-center gap-2 ">
                            <P className="font-semibold text-zinc-600">
                              Your claimable BTCMTX
                            </P>
                            <P className="text-lg sm:text-xl">= 0</P>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-center space-y-2 px-4 sm:px-6">
                        <Link
                          to="https://dexscreener.com/ethereum/0x053da4662ab98f78254437580105b37aa999749c"
                          target="_blank"
                          className="w-full"
                        >
                          <Button className="w-full btn bg-primary hover:bg-primary/90 text-white px-4 py-3 rounded-md flex justify-center items-center">
                            <img
                              src="/dex-screener.svg"
                              alt=""
                              height="20"
                              className="mr-2 object-cover h-6 w-auto"
                            />
                            <span>BUY ON DEX SCREENER</span>
                          </Button>
                        </Link>
                        <Button className="w-full btn bg-primary hover:bg-primary/90 text-white px-4 py-3 rounded-md flex justify-center items-center text-base mb-4 uppercase">
                          Connect Wallet
                        </Button>
                        <div className="my-4 pt-4 pb-6 text-center flex justify-center gap-2 items-center">
                          <P className="text-base font-medium text-zinc-800">
                            Powered by
                          </P>
                          <Link
                            to="https://web3paymentsolutions.io/"
                            target="_blank"
                            className="inline-block mt-1"
                          >
                            <img
                              src="/W3P_Black.svg"
                              alt="Web3 Payment Solutions"
                              className="mx-auto h-6 w-auto object-cover"
                            />
                          </Link>
                        </div>
                      </div>
                    </TabsContent>
                    <TabsContent value="info">
                      <div className="flex flex-col items-center justify-center gap-2 px-6 space-y-2 ">
                        <P className="flex text-base max-w-prose text-balance sm:text-lg text-zinc-600 py-2">
                          One Bitcoin mined in 2013 appreciated 27,300% in 10
                          years. Bitcoin Minetrix provides hassle-free BTC
                          mining for the next 10 years. Buy $BTCMTX today for as
                          little as $0.0148.
                        </P>
                        <div className="flex flex-col w-full justify-center lg:justify-start space-y-2  sm:space-x-4">
                          <Button
                            variant="outline"
                            className="btn w-full  border-zinc-500 text-zinc-500 border-[1px] px-4 py-4 rounded-md hover:bg-zinc-500 hover:text-zinc-100 transition-all uppercase duration-300 ease-in-out"
                          >
                            Audit
                          </Button>
                          <Button
                            variant="outline"
                            className="btn w-full border-primary text-primary border-[1px] px-4 py-2 rounded-md hover:bg-primary hover:text-zinc-100 transition-all duration-300 ease-in-out flex items-center justify-center gap-2"
                          >
                            Whitepaper <IoMdPaper className="w-6 h-6" />
                          </Button>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-center space-y-2 px-4 sm:px-6">
                        <div className="my-4 pt-4 pb-6 text-center flex justify-center gap-2 items-center">
                          <P className="text-base font-medium text-zinc-800">
                            Powered by
                          </P>
                          <Link
                            to="https://web3paymentsolutions.io/"
                            target="_blank"
                            className="inline-block mt-1"
                          >
                            <img
                              src="/W3P_Black.svg"
                              alt="Web3 Payment Solutions"
                              className="mx-auto h-6 w-auto object-cover"
                            />
                          </Link>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="w-full mx-auto max-w-5xl px-6 lg:px-8">
              <H2 className="text-center border-0 text-sm sm:text-sm font-medium leading-8 text-zinc-400 uppercase">
                Featured in
              </H2>
              <div className="mx-auto mt-2 hidden sm:grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                {logos.map((logo) => (
                  <img
                    key={logo.src}
                    src={logo.src}
                    alt={logo.alt}
                    className="col-span-2 h-7 w-auto object-contain sm:col-span-1"
                  />
                ))}
              </div>

              <div className="w-full flex sm:hidden">
                {/* <Carousel
                className="w-full"
                orientation="horizontal"
                opts={{
                  align: "start",
                  loop: true,
                }}
              >
                <CarouselContent>
                  {logos.map((logo) => (
                    <CarouselItem>
                      <img
                        key={logo.src}
                        src={logo.src}
                        alt={logo.alt}
                        className="col-span-2 h-7 w-auto object-contain sm:col-span-1"
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel> */}
                <Marquee className="w-full" gradient={false}>
                  {logos.map((logo) => (
                    <img
                      key={logo.src}
                      src={logo.src}
                      alt={logo.alt}
                      className="col-span-2 h-7 w-auto object-contain sm:col-span-1"
                    />
                  ))}
                </Marquee>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
      <div
        className="border-y-[0.1px] font-poppins border-zinc-300 mt-16 bg-white"
        id="what-is-it"
      >
        <MaxWidthWrapper className="font-poppins max-w-5xl pt-5 px-4 sm:px-8 lg:px-0">
          <div className=" py-12">
            <div className=" mx-auto px-4">
              <div className="row flex justify-center">
                <div className="col-md-10 offset-md-1 text-center">
                  <p className=" font-medium text-lg text-primary font-poppins">
                    BITCOIN MINING made easy
                  </p>
                  <H3 className="heading text-2xl sm:text-3xl text-zinc-500 mt-4 mb-6 tracking-wide font-poppins">
                    What is Bitcoin Minetrix?
                  </H3>
                  <p className=" text-base text-zinc-600 mb-4">
                    Bitcoin Minetrix is a tokenized cloud mining platform that
                    allows everyday people to mine bitcoin (BTC) in a
                    decentralized way. We&apos;re tokenizing cloud mining to
                    ensure a secure and transparent experience.
                  </p>
                  <p className="text-base text-zinc-600">
                    We&apos;re solving a huge problem by removing the risk of
                    third-party cloud mining scams and putting the control into
                    the hands of token holders. Simply stake BTCMTX to earn
                    credits, and use these to mine BTC.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
      <div className="mb-8 bg-white font-poppins">
        <MaxWidthWrapper className="max-w-8xl pt-5 px-4 sm:px-8 lg:px-0">
          <div className="flex flex-wrap items-center ">
            {/* First Image */}
            <div className="w-full md:w-1/2 order-1 md:order-1">
              <div className="w-full h-full">
                <img
                  src="/animate1.svg"
                  alt="Bitcoin Minetrix Solution"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            {/* First Text Section */}
            <div className="w-full md:w-1/2 order-2 md:order-2 p-4">
              <p className="subtitle text-sm sm:text-base mb-4 text-primary font-medium ">
                DECENTRALIZED CLOUD MINING
              </p>
              <H3 className="heading text-2xl sm:text-3xl font-normal text-zinc-600 mt-4 mb-6 tracking-wide">
                The Bitcoin Minetrix Solution
              </H3>
              <P className="heading text-base sm:text-lg font-sans text-zinc-600 mt-4 mb-4 tracking-normal">
                Bitcoin Minetrix presents a reliable cloud mining platform for
                everyday crypto users that aims to fix the problem of high
                hardware costs and deceptive scams that have deterred people
                from BTC mining.
              </P>
              <P className="heading text-base sm:text-lg font-sans text-zinc-600 mt-4 mb-4 tracking-normal">
                With Bitcoin Minetrix, these concerns are a thing of the past.
                Users can simply stake their BTCMTX tokens to gain cloud mining
                credits. This decentralized method safeguards users' interests,
                ensuring a secure and transparent mining experience.
              </P>
            </div>

            {/* Second Text Section */}
            <div className="w-full md:w-1/2 order-4 md:order-3 p-4">
              <p className="subtitle text-base sm:text-lg mb-4 text-primary font-medium ">
                How it works
              </p>
              <H3 className="heading text-2xl sm:text-3xl font-normal text-zinc-600 mt-4 mb-6 tracking-wide">
                Stake-To-Mine BTC Mining
              </H3>
              <P className="heading text-base sm:text-lg font-sans text-zinc-600 mt-4 mb-4 tracking-normal">
                The Stake-to-Mine concept is a novel idea that promises to bring
                bitcoin mining back into the realm of possibility for ordinary
                crypto aficionados, for several reasons.
              </P>
              <P className="heading text-base sm:text-lg font-sans text-zinc-600 mt-4 mb-4 tracking-normal">
                Users of Bitcoin Minetrix need only an Ethereum-compatible
                wallet such as MetaMask to purchase and stake BTCMTX tokens,
                making things very simple. Staking BTCMTX earns non-tradable
                ERC-20 token credits that must be burned in exchange for BTC
                cloud mining power.
              </P>
            </div>

            {/* Second Image */}
            <div className="w-full md:w-1/2 order-3 md:order-4">
              <div className="w-full h-full">
                <img
                  src="/animate1.svg"
                  alt="Stake-To-Mine BTC Mining"
                  className="object-cover w-full h-auto"
                />
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
      <div className="mb-8 bg-white font-poppins">
        <div className="max-w-8xl mx-auto overflow-hidden pt-5 px-0 sm:px-6 lg:px-8 bg-white">
          <div className="flex flex-wrap items-center ">
            {/* First Image */}
            <div className="w-full lg:w-1/2 order-1 md:order-1">
              <div className="w-full h-full">
                {/* <img
                  src="/animate1.svg"
                  alt="Bitcoin Minetrix Solution"
                  className="object-cover w-full h-full"
                /> */}
                <ContentComponent />
              </div>
            </div>

            {/* First Text Section */}
            <div className="w-full lg:w-1/2 order-2 lg:order-2 p-4 pt-10 sm:pt-0">
              <p className="subtitle text-base sm:text-lg    mb-4 text-primary font-medium uppercase ">
                The Case For Mining
              </p>
              <H3 className="heading text-2xl sm:text-3xl font-normal text-zinc-600 mt-4 mb-6 tracking-wide">
                Reasons To Cloud Mine BTC
              </H3>
              <P className="heading text-base sm:text-base font-sans text-zinc-600 mt-4 mb-4 tracking-normal">
                Bitcoin Minetrix presents a reliable cloud mining platform for
                everyday crypto users that aims to fix the problem of high
                hardware costs and deceptive scams that have deterred people
                from BTC mining.
              </P>
              <div className="flex flex-col items-center justify-start gap-4">
                <div className=" flex flex-col items-start justify-start gap-1">
                  {features.map((feature) => (
                    <>
                      <P className="heading text-lg sm:text-xl font-medium text-zinc-600 mt-4 tracking-wide">
                        {feature.title}
                      </P>
                      <P className="heading text-base sm:text-base font-normal text-zinc-600  tracking-normal">
                        {feature.description}
                      </P>
                    </>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="border-y-[0.1px] font-poppins border-zinc-300 bg-white   "
        id="how-to-buy"
      >
        <MaxWidthWrapper className="font-poppins mt-16 bg-white max-w-8xl pt-5 px-4 sm:px-8 lg:px-0">
          <div className="flex flex-col items-center mb-12  sm:mb-14">
            <div className="text-center mb-12  sm:mb-14">
              <p className="subtitle text-base sm:text-lg    mb-4 text-primary font-medium uppercase ">
                How To Buy
              </p>
              <H3 className="heading text-2xl sm:text-3xl font-normal text-zinc-600 mt-4 mb-6 tracking-wide">
                How To Access BTC Mining
              </H3>
              <P className="heading max-w-3xl text-base sm:text-base font-sans text-zinc-600 mt-4 mb-4 tracking-normal">
                Purchase BTCMTX tokens using ETH, USDT, BNB or bank card today
                and stake them to earn cloud mining credits. Burn credits to
                increase your bitcoin mining power.
              </P>
            </div>

            <Carousel
              className="w-full "
              orientation="horizontal"
              opts={{
                align: "center",

                // loop: true,
              }}
            >
              <CarouselContent className="w-full max-w-xs mx-auto py-5">
                <CarouselItem>
                  <Card className="w-full min-h-fit flex-grow flex flex-1 flex-col  bg-white shadow-lg rounded-lg">
                    <CardHeader className="text-left">
                      <img
                        className="w-12 h-12  mb-4"
                        alt="Buy Tokens"
                        src="/token.svg"
                      />
                      <CardTitle className="text-lg font-semibold text-gray-800 ">
                        <P className="heading text-lg sm:text-xl font-semibold text-zinc-600  tracking-wide">
                          Buy Tokens
                        </P>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base text-gray-600">
                        Connect your wallet and use the presale widget at the
                        top of the page to buy BTCMTX tokens. You can use ETH,
                        BNB, USDT, or bank card. Make sure you have enough ETH
                        or BNB to cover gas fees.
                      </CardDescription>
                    </CardContent>
                  </Card>
                </CarouselItem>
                <CarouselItem>
                  <Card className="w-full min-h-fit flex-grow flex flex-1 flex-col  bg-white shadow-lg rounded-lg">
                    <CardHeader className="text-left">
                      <img
                        className="w-12 h-12  mb-4"
                        alt="Stake-to-Mine"
                        src="/stake.svg"
                      />
                      <CardTitle className="text-lg font-semibold text-gray-800">
                        <P className="heading text-lg sm:text-xl font-semibold text-zinc-600 tracking-wide">
                          {" "}
                          Stake-to-Mine{" "}
                        </P>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base text-gray-600">
                        If you select the ‘Buy & Stake’ option you can start
                        staking immediately and earn more BTCMTX tokens. Staking
                        for mining credits (Stake-to-Mine) will be available
                        when the app is launched.
                      </CardDescription>
                    </CardContent>
                  </Card>
                </CarouselItem>{" "}
                <CarouselItem>
                  <Card className="w-full min-h-fit flex-grow flex flex-1 flex-col  bg-white shadow-lg rounded-lg">
                    <CardHeader className="text-left">
                      <img
                        className="w-12 h-12  mb-4"
                        alt="Earn BTC"
                        src="/redeem.svg"
                      />
                      <CardTitle className="text-lg font-semibold text-gray-800">
                        <P className="heading text-lg sm:text-xl font-semibold text-zinc-600 tracking-wide">
                          {" "}
                          Earn BTC{" "}
                        </P>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base text-gray-600">
                        Your staked BTCMTX will generate mining credits over
                        time. Burn mining credits to purchase bitcoin cloud
                        mining power. The more credits you burn, the more BTC
                        you&#39;ll earn through cloud mining.
                      </CardDescription>
                    </CardContent>
                  </Card>{" "}
                </CarouselItem>
              </CarouselContent>
              <CarouselNext />
              <CarouselPrevious />
            </Carousel>
          </div>
        </MaxWidthWrapper>
      </div>
      <div className="font-poppins mb-8 border-y-[0.1px] border-zinc-300 bg-primary bg-[url('/bottom-svg.svg')] bg-cover bg-no-repeat bg-center w-full">
        <MaxWidthWrapper className="bg-primary max-w-8xl pt-5 px-4 sm:px-8 lg:px-0 pb-10 ">
          <div className="text-white text-center py-6 w-full mx-auto">
            <div className="flex flex-col items-center">
              <H3 className="text-2xl sm:text-4xl font-light text-zinc-100 mt-4 mb-3 tracking-wide">
                Bitcoin Minetrix Stake-to-Mine Dashboard
              </H3>
              <P className="max-w-4xl text-base sm:text-lg font-semibold text-zinc-100 mb-4 tracking-normal">
                Manage all your BTCMTX tokens and mining credits in one place
                with the Bitcoin Minetrix dashboard. Gain cloud mining power
                using your mining credits earned through staking.
              </P>
            </div>

            <div className="relative max-w-4xl mx-auto flex justify-center mt-10 lg:mt-16 pb-3 origin-center">
              <img
                src="https://bitcoinminetrix.com/assets/images/cal-left.svg"
                alt="Cloud"
                className="hidden lg:block absolute left-0 top-0 w-full h-auto "
              />
              <img
                src="https://bitcoinminetrix.com/assets/images/svg-icons/bitcoin-mining-calculator.svg"
                alt="Stake-to-Mine Dashboard"
                className="w-full h-auto z-10"
              />
              <img
                src="https://bitcoinminetrix.com/assets/images/cal-left.svg"
                alt="Cloud"
                className="hidden lg:block absolute right-0 top-0 w-24 h-auto lg:w-32"
              />{" "}
              <img
                src="/calc-mob.svg"
                alt="Stake-to-Mine Dashboard Mobile"
                className="absolute -top-36 sm:top-12 md:-translate-y-[1%] right-0 lg:-right-10 w-64 md:w-64 h-auto z-40"
              />
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
      <div className="font-poppins  bg-white   ">
        <MaxWidthWrapper className="mt-4 bg-white max-w-8xl px-4 lg:px-0">
          <div className="container mx-auto px-4 text-white text-center py-6 w-full ">
            {/* Heading and Description */}
            <div className="text-center  flex flex-col items-center mb-10 pb-6">
              <H3 className="heading text-2xl sm:text-4xl font-normal text-zinc-600 mt-4 mb-2 tracking-wide">
                Join Our $30K Minedrop!
              </H3>
              <P className="heading max-w-5xl text-base sm:text-lg font-sans text-zinc-600 mt-4 mb-4 tracking-normal">
                Enter our Gleam competition below to stand a chance to win one
                of 10 prize allocations, each worth $3,000. We aim to reward our
                community with $30,000 worth of $BTCMTX tokens in total. Terms
                and conditions apply.
              </P>
            </div>

            {/* Content: Iframe and Image */}
            <div className="grid grid-cols-1 lg:grid-cols-2   justify-center items-center">
              {/* Iframe */}
              <div className="flex flex-1 flex-grow mb-8 lg:mb-0 px-3">
                <iframe
                  id="frameAirdrop"
                  src="https://gleam.io/FMTuv/bitcoin-minetrix-30000-minedrop"
                  allowFullScreen
                  allow="attribution-reporting"
                  title="Bitcoin Minetrix $30,000 Minedrop"
                  className="w-full h-96 border border-gray-700 rounded-md"
                  style={{ zIndex: 1 }}
                ></iframe>
              </div>

              {/* Image */}
              <div className=" flex justify-center">
                <img
                  src="/bitcoin-mining-competition.svg"
                  alt="Join Our $30K Minedrop!"
                  className="w-full h-auto "
                />
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
      <div
        className="font-poppins pb-8 border-b-[0.1px] border-zinc-300 bg-[#fdfbfa]   "
        id="roadmap"
      >
        <MaxWidthWrapper className="mt-4 bg-[#fdfbfa] max-w-8xl px-4 lg:px-0">
          <div className="container mx-auto px-4 text-white text-center py-6 w-full ">
            {/* Heading and Description */}
            <div className="text-center  flex flex-col items-center mb-10 pb-6">
              <H3 className="heading text-2xl sm:text-4xl font-normal text-zinc-600 mt-4 mb-2 tracking-wide">
                Roadmap
              </H3>
              <P className="heading max-w-5xl text-base sm:text-lg font-sans text-zinc-600 mt-4 mb-4 tracking-normal">
                Our project roadmap is set out in four phases, starting with a
                fair presale to raise the necessary funds for marketing and
                cloud mining operations and ending with the fully developed
                Bitcoin Minetrix platform.
              </P>
            </div>

            {/* <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4   justify-center items-center mx-4 space-x-7 "> */}
            <Carousel
              className="w-full "
              orientation="horizontal"
              opts={{
                align: "start",

                // loop: true,
              }}
            >
              <CarouselContent className="w-full max-w-xs mx-auto py-5">
                <CarouselItem>
                  <Card className="p-6 bg-white shadow-md rounded-lg">
                    <P className=" text-left text-base sm:text-base font-medium uppercase text-zinc-600/60 mt-4 mb-4 tracking-normal">
                      <span className="font-medium text-primary">Phase 1:</span>{" "}
                      Presale and token distribution
                    </P>
                    <p className="text-2xl text-left font-bold text-primary uppercase mb-4">
                      Presale
                    </p>
                    <ul className="list-disc list-inside text-left">
                      <li className="text-gray-600 mb-2">
                        Industry research and consultation
                      </li>
                      <li className="text-gray-600 mb-2">
                        Token, presale and staking contract development
                      </li>
                      <li className="text-gray-600 mb-2">
                        BTCMTX campaign - presale launch, claim and exchange
                        listings
                      </li>
                      <li className="text-gray-600">
                        Extensive multimedia marketing campaign launch
                      </li>
                    </ul>
                  </Card>
                </CarouselItem>
                <CarouselItem>
                  <Card className="p-6 bg-white shadow-md rounded-lg">
                    <P className=" text-left text-base sm:text-base font-medium uppercase text-zinc-600/60 mt-4 mb-4 tracking-normal">
                      <span className="font-medium text-primary">Phase 1:</span>{" "}
                      Presale and token distribution
                    </P>
                    <p className="text-2xl text-left font-bold text-primary uppercase mb-4">
                      Presale
                    </p>
                    <ul className="list-disc list-inside text-left">
                      <li className="text-gray-600 mb-2">
                        Industry research and consultation
                      </li>
                      <li className="text-gray-600 mb-2">
                        Token, presale and staking contract development
                      </li>
                      <li className="text-gray-600 mb-2">
                        BTCMTX campaign - presale launch, claim and exchange
                        listings
                      </li>
                      <li className="text-gray-600">
                        Extensive multimedia marketing campaign launch
                      </li>
                    </ul>
                  </Card>
                </CarouselItem>
                <CarouselItem>
                  <Card className="p-6 bg-white shadow-md rounded-lg">
                    <P className=" text-left text-base sm:text-base font-medium uppercase text-zinc-600/60 mt-4 mb-4 tracking-normal">
                      <span className="font-medium text-primary">Phase 1:</span>{" "}
                      Presale and token distribution
                    </P>
                    <p className="text-2xl text-left font-bold text-primary uppercase mb-4">
                      Presale
                    </p>
                    <ul className="list-disc list-inside text-left">
                      <li className="text-gray-600 mb-2">
                        Industry research and consultation
                      </li>
                      <li className="text-gray-600 mb-2">
                        Token, presale and staking contract development
                      </li>
                      <li className="text-gray-600 mb-2">
                        BTCMTX campaign - presale launch, claim and exchange
                        listings
                      </li>
                      <li className="text-gray-600">
                        Extensive multimedia marketing campaign launch
                      </li>
                    </ul>
                  </Card>
                </CarouselItem>
                <CarouselItem>
                  <Card className="p-6 bg-white shadow-md rounded-lg">
                    <P className=" text-left text-base sm:text-base font-medium uppercase text-zinc-600/60 mt-4 mb-4 tracking-normal">
                      <span className="font-medium text-primary">Phase 1:</span>{" "}
                      Presale and token distribution
                    </P>
                    <p className="text-2xl text-left font-bold text-primary uppercase mb-4">
                      Presale
                    </p>
                    <ul className="list-disc list-inside text-left">
                      <li className="text-gray-600 mb-2">
                        Industry research and consultation
                      </li>
                      <li className="text-gray-600 mb-2">
                        Token, presale and staking contract development
                      </li>
                      <li className="text-gray-600 mb-2">
                        BTCMTX campaign - presale launch, claim and exchange
                        listings
                      </li>
                      <li className="text-gray-600">
                        Extensive multimedia marketing campaign launch
                      </li>
                    </ul>
                  </Card>
                </CarouselItem>{" "}
                <CarouselItem>
                  <Card className="p-6 bg-white shadow-md rounded-lg">
                    <P className=" text-left text-base sm:text-base font-medium uppercase text-zinc-600/60 mt-4 mb-4 tracking-normal">
                      <span className="font-medium text-primary">Phase 1:</span>{" "}
                      Presale and token distribution
                    </P>
                    <p className="text-2xl text-left font-bold text-primary uppercase mb-4">
                      Presale
                    </p>
                    <ul className="list-disc list-inside text-left">
                      <li className="text-gray-600 mb-2">
                        Industry research and consultation
                      </li>
                      <li className="text-gray-600 mb-2">
                        Token, presale and staking contract development
                      </li>
                      <li className="text-gray-600 mb-2">
                        BTCMTX campaign - presale launch, claim and exchange
                        listings
                      </li>
                      <li className="text-gray-600">
                        Extensive multimedia marketing campaign launch
                      </li>
                    </ul>
                  </Card>
                </CarouselItem>{" "}
                <CarouselItem>
                  <Card className="p-6 bg-white shadow-md rounded-lg">
                    <P className=" text-left text-base sm:text-base font-medium uppercase text-zinc-600/60 mt-4 mb-4 tracking-normal">
                      <span className="font-medium text-primary">Phase 1:</span>{" "}
                      Presale and token distribution
                    </P>
                    <p className="text-2xl text-left font-bold text-primary uppercase mb-4">
                      Presale
                    </p>
                    <ul className="list-disc list-inside text-left">
                      <li className="text-gray-600 mb-2">
                        Industry research and consultation
                      </li>
                      <li className="text-gray-600 mb-2">
                        Token, presale and staking contract development
                      </li>
                      <li className="text-gray-600 mb-2">
                        BTCMTX campaign - presale launch, claim and exchange
                        listings
                      </li>
                      <li className="text-gray-600">
                        Extensive multimedia marketing campaign launch
                      </li>
                    </ul>
                  </Card>
                </CarouselItem>
              </CarouselContent>
              <div className="flex justify-center gap-2">
                {" "}
                <CarouselPrevious />
                <CarouselNext />
              </div>
            </Carousel>
            {/* </div> */}
          </div>
        </MaxWidthWrapper>
      </div>
      <div className=" font-poppins border-b-[0.1px] border-zinc-300 bg-[#fdfbfa]   ">
        <MaxWidthWrapper className=" bg-[#fdfbfa] max-w-8xl pt-5 px-4 sm:px-8 lg:px-0">
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2 p-4">
              <div className="relative hidden">
                <div id="chartdiv" style={{ height: "600px" }}>
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      position: "relative",
                    }}
                  >
                    <svg
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xlink="http://www.w3.org/1999/xlink"
                      role="group"
                      style={{
                        width: "100%",
                        height: "100%",
                        overflow: "visible",
                      }}
                    ></svg>
                  </div>
                </div>
                <p className="text-center mt-4">
                  <span className="block text-lg font-semibold">
                    Total Supply
                  </span>
                  <span className="block text-2xl font-bold">
                    4,000,000,000
                  </span>
                </p>
              </div>
              <ChartComponent />
            </div>

            <div className="w-full md:w-1/2 p-4">
              <div className="mb-6">
                <H3 className="heading text-2xl sm:text-4xl font-normal text-zinc-600 mt-4 mb-2 tracking-wide">
                  Tokenomics
                </H3>
                <P className="heading max-w-5xl text-base sm:text-lg font-sans text-zinc-600 mt-4 mb-4 tracking-normal">
                  42.5% of the BTCMTX tokens will be used to fund the bitcoin
                  mining operations of Bitcoin Minetrix. 35% of the tokens will
                  be allocated to marketing efforts and growing BTCMTX. 12.5% is
                  for BTCMTX staking rewards until the Bitcoin Minetrix cloud
                  mining platform is developed. 10% is allocated to community
                  rewards for active participation in the project.
                </P>

                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="">
                        {" "}
                        <P className="heading max-w-5xl text-base sm:text-lg font-sans text-zinc-700 tracking-normal">
                          Funds
                        </P>
                      </TableHead>
                      <TableHead>
                        {" "}
                        <P className="heading max-w-5xl text-base sm:text-lg font-sans text-zinc-700 tracking-normal">
                          % Allocation
                        </P>
                      </TableHead>
                      <TableHead>
                        {" "}
                        <P className="heading max-w-5xl text-base sm:text-lg font-sans text-zinc-700 tracking-normal">
                          Token
                        </P>
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {tokenomicsData.map((data, index) => (
                      <TableRow key={index}>
                        <TableCell>
                          <P className="heading max-w-5xl text-base sm:text-lg font-sans text-zinc-600 tracking-normal flex justify-start gap-2">
                            <img className="mr-2" src={data.imgSrc} alt="" />{" "}
                            {data.fund}{" "}
                          </P>
                        </TableCell>
                        <TableCell>
                          {" "}
                          <P className="heading max-w-5xl text-base sm:text-lg font-sans text-zinc-600 tracking-normal">
                            {data.allocation}{" "}
                          </P>
                        </TableCell>
                        <TableCell>
                          {" "}
                          <P className="heading max-w-5xl text-base sm:text-lg font-sans text-zinc-600 tracking-normal">
                            {" "}
                            {data.token}{" "}
                          </P>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
      <div
        className="font-poppins mb-8 border-y-[0.1px] border-zinc-300 bg-white   "
        id="faqs"
      >
        <MaxWidthWrapper className="font-poppins mt-16 bg-white max-w-8xl pt-5 px-4 sm:px-8 lg:px-0">
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2 p-4">
              <div className="mb-6">
                <H3 className="heading text-2xl sm:text-4xl font-normal text-zinc-600 mt-4 mb-2 tracking-wide">
                  Frequently Asked Questions
                </H3>
                <P className="heading max-w-5xl text-base sm:text-lg font-sans text-zinc-600 mt-4 mb-4 tracking-normal">
                  The answers to some of your most common questions are listed
                  here. If you can’t find the info you’re looking for, let our
                  moderators know in Telegram. You can also contact us{" "}
                  <span className="text-primary">
                    atInfo@Bitcoinminetrix.com
                  </span>
                </P>
              </div>{" "}
              <div className="w-full h-auto">
                <img
                  src="/faq.svg"
                  alt="Bitcoin Minetrix Solution"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            <div className="w-full md:w-1/2 p-4 flex justify-start">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem value={`item-${index}`}>
                    <AccordionTrigger>
                      <P className="heading max-w-5xl text-base text-left sm:text-lg font-sans text-zinc-700 tracking-normal">
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
        </MaxWidthWrapper>
      </div>
    </>
  );
};

export default Home;
