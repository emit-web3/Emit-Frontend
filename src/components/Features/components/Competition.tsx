import React from "react";
import handShake from "../../../assets/handshake.png";
import trophy from "../../../assets/trophy.png";
import blueTrophy from "../../../assets/blueTrophy.png";
import goldMedal from "../../../assets/goldMedal.png";
import ironMedal from "../../../assets/ironMedal.png";
import bronzeMedal from "../../../assets/bronzeMedal.png";
import clsx from "clsx";
import Button, { ButtonColors } from "../../Button/Button";

const Competition = () => {
  return (
    <div className="flex flex-col justify-center items-center text-white mt-10 h-full overflow-auto">
      <h1 className="text-3xl font-bold">
        مسابقه‌ای با ۳۰ میلیون تومان جایزه!
      </h1>
      <div className="w-full flex flex-row-reverse justify-between items-center mt-4">
        <img src={handShake} alt="handshake" className="w-1/2" />
        <div className="flex flex-col">
          <h2 className="text-3xl font-bold mb-4">شرح مسابقه</h2>
          <p className="text-lg text-light-gray w-1/2">
            یه سری اسمارت کانترکت وجود داره که بهتون داده میشه, داخل هرکدوم یه
            مقداری پول هست بسته به میزان سختی اون مساله هر کانترکت یه مدل باگ
            امنیتی داره و شما باید اون رو کشف و استفاده کنید که پول داخلش رو ازش
            بیرون بکشید, اون پولی که جمع میکنید امتیاز شمارو مشخص میکنه
          </p>
        </div>
      </div>

      <div className="w-full flex flex-col gap-10 mt-10 mb-10">
        <CompetitionCard
          title="مسابقه حضوری"
          desc="یه سری اسمارت کانترکت وجود داره که بهتون داده میشه, داخل هرکدوم یه مقداری پول هست بسته به میزان سختی اون مساله
هر کانترکت یه مدل باگ امنیتی داره و شما باید اون رو کشف و استفاده کنید که پول داخلش رو ازش بیرون بکشید, اون پولی که جمع میکنید امتیاز شمارو مشخص میکنه"
          prizes={[9, 6, 3]}
          price="100 هزار تومان"
        />
        <CompetitionCard
          title="مسابقه غیر حضوری"
          desc="یه سری اسمارت کانترکت وجود داره که بهتون داده میشه, داخل هرکدوم یه مقداری پول هست بسته به میزان سختی اون مساله
هر کانترکت یه مدل باگ امنیتی داره و شما باید اون رو کشف و استفاده کنید که پول داخلش رو ازش بیرون بکشید, اون پولی که جمع میکنید امتیاز شمارو مشخص میکنه"
          prizes={[9, 6, 3]}
          price="رایگان"
          variant={cardVariant.WHITE}
        />
      </div>
    </div>
  );
};

enum cardVariant {
  BLUE,
  WHITE,
}

const prizeMedals: { [key: number]: string } = {
  [0]: goldMedal,
  [1]: ironMedal,
  [2]: bronzeMedal,
};

const CompetitionCard = ({
  variant = cardVariant.BLUE,
  title,
  desc,
  prizes,
  price,
}: {
  variant?: cardVariant;
  title: string;
  desc: string;
  prizes: number[];
  price: string;
}) => {
  return (
    <div
      className={clsx("py-6 px-16 rounded-xl shadow-lg", {
        ["text-secondary-blue bg-light-gray"]: variant === cardVariant.WHITE,
        ["text-light-gray bg-secondary-blue"]: variant === cardVariant.BLUE,
      })}
    >
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className={"text-x mt-2"}>{desc}</p>
      <div className="w-full flex justify-between items-center mt-4">
        <div className="flex flex-col">
          <h2 className="text-xl font-bold mt-6 mb-4">جوایز:</h2>
          {prizes.map(
            (prize, index) =>
              index in prizeMedals && (
                <div className="flex gap-2">
                  <img src={prizeMedals[index]} alt={`${index}-medal`} />
                  <p className="text-lg">{prize} میلیون تومان</p>
                </div>
              )
          )}
        </div>
        <img
          src={variant === cardVariant.BLUE ? trophy : blueTrophy}
          alt="trophy"
          className="max-h-[184px]"
        />
      </div>

      <div className="w-full flex justify-between items-center mt-8">
        <div className="flex gap-2">
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
        >
          افزودن به سبد خرید
        </Button>
      </div>
    </div>
  );
};

export default Competition;
