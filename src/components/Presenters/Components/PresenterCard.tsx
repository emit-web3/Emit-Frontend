import React, { useState } from "react";
import AutIcon from "./AUTIcon";
import Modal from "../../Modals/Modal";
import CardDescription from "../../Modals/components/CardDescription";

interface Props {
  id: number;
  name: string;
  role?: string;
  desc: string;
  image: string;
  logo: string;
}

const PresenterCard = (props: Props) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <>
      <div
        className="bg-gray rounded-xl shadow-lg w-72 overflow-hidden relative m-2.5 hover:shadow-zinc-400 transition-shadow duration-300 ease-in-out h-80 cursor-pointer"
        onClick={() => setShowDetails(true)}
      >
        <div>
          <img alt={props.logo} src={props.image} width={288} height={450} />
          <div className="absolute my-2 bottom-0 w-[90%] left-1/2 transform -translate-x-1/2 bg-gray-100 px-4 py-3 rounded-lg shadow-md flex flex-col items-center justify-center space-y-1 bg-light-gray h-max">
            <div className="flex items-center justify-around w-full">
              <div>
                <span className="text-[#0B253A] font-bold text-lg">
                  {props.name}
                </span>
                <br />
                {props.role && (
                  <span className="text-[#D05353] font-medium">
                    {props.role}
                  </span>
                )}
              </div>
              <div className="w-8 h-8">
                {props.logo === "amirkabir" ? (
                  <AutIcon />
                ) : (
                  <img alt={props.logo} src={`/${props.logo}`} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {showDetails && (
        <Modal onClose={() => setShowDetails(false)}>
          <CardDescription
            title={props.name}
            description={props.desc}
            buttonText="بستن"
            onClose={() => setShowDetails(false)}
          />
        </Modal>
      )}
    </>
  );
};

export default PresenterCard;
