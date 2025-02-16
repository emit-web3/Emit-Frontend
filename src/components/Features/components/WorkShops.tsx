import clsx from "clsx";
import React from "react";
import Button, { ButtonColors } from "../../Button/Button";
import { FaLongArrowAltRight } from "react-icons/fa";
import WorkShopCard from "../../Cards/WorkShopCard";
import { Level } from "../../Cards/PresentationCard";

interface Props {
  active: boolean;
}

// const WorkShops = ({ active }: Props) => {
//   return (
//     <div className="w-full min-h-full justify-center items-center">
//       <div className="w-full flex flex-col justify-center items-center py-16 gap-4">
//         <p className="w-1/3 text-light-gray text-center mb-4">
//           با کارگاه‌های مبانی و پیشرفته سالیدیتی، وارد دنیای برنامه‌نویسی
//           بلاکچین شوید! این کارگاه‌ها برای کسانی طراحی شده‌اند که دانش
//           برنامه‌نویسی دارند و می‌خواهند مهارت‌های خود را در توسعه قراردادهای
//           هوشمند ارتقا دهند. اگر در کارگاه‌ها شرکت می‌کنید، حتما مهارت‌های خود
//           را در مسابقه نهایی به چالش بکشید!
//         </p>
//         {/* <Button
//           color={ButtonColors.SECONDARY_BLUE}
//           className="w-max"
//           suffix={<FaLongArrowAltRight />}
//         >
//           Learn More
//         </Button> */}
//       </div>
//       <div
//         className={clsx(
//           "w-full flex justify-center gap-8 mt-4 overflow-auto mb-4",
//           {
//             ["flex-wrap"]: active,
//           }
//         )}
//       >
//         <WorkShopCard
//           title="Title"
//           description="Description of this card"
//           presenter="Ye Agha Pesar"
//           price="Free"
//           time="2025/12/13 15:00 - 17:00"
//           level={Level.Intermediate}
//           dark={true}
//         />
//         <WorkShopCard
//           title="Title"
//           description="Description of this card"
//           presenter="Ye Agha Pesar"
//           price="Free"
//           time="2025/12/13 15:00 - 17:00"
//           level={Level.Intermediate}
//           dark={false}
//         />
//       </div>
//     </div>
//   );
// };

const WorkShops = ({ active }: Props) => {
  return (
    <p className="text-white text-4xl w-full text-center mt-10">
      چیزی ندادن بزاریم اینجا
    </p>
  );
};

export default WorkShops;
