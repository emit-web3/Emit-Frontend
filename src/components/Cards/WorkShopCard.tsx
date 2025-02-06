import React from "react";
import Button, { ButtonColors, ButtonVariants } from "../Button/Button";
import { HiChartBar } from "react-icons/hi";
import { LuClock5 } from "react-icons/lu";
import { MdOutlinePerson } from "react-icons/md";
import { BsBarChart } from "react-icons/bs";
import clsx from "clsx";
import { Level } from "./PresentationCard";

interface Props {
  title: string;
  description: string;
  time: string;
  presenter: string;
  level: Level;
  price: string;
  dark: boolean;
}

const WorkShopCard: React.FC<Props> = ({
  title,
  description,
  time,
  presenter,
  level,
  price,
  dark,
}) => {
  return (
    <div
      className={clsx(
        "rounded-xl shadow-lg w-full flex flex-col p-6 cursor-pointer",
        {
          ["bg-secondary-blue text-white"]: dark,
          ["bg-light-gray text-secondary-blue"]: !dark,
        }
      )}
    >
      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="text-md">{description}</p>

      <div className="flex gap-4 mt-4">
        <div className="flex items-center gap-2">
          <LuClock5 />
          <h3 className="w-max">{time}</h3>
        </div>
        <div className="flex items-center gap-2">
          <MdOutlinePerson />
          <h3 className="w-max">{presenter}</h3>
        </div>
        <div className="flex items-center gap-2">
          <BsBarChart />
          <h3
            className={clsx("font-medium w-max", {
              ["text-green-800"]: level === Level.Elementary,
              ["text-yellow-700"]: level === Level.Advanced,
              ["text-red-800"]: level === Level.Intermediate,
            })}
          >
            {level}
          </h3>
        </div>
      </div>
      <div className="w-full flex justify-between mt-3">
        <h2 className="text-xl font-medium">{price}</h2>
        <Button
          variant={ButtonVariants.FILLED}
          color={dark ? ButtonColors.WHITE : ButtonColors.SECONDARY_BLUE}
        >
          Add To Card
        </Button>
      </div>
    </div>
  );
};

export default WorkShopCard;
