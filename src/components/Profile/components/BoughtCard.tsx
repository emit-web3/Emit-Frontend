import React from "react";

interface Props {
  index: number;
  title: string;
  description: string;
}

const BoughtCard = ({ index, title, description }: Props) => {
  return (
    <div className="w-5/12 px-4 py-2 bg-light-gray flex justify-between items-center text-light-gray rounded-lg h-max">
      <p className="p-2 bg-light-blue rounded-lg h-8 w-8 text-center">
        {index}
      </p>
      <div className="w-full flex flex-col text-lighter-blue mr-4">
        <h3 className="text-xl">{title}</h3>
        <p className="text-lg">{description}</p>
      </div>
    </div>
  );
};

export default BoughtCard;
