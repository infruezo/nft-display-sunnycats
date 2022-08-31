import React from "react";

const TeamMemberCard = ({ image, title, desc }) => {
  return (
    <>
      <div className="col-span-1 text-cloudyBlue w-full h-full ">
        <div className="bg-cloudyBlue flex-col aspect-square flex items-center justify-center rounded-md shadow-lg">
          <div className="w-[95%] h-[95%] rounded-md overflow-hidden">
            <img
              src={image}
              className="object-cover h-full w-full "
              alt="teamMember"
            />
          </div>
        </div>
        <div className="mt-2">
          <h1 className="text-center font-bold lg:text-2xl md:text-xl text-lg">
            {title}
          </h1>
          <h3 className="text-center">{desc}</h3>
        </div>
      </div>
    </>
  );
};

export default TeamMemberCard;
