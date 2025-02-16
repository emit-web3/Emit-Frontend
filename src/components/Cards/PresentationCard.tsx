import React, { useState } from "react";
import Button, { ButtonColors, ButtonVariants } from "../Button/Button";
import { LuClock5 } from "react-icons/lu";
import { MdOutlinePerson } from "react-icons/md";
import { BsBarChart } from "react-icons/bs";
import clsx from "clsx";
import Modal from "../Modals/Modal";
import CardDescription from "../Modals/components/CardDescription";
import rickRoll from "../../assets/rickRoll.mp4";
import { toast } from "react-toastify";

export enum Level {
  Elementary = 1,
  Intermediate,
  Advanced,
}

export const LevelTitle: Record<Level, string> = {
  [Level.Elementary]: "مبتدی",
  [Level.Intermediate]: "متوسط",
  [Level.Advanced]: "پیشرفته",
};

interface Props {
  title: string;
  description: string;
  time: string;
  presenter: string;
  level: Level;
  details: string;
  price?: string;
  link: string;
}

const PresentationCard: React.FC<Props> = ({
  title,
  description,
  time,
  presenter,
  level,
  details,
  price = "رایگان",
  link,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [videoFinished, setVideoFinished] = useState(false);

  return (
    <>
      <div className="flex flex-col border rounded-xl shadow-lg bg-light-gray w-80 border-none text-dark-gray cursor-pointer h-96 hover:shadow-cyan-800/90 transition-all">
        <div className="flex flex-col bg-secondary-blue px-5 pt-4 pb-4 rounded-t-xl h-2/3">
          <h1 className="text-white text-2xl">{title}</h1>
          <h3 className="text-light-gray mt-2 line-clamp-3">{description}</h3>
        </div>
        <div className="flex flex-col px-5 py-4 gap-2 flex-grow">
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
                ["text-red-800"]: level === Level.Advanced,
                ["text-yellow-700"]: level === Level.Intermediate,
              })}
            >
              {LevelTitle[level]}
            </h3>
          </div>
          <p className="text-gray-600 mt-auto w-full text-left font-bold text-secondary-blue text-lg px-4">
            {price}
          </p>
          <div className="flex gap-4">
            <Button
              variant={ButtonVariants.OUTLINE}
              color={ButtonColors.SECONDARY_BLUE}
              className="w-full text-sm"
              onClick={() => setShowModal(true)}
            >
              اطلاعات بیشتر
            </Button>
            <Button
              variant={ButtonVariants.FILLED}
              color={ButtonColors.SECONDARY_BLUE}
              className="w-full text-sm !px-2"
              onClick={() => window.open(link, "_blank")}
            >
              ثبت نام
            </Button>
          </div>
        </div>
      </div>
      {showModal &&
        (title !== "ارائه‌ ویژه" ? (
          <Modal onClose={() => setShowModal(false)}>
            <CardDescription
              title={title}
              description={details}
              buttonText="ثبت نام"
              onClose={() => setShowModal(false)}
              buttonOnClick={() => window.open(link, "_blank")}
            />
          </Modal>
        ) : (
          <Modal onClose={() => setShowModal(false)}>
            <div className="w-full flex flex-col items-center justify-center">
              {!videoFinished ? (
                <>
                  <h1 className="mb-4">یکم صبر کن</h1>
                  <video
                    src={rickRoll}
                    autoPlay
                    className="rounded-lg"
                    onEnded={() => setVideoFinished(true)}
                  />
                </>
              ) : (
                <p>بزودی دیگه چه اطلاعات بیشتری بدیم</p>
              )}
            </div>
          </Modal>
        ))}
    </>
  );
};

export default PresentationCard;
