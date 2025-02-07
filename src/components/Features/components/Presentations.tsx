import React from "react";
import Button, { ButtonColors } from "../../Button/Button";
import PresentationCard, { Level } from "../../Cards/PresentationCard";
import { FaLongArrowAltRight } from "react-icons/fa";
import clsx from "clsx";

interface Props {
  active: boolean;
}

const Presentations = ({ active }: Props) => {
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
          اطلاعات بیشتر
        </Button>
      </div>
      <div
        className={clsx(
          "w-full flex justify-center gap-8 mt-4 overflow-auto mb-8",
          {
            ["flex-wrap"]: active,
          }
        )}
      >
        <PresentationCard
          title="Title"
          description="Description of this card"
          presenter="Ye Agha Pesar"
          price="Free"
          time="2025/12/13 15:00 - 17:00"
          level={Level.Elementary}
        />
        <PresentationCard
          title="Title"
          description="Description of this card"
          presenter="Ye Agha Pesar"
          price="Free"
          time="2025/12/13 15:00 - 17:00"
          level={Level.Advanced}
        />
        <PresentationCard
          title="Title"
          description="Description of this card"
          presenter="Ye Agha Pesar"
          price="Free"
          time="2025/12/13 15:00 - 17:00"
          level={Level.Intermediate}
        />
        <PresentationCard
          title="Title"
          description="Description of this card"
          presenter="Ye Agha Pesar"
          price="Free"
          time="2025/12/13 15:00 - 17:00"
          level={Level.Advanced}
        />
        <PresentationCard
          title="Title"
          description="Description of this card"
          presenter="Ye Agha Pesar"
          price="Free"
          time="2025/12/13 15:00 - 17:00"
          level={Level.Intermediate}
        />
        <PresentationCard
          title="Title"
          description="Description of this card"
          presenter="Ye Agha Pesar"
          price="Free"
          time="2025/12/13 15:00 - 17:00"
          level={Level.Advanced}
        />
        <PresentationCard
          title="Title"
          description="Description of this card"
          presenter="Ye Agha Pesar"
          price="Free"
          time="2025/12/13 15:00 - 17:00"
          level={Level.Intermediate}
        />
      </div>
    </div>
  );
};

export default Presentations;
