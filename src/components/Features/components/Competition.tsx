import React from "react";
import handShake from "../../../assets/handshake.png";
import trophy from "../../../assets/trophy.png";
import blueTrophy from "../../../assets/blueTrophy.png";
import goldMedal from "../../../assets/goldMedal.png";
import ironMedal from "../../../assets/ironMedal.png";
import bronzeMedal from "../../../assets/bronzeMedal.png";
import clsx from "clsx";
import Button, { ButtonColors } from "../../Button/Button";
import { toast } from "react-toastify";

const Competition = () => {
  return (
    <div className="flex flex-col justify-center items-center text-white mt-10 h-full overflow-auto">
      <h1 className="text-3xl font-bold">
        مسابقه‌ای با ۳۰ میلیون تومان جایزه!
      </h1>
      <div className="w-full flex flex-row-reverse justify-between items-center mt-10">
        <img src={handShake} alt="handshake" className="w-1/3" />
        <div className="flex flex-col">
          <h2 className="text-3xl font-bold mb-4">شرح مسابقه</h2>
          <p className="text-lg text-light-gray w-2/3">
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
          desc="این بخش مخصوص افراد مبتدی است که با شرکت در کارگاه‌ها توانسته‌اند وارد دنیای بلاکچین شوند. در این رقابت، فرصتی دارید تا آموخته‌های خود را در یک چالش واقعی به کار ببرید، مهارت‌های خود را بسنجید و تجربه عملی در شناسایی و اکسپلویت آسیب‌پذیری‌های قراردادهای هوشمند کسب کنید."
          prizes={[9, 6, 3]}
          price="100 هزار تومان"
          onButtonClick={() =>
            toast.error("تونستی لاگین کن بعد بیا ثبت نام کن")
          }
        />
        <CompetitionCard
          title="مسابقه غیر حضوری"
          desc="این بخش برای توسعه‌دهندگان و افراد باتجربه‌ای است که می‌خواهند مهارت‌های خود را به چالش بکشند و در یک رقابت جدی با سایر متخصصان شرکت کنند. اگر به امنیت بلاکچین و تست نفوذ قراردادهای هوشمند علاقه‌مندید، این فرصت را از دست ندهید! "
          prizes={[6, 4, 2]}
          price="رایگان"
          variant={cardVariant.WHITE}
          onButtonClick={() =>
            toast.error("تونستی لاگین کن بعد بیا ثبت نام کن")
          }
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
  onButtonClick,
}: {
  variant?: cardVariant;
  title: string;
  desc: string;
  prizes: number[];
  price: string;
  onButtonClick?: () => void;
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
                <div className="flex justify-center items-center gap-2 my-2">
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
          onClick={onButtonClick}
        >
          افزودن به سبد خرید
        </Button>
      </div>
    </div>
  );
};

export default Competition;
