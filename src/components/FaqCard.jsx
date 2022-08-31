import React, { useState } from "react";

const FaqCard = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <details className="w-full tracking-wide text-cloudyBlue py-4 bg-gray-900/60 px-4 open:my-6 rounded-md open:shadow-lg ring-[0.5px] ring-gray-900 duration-300 outline-none active:outline-none">
      <summary
        onClick={() => {
          setOpen(!open);
        }}
        className="cursor-pointer font-semibold flex justify-between items-center"
      >
        <p>{question}</p>
        {open ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 15l7-7 7 7"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        )}
      </summary>
      <p className="py-2 font-medium">{answer}</p>
    </details>
  );
};

export default FaqCard;
