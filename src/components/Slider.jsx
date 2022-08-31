import React from "react";
import Marquee from "react-fast-marquee";
import NFTCard from "./NFTCard";

const Slider = () => {
  const NFT_Array = [
    "/images/NFTs/nft-0.png",
    "/images/NFTs/nft-1.png",
    "/images/NFTs/nft-2.png",
    "/images/NFTs/nft-3.png",
    "/images/NFTs/nft-4.png",
    "/images/NFTs/nft-5.png",
    "/images/NFTs/nft-6.png",
    "/images/NFTs/nft-7.png",
    "/images/NFTs/nft-8.png",
    "/images/NFTs/nft-9.png",
    "/images/NFTs/nft-10.png",
    "/images/NFTs/nft-11.png",
    "/images/NFTs/nft-12.png",
    "/images/NFTs/nft-13.png",
    "/images/NFTs/nft-14.png",
    "/images/NFTs/nft-15.png",
    "/images/NFTs/nft-16.png",
    "/images/NFTs/nft-17.png",
    "/images/NFTs/nft-18.png",
    "/images/NFTs/nft-19.png",
    "/images/NFTs/nft-20.png",
    "/images/NFTs/nft-21.png",
    "/images/NFTs/nft-22.png",
    "/images/NFTs/nft-23.png",
  ];
  return (
    <div className="w-full">
      <div className="waves-up w-full"></div>
      <div className="h-96 bg-white  w-full  flex items-center justify-center">
        <Marquee play loop={0} speed={100} gradient={false}>
          {NFT_Array.map((item) => (
            <NFTCard image={item} />
          ))}
        </Marquee>
      </div>
      <div className="waves-down w-full"></div>
    </div>
  );
};

export default Slider;
