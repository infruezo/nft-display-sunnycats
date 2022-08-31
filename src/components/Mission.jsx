import React from "react";

const Mission = () => {
  return (
    <div className="w-full bg-mainBlue pt-28 -scroll-mt-52" id="mission">
      <div className="w-full mission "></div>
      <div className="bg-cloudyBlue pt-4 pb-16 w-full">
        <div className="w-11/12 lg:w-10/12 flex flex-col-reverse lg:flex-row mx-auto text-mainBlue items-center justify-center lg:space-x-16">
          <div className="flex-1 mt-10 lg:mt-0 text-center lg:text-left">
            <h1 className="lg:text-6xl text-4xl">MISSION</h1>
            <p className="mt-12 text-lg text-justify">
              There is no greater injustice than an innocent man or woman
              serving time behind bars for a crime they did not commit. That’s
              why we made SunnyCats, to build a community focused on giving
              back, raising awareness, and making the world around us a brighter
              place. <br />
              <br />
              100% of mint proceeds will be donated to the Georgia Innocence
              Project.
              <br />
              <br />
              The SunnyCats community will be unlike any other NFT community –
              actively making a difference on-chain, and off.
            </p>
          </div>
          <div className="flex-1">
            <img src="/images/image-1.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
