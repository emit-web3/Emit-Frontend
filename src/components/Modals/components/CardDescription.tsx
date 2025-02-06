import React from "react";
import Button, { ButtonColors } from "../../Button/Button";
import { IoMdClose } from "react-icons/io";

interface Props {
  title: string;
  description: string;
  onClose: () => void;
}

const CardDescription = ({ title, description, onClose }: Props) => {
  return (
    <>
      <div className="w-full flex justify-between">
        <h1 className="text-2xl font-bold text-secondary-blue">{title}</h1>
        <IoMdClose
          className="text-2xl text-secondary-blue cursor-pointer"
          onClick={onClose}
        />
      </div>
      <p className="text-lg text-dark-gray mt-4 ml-2">{description}</p>
      <div className="w-full flex flex-row-reverse mt-8">
        <Button color={ButtonColors.SECONDARY_BLUE}>Ad to Cart</Button>
      </div>
    </>
  );
};

export default CardDescription;
