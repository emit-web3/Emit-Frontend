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
        <p className="w-full md:w-1/2 text-light-gray text-center mb-4 text-xl">
          با کارگاه‌های مبانی و پیشرفته سالیدیتی، وارد دنیای برنامه‌نویسی
          بلاکچین شوید! این کارگاه‌ها برای کسانی طراحی شده‌اند که دانش
          برنامه‌نویسی دارند و می‌خواهند مهارت‌های خود را در توسعه قراردادهای
          هوشمند ارتقا دهند. اگر در کارگاه‌ها شرکت می‌کنید، حتما مهارت‌های خود
          را در مسابقه نهایی به چالش بکشید!
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
          title="کارگاه سالیدیتی مقدماتی"
          description="این کارگاه به معرفی اصول پایه‌ای توسعه قراردادهای هوشمند با زبان Solidity می‌پردازد. شرکت‌کنندگان با مفاهیمی چون تنظیم محیط توسعه، ساختار قراردادها، انواع داده‌ها، توابع و متغیرها آشنا می‌شوند. همچنین مدیریت داده‌ها با استفاده از mappings و access control، ارث‌بری و رویدادها آموزش داده می‌شود. در نهایت، شرکت‌کنندگان نحوه نوشتن قراردادهای هوشمند ساده مانند توکن‌ها، رای‌گیری و لاتاری را فرا می‌گیرند."
          presenter="محمد متین غیاثوند"
          price="۵۰۰۰۰ تومان"
          time="۱۴۰۳/۱۲/۰۶ ۱۶:۰۰ - ۱۹:۰۰"
          level={Level.Intermediate}
          dark={true}
          link="https://evand.com/events/emit-solidity-workshop-basics"
        />
        <WorkShopCard
          title="کارگاه سالیدیتی پیشرفته"
          description="این کارگاه برای شرکت‌کنندگانی که با مفاهیم پایه‌ای Solidity آشنا هستند و به دنبال ارتقاء مهارت‌های خود در زمینه‌های پیشرفته‌تر هستند، طراحی شده است. مباحث اصلی شامل امنیت در قراردادهای هوشمند و مقابله با حملات متداول (مانند Re-entrancy و overflow)، بهینه‌سازی مصرف گاز و تکنیک‌های ذخیره‌سازی، و همچنین آشنایی با الگوهای ارتقاء قراردادهای هوشمند و کار با proxy و diamond می‌باشد."
          presenter="سید سپهر میرنصرالهی پارسا"
          price="۵۰۰۰۰ تومان"
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
