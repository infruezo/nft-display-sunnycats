import React from "react";
import FaqCard from "./FaqCard";

const Faq = () => {
  return (
    <div
      className="w-full bg-mainBlue pt-20 pb-24 duration-300 scroll-mt-20"
      id="faq"
    >
      <h1 className="text-5xl text-center tracking-wider text-cloudyBlue">
        FAQ
      </h1>

      <div className="w-11/12 md:w-10/12  mx-auto mt-10">
        <div className="w-full ">
          <FaqCard
            question="What is SunnyCats NFT?"
            answer="SunnyCats is the result of months of work designing a collection of characters that embody the soul of Solana while serving a mission to give back to the community."
          />
          <FaqCard
            question="How do I mint SunnyCats?"
            answer="On the launch date, you will need to go to the Mint page and connect your wallet using one of the supported wallet providers (Phantom or Sollet). Simply click mint and you will be asked to approve the transaction in your wallet. Once all SunnyCats are sold out, the Mint button will not longer be available."
          />
          <FaqCard
            question="When will I receive my NFTs?"
            answer="Your NFT will be delivered directly to your wallet shortly after the mint transaction is complete and verified on the blockchain. Please allow some time for it to show up."
          />
          <FaqCard
            question="Will I have commercial rights to my SunnyCats NFTs?"
            answer="Yes, you will have full commercial rights to your NFT, including any collaborations that we do within the community."
          />
          <FaqCard
            question="Who is the team behind SunnyCats?"
            answer="SunnyCats was developed by a team of artists and developers who are dedicated to making a positive contribution to the NFT community on Solana."
          />
        </div>
      </div>
    </div>
  );
};

export default Faq;
