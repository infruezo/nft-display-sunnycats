import React from "react";
import TeamMemberCard from "./TeamMemberCard";

const Team = () => {
  return (
    <div
      className="w-full bg-mainBlue pt-20 pb-24 lg:pb-40 text-cloudyBlue scroll-mt-24"
      id="team"
    >
      <h1 className="text-5xl text-center">TEAM</h1>

      <div className="w-8/12 md:w-10/12 lg:w-9/12 mx-auto gap-6  mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        <TeamMemberCard
          image="/images/Team/nft-1.png"
          title="Purrmaster"
          desc="Chief Cat Herder"
        />
        <TeamMemberCard
          image="/images/Team/nft-2.png"
          title="Sir Purr"
          desc="Head of Pawpaganda"
        />
        <TeamMemberCard
          image="/images/Team/nft-3.png"
          title="Tech Cat"
          desc="Catchain Engineer"
        />
        <TeamMemberCard
          image="/images/Team/nft-4.png"
          title="Lan Anh"
          desc="Artist"
        />
        <TeamMemberCard
          image="/images/Team/nft-5.png"
          title="Tabbey Road"
          desc="Keyboard Warmer"
        />
      </div>
    </div>
  );
};

export default Team;
