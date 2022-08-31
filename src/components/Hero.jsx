import React from "react";

const Hero = () => {
  return (
    <div
      className="w-full z-10 bg-mainBlue min-h-screen pb-36 pt-20 text-cloudyBlue"
      id="top"
    >
      <div className="w-11/12 mx-auto md:w-10/12 flex flex-col md:flex-row mt-8 md:space-x-12 space-y-12 md:space-y-0 ">
        <div className="flex-1 items-center justify-center flex flex-col">
          <img src="/images/logo.png" alt="" />
          <p className="mt-12 text-center md:text-2xl text-xl">
            A collection of 10,000 artfully designed cats living on the Solana
            blockchain with a mission to benefit the community.
          </p>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center">
          <img src="/images/hero.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
