import clsx from "clsx";
import React from "react";
import Button, { ButtonColors } from "../../Button/Button";
import { FaLongArrowAltRight } from "react-icons/fa";
import WorkShopCard from "../../Cards/WorkShopCard";
import { Level } from "../../Cards/PresentationCard";

interface Props {
  active: boolean;
}

const WorkShops = ({ active }: Props) => {
  return (
    <div className="w-full min-h-full justify-center items-center">
      <div className="w-full flex flex-col justify-center items-center py-16 gap-4">
        <p className="w-1/3 text-light-gray text-center mb-4">
          There are many variations of passages of Lorem Ipsum available but the
          majority have suffered alteration in some form.
        </p>
        <Button
          color={ButtonColors.SECONDARY_BLUE}
          className="w-max"
          suffix={<FaLongArrowAltRight />}
        >
          Learn More
        </Button>
      </div>
      <div
        className={clsx(
          "w-full flex justify-center gap-8 mt-4 overflow-auto mb-4",
          {
            ["flex-wrap"]: active,
          }
        )}
      >
        <WorkShopCard
          title="Title"
          description="Description of this card"
          presenter="Ye Agha Pesar"
          price="Free"
          time="2025/12/13 15:00 - 17:00"
          level={Level.Intermediate}
          dark={true}
        />
        <WorkShopCard
          title="Title"
          description="Description of this card"
          presenter="Ye Agha Pesar"
          price="Free"
          time="2025/12/13 15:00 - 17:00"
          level={Level.Intermediate}
          dark={false}
        />
      </div>
    </div>
  );
};

export default WorkShops;
