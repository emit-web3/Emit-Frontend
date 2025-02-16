import React from "react";
import AutIcon from "./AUTIcon";

interface Props {
  id: number;
  name: string;
  role: string;
  image: string;
}

const PresenterCard = (props: Props) => {
  return (
    <div className="bg-[#0B253A] rounded-xl shadow-lg w-72 overflow-hidden relative m-2.5 hover:shadow-zinc-400 transition-shadow duration-300 ease-in-out">
      <div>
        <img alt={props.name} src={props.image} width={288} height={450} />
        <div className="absolute my-2 bottom-0 w-[90%] left-1/2 transform -translate-x-1/2 bg-gray-100 px-4 py-3 rounded-lg shadow-md flex flex-col items-center justify-center space-y-1 bg-light-gray">
          <div className="flex items-center justify-around w-full">
            <div>
              <span className="text-[#0B253A] font-bold text-lg">
                {props.name}
              </span>
              <br />
              <span className="text-[#D05353] font-medium">{props.role}</span>
            </div>
            <div className="w-8 h-8">
              <AutIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PresenterCard;
