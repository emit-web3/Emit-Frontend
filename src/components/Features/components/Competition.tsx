import React from "react";
import clsx from "clsx";
import Button, { ButtonColors } from "../../Button/Button";

// -- Assets
import handShake from "../../../assets/handshake.png";
import trophy from "../../../assets/trophy.png";
import blueTrophy from "../../../assets/blueTrophy.png";
import goldMedal from "../../../assets/goldMedal.png";
import ironMedal from "../../../assets/ironMedal.png";
import bronzeMedal from "../../../assets/bronzeMedal.png";

/** If you use an "active" prop for responsive wrapping (as you do in Presentations/Workshops),
 *  include this interface. Otherwise, you can omit the "Props" interface entirely
 *  if you don't need the wrapping logic.
 */
interface Props {
  active?: boolean;
}

enum cardVariant {
  BLUE,
  WHITE,
}

// A local map from each rank index to the correct medal image
const prizeMedals: { [index: number]: string } = {
  0: goldMedal,
  1: ironMedal,
  2: bronzeMedal,
};

// Child card component for each competition
const CompetitionCard = ({
  variant = cardVariant.BLUE,
  title,
  desc,
  prizes,
  price,
  link
}: {
  variant?: cardVariant;
  title: string;
  desc: string;
  prizes: number[];
  price: string;
  link:string;
}) => {
  return (
    <div
      className={clsx("py-6 px-16 rounded-xl shadow-lg", {
        ["text-secondary-blue bg-light-gray"]: variant === cardVariant.WHITE,
        ["text-light-gray bg-secondary-blue"]: variant === cardVariant.BLUE,
      })}
    >
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="mt-2 whitespace-pre-line">{desc}</p>
      {/* 
        The "whitespace-pre-line" class ensures line breaks 
        in your description string (where you have \n) are shown properly.
      */}

      {/* Prizes Section */}
      <div className="w-full flex justify-between items-center mt-6">
        <div className="flex flex-col">
          <h2 className="text-xl font-bold mb-4">جوایز:</h2>
          {prizes.map((prize, index) => (
            <div key={index} className="flex gap-2 mb-2">
              <img src={prizeMedals[index]} alt={`${index}-medal`} />
              <p className="text-lg">{prize} میلیون تومان</p>
            </div>
          ))}
        </div>

        <img
          src={variant === cardVariant.BLUE ? trophy : blueTrophy}
          alt="trophy"
          className="max-h-[184px]"
        />
      </div>

      {/* Registration Fee and Button */}
      <div className="w-full flex justify-between items-center mt-8">
        <div className="flex gap-2 items-center">
          <h2 className="text-xl font-bold">هزینه ثبت نام:</h2>
          <h2 className="text-lg">{price}</h2>
        </div>
        <Button
          color={
            variant === cardVariant.BLUE
              ? ButtonColors.WHITE
              : ButtonColors.SECONDARY_BLUE
          }
          className="!py-4"
          onClick={() => {
            window.open(link, '_blank');
          }}
        >
          ثبتنام
        </Button>
      </div>
    </div>
  );
};

const Competition: React.FC<Props> = ({ active = false }) => {
  return (
    <div className="w-full flex flex-col items-center text-white mt-10 h-full">
      <h1 className="text-3xl font-bold">مسابقه‌ای با ۳۰ میلیون تومان جایزه!</h1>

      {/* If you want the top part to wrap when "active" is true, you can wrap it similarly: */}
      <div
        className={clsx(
          "w-full flex flex-col-reverse md:flex-row justify-between items-center mt-4",
          {
            ["flex-wrap"]: active,
          }
        )}
      >
        <img src={handShake} alt="handshake" className="w-1/2" />
        <div className="flex flex-col w-full md:w-1/2 px-4">
          <h2 className="text-3xl font-bold mb-4">شرح مسابقه</h2>
          <p className="text-lg text-light-gray">
            یه سری اسمارت کانترکت وجود داره که بهتون داده میشه, داخل هرکدوم یه
            مقداری پول هست بسته به میزان سختی اون مساله هر کانترکت یه مدل باگ
            امنیتی داره و شما باید اون رو کشف و استفاده کنید که پول داخلش رو ازش
            بیرون بکشید, اون پولی که جمع میکنید امتیاز شمارو مشخص میکنه
          </p>
        </div>
      </div>

      {/* Cards Section */}
      <div className="w-full flex flex-col gap-10 mt-10 mb-10 px-4">
        <CompetitionCard
          title="مسابقه حضوری"
          desc={`یه سری اسمارت کانترکت وجود داره که بهتون داده میشه, داخل هرکدوم یه مقداری پول هست بسته به میزان سختی اون مساله
هر کانترکت یه مدل باگ امنیتی داره و شما باید اون رو کشف و استفاده کنید که پول داخلش رو ازش بیرون بکشید, اون پولی که جمع میکنید امتیاز شمارو مشخص میکنه`}
          prizes={[9, 6, 3]}
          price="100 هزار تومان"
          link="https://evand.com/events/emit-competition"
        />

        {/* <CompetitionCard
          title="مسابقه غیر حضوری"
          desc={`یه سری اسمارت کانترکت وجود داره که بهتون داده میشه, داخل هرکدوم یه مقداری پول هست بسته به میزان سختی اون مساله
هر کانترکت یه مدل باگ امنیتی داره و شما باید اون رو کشف و استفاده کنید که پول داخلش رو ازش بیرون بکشید, اون پولی که جمع میکنید امتیاز شمارو مشخص میکنه`}
          prizes={[9, 6, 3]}
          price="رایگان"
          variant={cardVariant.WHITE}
        /> */}
      </div>
    </div>
  );
};

export default Competition;
