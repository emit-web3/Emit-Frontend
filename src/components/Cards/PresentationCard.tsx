import React, { useState } from "react";
import Button, { ButtonColors, ButtonVariants } from "../Button/Button";
import { HiChartBar } from "react-icons/hi";
import { LuClock5 } from "react-icons/lu";
import { MdOutlinePerson } from "react-icons/md";
import { BsBarChart } from "react-icons/bs";
import clsx from "clsx";
import Modal from "../Modals/Modal";
import CardDescription from "../Modals/components/CardDescription";

export enum Level {
  Elementary = "Elementary",
  Intermediate = "Intermediate",
  Advanced = "Advanced",
}

interface Props {
  title: string;
  description: string;
  time: string;
  presenter: string;
  level: Level;
  price: string;
}

const PresentationCard: React.FC<Props> = ({
  title,
  description,
  time,
  presenter,
  level,
  price,
}) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="border rounded-xl shadow-lg bg-light-gray max-w-80 w-max border-none text-dark-gray cursor-pointer">
        <div className="flex flex-col bg-secondary-blue px-5 pt-4 pb-8 rounded-t-xl">
          <h1 className="text-white text-2xl">{title}</h1>
          <h3 className="text-light-gray mt-2">{description}</h3>
        </div>
        <div className="flex flex-col px-5 py-4 gap-2">
          <div className="flex items-center gap-2">
            <LuClock5 />
            <h3>{time}</h3>
          </div>
          <div className="flex items-center gap-2">
            <MdOutlinePerson />
            <h3>{presenter}</h3>
          </div>
          <div className="flex items-center gap-2">
            <BsBarChart />
            <h3
              className={clsx("font-medium", {
                ["text-green-800"]: level === Level.Elementary,
                ["text-yellow-700"]: level === Level.Advanced,
                ["text-red-800"]: level === Level.Intermediate,
              })}
            >
              {level}
            </h3>
          </div>
          <p className="text-gray-600 mt-2 w-full text-right font-bold text-secondary-blue text-lg">
            Free
          </p>
          <div className="flex gap-4 mt-2">
            <Button
              variant={ButtonVariants.OUTLINE}
              color={ButtonColors.SECONDARY_BLUE}
              className="text-sm"
              onClick={() => setShowModal(true)}
            >
              More Info
            </Button>
            <Button
              variant={ButtonVariants.FILLED}
              color={ButtonColors.SECONDARY_BLUE}
              className="text-sm"
            >
              Add To Cart
            </Button>
          </div>
        </div>
      </div>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CardDescription
            title="Title"
            description="Salam Salam Salam Salam Salam Salam Salam Salam Salam Salam Salam Salam Salam Salam Salam Salam Salam Salam "
            onClose={() => setShowModal(false)}
          />
        </Modal>
      )}
    </>
  );
};

export default PresentationCard;
