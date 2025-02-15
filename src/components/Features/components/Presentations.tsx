import PresentationCard, { Level } from "../../Cards/PresentationCard";
import clsx from "clsx";

interface Props {
  active: boolean;
}

const Presentations = ({ active }: Props) => {
  return (
    <div className="w-full min-h-full justify-center items-center">
      <div className="w-full flex flex-col justify-center items-center py-16 gap-4">
        <p className="w-1/3 text-light-gray text-center mb-4">
        ارائه های بلاکچین در دانشکده مهندسی کامپیوتر امیرکبیر
        </p>
        {/* <Button
          color={ButtonColors.SECONDARY_BLUE}
          className="w-max"
          suffix={<FaLongArrowAltRight />}
        >
          اطلاعات بیشتر
        </Button> */}
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
          title="مبانی بلاکچین"
          description="ارائه کلی از مبانی بلاکچین"
          presenter="محمد متین غیاثوند"
          price="Free"
          time="۱۴۰۳/۱۲/۰۴ ۱۳:۰۰ - ۱۶:۰۰"
          level={Level.Intermediate}
          moreDetails="برای درک بلاک چین، ابتدا باید بدانیم پول از کجا آمده و چرا دیجیتالی شد؟ در این بخش، از تاریخچه پول تا نیاز به سیستم‌های بانکی و سپس دلایل کنار گذاشتن آن‌ها را بررسی می‌کنیم.

با وایت‌پیپر بیتکوین آشنا می‌شویم و می‌بینیم که این فناوری چگونه کار می‌کند و چه فلسفه‌ای دارد. سپس به الگوریتم‌های اجماع می‌پردازیم تا بفهمیم بلاک چین چگونه امنیت و شفافیت را بدون نیاز به اعتماد به یک نهاد مرکزی فراهم می‌کند.

در ادامه، با اتریوم و تفاوت‌های آن با بیت کوین آشنا می‌شویم و به مفهوم قراردادهای هوشمند می‌رسیم—برنامه‌هایی که روی بلاکچین اجرا می‌شوند و دنیای دیجیتال، مالی و غیرمتمرکز را متحول کرد
"
link = "https://evand.com/events/emit-intro-to-blockchain"
        />
        <PresentationCard
          title="کاربردهای واقعی بلاکچین"
          description="Beyond the Hype: Real-World Blockchain Applications"
          presenter="چمران معینی"
          price="Free"
          time="۱۴۰۳/۱۲/۰۴ ۱۶:۰۰ - ۱۹:۰۰"
          level={Level.Intermediate}
          moreDetails=". ویژگی‌های متمایز بلاکچین - Decentralized و trustless
(تصورم اینه که تو ارائه‌ی «مبانی بلاکچین» قراره بهش پرداخته بشه، پس فقط خلاصه می‌گم و رد می‌شم)
۲. مزایای بلاکچین:
۱. اطمینان
۲. پیشگیری از کاغذبازی
۳. بازارآزادطور
۴. کاهش معضلات اقتصادی از قبیل انحصارطلبی)
۵. شفافیت
۶. امنیت
۳. مثال‌های واقعی از کاربرد بلاکچین:
۱. مقایسه با بانک: انتقال پول، گرفتن وام
۲. مقایسه با بورس: فروش سهم از شرکت (برای سهام‌داران شرکت)، سرمایه‌گذاری روی شرکت‌ها (برای
سرمایه‌گذارها و مردم معمولی)
۳. مقایسه با سایت‌های سرگرمی و شرطبندیِ نامطمئن
۴. مقایسه‌ی بازار NFT با سختی‌های کسب درآمد از هنر
۵. مقایسه با سیستم رای‌گیری سنتی

۴. بررسی استدلال‌های مرسوم در انتقاد به کاراییِ بلاکچین:
۱. کارایی سیستم‌های سنتی (اشاره به مقایسه‌های بخش ۳)
۲. پیچیدگی بالای بلاکچین
۳. مصرف بالای انرژی
۴. کند بودنِ پذیرش توسط مردم و سیستم‌های فعلی
۵. پیش‌بینی کاربرهای جدیدِ بلاکچین در آینده
۶. جمع‌بندی
"
link="https://evand.com/events/emit-beyond-the-hype-68657984"
        />
         <PresentationCard
          title="ماشین مجازی بیت"
          description="درباره ماشین مجازی بیت یاد میگیریم"
          presenter="حمید باطنی"
          price="Free"
          time="۱۴۰۳/۱۲/۰۵ ۱۳:۰۰ - ۱۶:۰۰"
          level={Level.Advanced}
          moreDetails=""
          link="https://evand.com/events/emit-bitvm-2839"
        />
        
        <PresentationCard
          title="Proof of Stake"
          description="درباره مکانیزم اجماع جمعی اثبات سهام میاموزیم"
          presenter="کیوان کامبخش"
          price="Free"
          time="۱۴۰۳/۱۲/۰۵ ۱۶:۰۰ - ۱۹:۰۰"
          level={Level.Advanced}
          moreDetails=""
          link="https://evand.com/events/emit-proof-of-stake-66941832"
        />
        
        <PresentationCard
          title="استارتاپ در بلاکچین"
          description="درباره تجربه و موقعیت های استارتا\ی در حوزه وب ۳ می آموزیم"
          presenter="سروش رضایی"
          price="Free"
          time="۱۴۰۳/۱۲/۰۶ ۱۳:۰۰ - ۱۶:۰۰"
          level={Level.Elementary}
          moreDetails=""
          link="https://evand.com/events/emit-blockchain-from-startup-perspective-224425"
        />
        <PresentationCard
          title="اثبات دانش صفر"
          description="درباره اثبات دانش صفر با مثال عملی مطالعه میکنیم"
          presenter="حسین سامعی"
          price="Free"
          time="۱۴۰۳/۱۲/۰۶ ۱۶:۰۰ - ۱۹:۰۰"
          level={Level.Advanced}
         moreDetails="" 
         link="https://evand.com/events/emit-intro-to-zero-knowledge-proofs-0321072"
        />
        <PresentationCard
          title="معرفی فرصت‌های شغلی حوزه بلاکچین"
          description="در این رویداد از شغل های بلاکچین آگاه می شویم"
          presenter="مهدیه امیری"
          price="Free"
          time="۱۴۰۳/۱۲/۰۷ ۱۶:۰۰ - ۱۹:۰۰"
          level={Level.Elementary}
          moreDetails=". برنامه‌نویسی در حوزه بلاکچین
مقایسه ساختار اپلیکیشن‌های Web2 و Web3
توسعه قرارداد هوشمند (Smart Contract)
توسعه اپلیکیشن غیرمتمرکز (DApps)
توسعه پروتکل‌های بلاکچینی (Core)
۲. معرفی بسترهای توسعه قرارداد هوشمند
EVM و توسعه روی شبکه‌های مبتنی بر آن (مانند اتریوم)
ساختار EVM
پیاده‌سازی قرارداد هوشمند روی EVM
مروری بر ابزارهای توسعه (Remix، Hardhat، Foundry, Solidity …)
معرفی سایر بسترهای توسعه‌ی پرطرفدار
سولانا و زبان Rust
TON و زبان‌های Func/Tact
Aptos و Sui با زبان Move
۳. سایر فرصت‌های شغلی و نقشه راه یادگیری
بررسی موقعیت‌های شغلی مختلف در حوزه بلاکچین
مهارت‌های مورد نیاز برای ورود به بازار کار Web3
نقشه راه یادگیری و شروع به کار
معرفی منابع آموزشی مفید
"
link="https://evand.com/events/emit-job-opportunities-2960411"
        />
      </div>
    </div>
  );
};

export default Presentations;
