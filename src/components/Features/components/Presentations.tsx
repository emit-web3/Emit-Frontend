import React, { useState } from "react";
import Button, { ButtonColors } from "../../Button/Button";
import PresentationCard, { Level } from "../../Cards/PresentationCard";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import clsx from "clsx";
import Modal from "../../Modals/Modal";
import CardDescription from "../../Modals/components/CardDescription";
import presentations from "../../../assets/Presentations.json";

interface Props {
  active: boolean;
}

const Presentations = ({ active }: Props) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="w-full min-h-full justify-center items-center">
      <div className="w-full flex flex-col justify-center items-center py-16 gap-4">
        <p className="w-full md:w-1/2 text-light-gray text-center mb-4 text-xl">
          ارائه‌های EMIT از سطح مبتدی تا پیشرفته رو در بر میگیره، یعنی با هر سطح
          دانشی که از مفاهیم فنی بلاکچین داشته باشید، ارائه‌ای پیدا میشه که
          مناسب شما باشه.
        </p>
        <Button
          color={ButtonColors.SECONDARY_BLUE}
          className="w-max !py-2"
          suffix={<FaLongArrowAltLeft />}
          onClick={() => setShowModal(true)}
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
        {presentations
          .sort((a, b) => a.level - b.level)
          .map((presentation, index) => (
            <PresentationCard
              title={presentation.title}
              description={presentation.description}
              presenter={presentation.presenter}
              time={presentation.time}
              level={presentation.level}
              details={presentation.moreDetails}
              link={presentation.link}
              key={index}
            />
          ))}
      </div>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CardDescription
            title=""
            description={`ارائه‌های EMIT برای کسانی طراحی شده که می‌خواهند درک عمیق‌تری از توسعه و مفاهیم فنی بلاکچین به دست بیاورند. این ارائه‌ها طیف گسترده‌ای از مباحث را از سطح مبتدی تا پیشرفته پوشش می‌دهند، بنابراین بدون توجه به سطح دانش فنی شما، ارائه‌ای مناسب پیدا خواهید کرد.

اگرچه داشتن پیش‌زمینه برنامه‌نویسی می‌تواند یادگیری را آسان‌تر کند، اما برای شرکت در این دوره‌ها نیازی به دانش قبلی در حوزه بلاکچین نیست. تمامی ارائه‌ها شامل بخش پرسش و پاسخ هستند تا شرکت‌کنندگان بتوانند مفاهیم را بهتر درک کرده و دانسته‌های خود را تکمیل کنند.`}
            onClose={() => setShowModal(false)}
            buttonText="باشه"
          />
        </Modal>
      )}
    </div>
  );
};

export default Presentations;
