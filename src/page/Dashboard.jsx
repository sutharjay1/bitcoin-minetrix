import React from "react";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import Marquee from "../components/marquee";
import { Button } from "../components/Button";
import { IoMdPaper } from "react-icons/io";
import { P } from "../components/typographypara";
import { H3 } from "../components/typographyh3";
import BarChart from "../components/BarChart";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="relative  w-full bg-white bg-gradient-to-t from-transparent to-blue-200/35">
      <div className="w-full">
        <div className=" absolute top-24 -ml-[42rem]   w-[100vw]">
          <Marquee
            cloud={true}
            className="w-full "
            repeat={1}
            reverse={true}
            cloudDuration={1.5}
          >
            <img src="/cloud.svg" alt="cloud" className="w-64  h-auto" />
          </Marquee>
        </div>
        <div className=" absolute top-52  -ml-[29rem] w-[100vw]">
          <Marquee
            cloud={true}
            className="w-full "
            repeat={1}
            reverse={true}
            cloudDuration={1.5}
          >
            <img src="/cloud.svg" alt="cloud" className="w-28  h-auto" />
          </Marquee>
        </div>
        <div className=" absolute top-36 -ml-[12rem]  w-[100vw]">
          <Marquee
            cloud={true}
            className="w-full "
            repeat={1}
            reverse={true}
            cloudDuration={1.5}
          >
            <img src="/cloud.svg" alt="cloud" className="w-48  h-auto" />
          </Marquee>
        </div>
        <div className=" absolute top-20 -ml-[64rem]  w-[100vw]">
          <Marquee
            cloud={true}
            className="w-full "
            repeat={1}
            reverse={true}
            cloudDuration={1.5}
          >
            <img src="/cloud.svg" alt="cloud" className="w-48  h-auto" />
          </Marquee>
        </div>
      </div>
      <MaxWidthWrapper className="max-w-8xl bg-transparent font-poppins pt-5 px-4 sm:px-8 lg:px-0 ">
        <div className="w-full relative pt-20 lg:pt-28 py-10 flex flex-col md:flex-row items-center justify-between ">
          <div className="flex  flex-col justify-start text-left flex-1">
            <div className="text-3xl sm:text-4xl font-semibold mb-4">
              <H3 className="block font-normal text-3xl sm:text-4xl text-zinc-700">
                Welcome to BTCMTX Staking
              </H3>
            </div>
            <P className="flex text-base font-normal text-zinc-600 max-w-3xl mb-6 ">
              BTCMTX token rewards will be distributed to users at a rate of
              158.5 BTCMTX per ETH block. Rewards will be payable over 2 years
              and are determined by your share of the staking pool and annual
              returns percentage.
            </P>
          </div>
          <div className="flex w-full md:w-auto h-full items-center justify-center">
            <Button
              variant="outline"
              className="btn w-full sm:w-auto border-primary text-primary border-[1px] p-6 rounded-md border-zinc-700  bg-primary hover:bg-zinc-400 transition-colors text-zinc-100  text-xl duration-300 ease-in-out flex items-center justify-center gap-2 uppercase"
            >
              Withdraw staked token
            </Button>
          </div>
        </div>

        {/* cc */}
        <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 p-6 rounded-lg pb-14">
          <div className="flex flex-col gap-4 bg-white p-6 rounded-3xl border border-zinc-700">
            <div className="flex flex-col gap-4">
              <div>
                <span className="text-xs sm:text-sm font-semibold text-gray-500 uppercase mb-1">
                  Staked Balance
                </span>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-primary flex items-start">
                  0
                  <span className="text-xs sm:text-sm font-bold text-gray-500 ms-2">
                    BTCMTX
                  </span>
                </h2>
              </div>

              <div>
                <span className="text-xs sm:text-sm font-semibold text-gray-500 uppercase mb-1">
                  Your Balance
                </span>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-primary flex items-start">
                  0
                  <span className="text-xs sm:text-sm font-bold text-gray-500 ms-2">
                    BTCMTX
                  </span>
                </h2>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 bg-white p-4 rounded-3xl border border-zinc-700">
            <div className="flex items-center justify-between">
              <span className="text-xs sm:text-sm font-semibold text-gray-500 uppercase mb-1">
                % of Pool
              </span>
              <img
                src="https://bitcoinminetrix.com/assets/images/svg-icons/info-icon.svg"
                alt="info"
                className="w-4 sm:w-5 h-4 sm:h-5 cursor-pointer"
              />
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-2">
              0%
            </h2>
            <div className="flex flex-col gap-2 mt-2">
              <span className="text-xs sm:text-sm font-semibold text-gray-500 uppercase mb-1">
                Total Staked
              </span>
              <h2 className="w-fit text-xl sm:text-2xl md:text-3xl font-semibold text-primary flex items-start">
                834,684,471{" "}
                <span className="text-xs sm:text-sm font-bold text-gray-500 ms-2">
                  BTCMTX
                </span>
              </h2>
            </div>
          </div>

          <div className="flex flex-col gap-2 bg-white p-4 rounded-3xl border border-zinc-700">
            <span className="text-xs sm:text-sm font-semibold text-gray-500 uppercase mb-1">
              Estimated Rewards
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-2">
              50%{" "}
              <sup className="text-xs sm:text-sm font-bold text-gray-500 ps-2">
                p/a
              </sup>
            </h2>
            <ul className="list-none p-0 mt-3 mb-0">
              <li className="flex items-center text-gray-700 text-xs sm:text-sm">
                <img
                  src="https://bitcoinminetrix.com/assets/images/svg-icons/ani-arrow.svg"
                  height="8"
                  alt="arrow"
                  className="me-2"
                />
                Rewards rate is dynamic
              </li>
              <li className="flex items-center text-gray-700 text-xs sm:text-sm">
                <img
                  src="https://bitcoinminetrix.com/assets/images/svg-icons/ani-arrow.svg"
                  height="8"
                  alt="arrow"
                  className="me-2"
                />
                Monthly = Rewards % / 12
              </li>
              <li className="flex items-center text-gray-700 text-xs sm:text-sm">
                <img
                  src="https://bitcoinminetrix.com/assets/images/svg-icons/ani-arrow.svg"
                  height="8"
                  alt="arrow"
                  className="me-2"
                />
                Daily = Rewards % / 365
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-2 bg-white p-4 rounded-3xl border border-zinc-700">
            <span className="text-xs sm:text-sm font-semibold text-gray-500 uppercase mb-1">
              Current Rewards
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold flex items-start">
              158.5{" "}
              <span className="text-xs sm:text-sm font-bold text-gray-500 ms-2">
                Per ETH Block
              </span>
            </h2>
          </div>
          <div className="flex flex-col gap-2 bg-white px-4 pt-4 pb-2 rounded-3xl border border-zinc-700">
            <span className="text-xs sm:text-sm font-semibold text-gray-500 uppercase mb-1">
              Total Rewards
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold flex items-start">
              0
              <span className="text-xs sm:text-sm font-bold text-gray-500 ms-2">
                BTCMTX
              </span>
            </h2>
            <div className="flex w-full md:w-auto h-full items-center justify-center">
              <Button
                variant="outline"
                className="btn w-full sm:w-auto border-primary text-primary border-[1px] p-6 rounded-md border-zinc-700  bg-primary hover:bg-zinc-400 transition-colors text-zinc-100  text-base duration-300 ease-in-out flex items-center justify-center gap-2 uppercase"
              >
                Claim Rewards
              </Button>
            </div>
          </div>
        </div>
        <div>
          <BarChart />
          <div className="my-4 pt-4 pb-6 text-center flex justify-center gap-2 items-center">
            <P className="text-base font-medium text-zinc-800">Powered by</P>
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
      </MaxWidthWrapper>
    </div>
  );
};

export default Dashboard;
