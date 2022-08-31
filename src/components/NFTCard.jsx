import React from "react";

const NFTCard = ({ image }) => {
  return (
    <div className="aspect-square h-80 w-80 mx-1">
      <img
        src={image}
        alt="nft"
        className="object-cover w-full h-full shadow-xl rounded-md cursor-pointer"
      />
    </div>
  );
};

export default NFTCard;
