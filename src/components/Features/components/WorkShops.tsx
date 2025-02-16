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
        <p className="w-full md:w-1/3 text-light-gray text-center mb-4">
          این یک کارگاه سالیدیتی هست که از ابتدا تا انتها همراهتون هستیم تا برای تبدیل شدن به یک سالیدیتی دولوپر خفن آمادتون کنیم
        </p>
        {/* <Button
          color={ButtonColors.SECONDARY_BLUE}
          className="w-max"
          suffix={<FaLongArrowAltRight />}
        >
          Learn More
        </Button> */}
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
          title="کارگاه سایلدیتی مقدماتی"
          description="آموزش از ابتدا تا رسیدن به توانایی نوشتن کامل یک قرارداد هوشمند حرفه ای!"
          presenter="محمد متنی غیاثوند"
          price="Free"
          time="۱۴۰۳/۱۲/۰۶ ۱۶:۰۰ - ۱۹:۰۰"
          level={Level.Intermediate}
          dark={true}
          link="https://evand.com/events/emit-solidity-workshop-basics"
        />
        <WorkShopCard
          title="کارگاه سالیدیتی پیشرفته"
          description="آموزش ماشین مجازی اتریوم به صورت تخصیصی و آماده سازی برای مسابقه پیدا کردن باگ و تبدیل به یک آدیتور خفن شدن!"
          presenter="سید سپهر میرنصرالهی پارسا"
          price="Free"
          time="۱۴۰۳/۱۲/۰۷ ۱۶:۰۰ - ۱۹:۰۰"
          level={Level.Advanced}
          dark={false}
          link="https://evand.com/events/emit-solidity-workshop-advanced"
        />
      </div>
    </div>
  );
};

export default WorkShops;
