import PresentationCard, { Level } from "../../Cards/PresentationCard";
import clsx from "clsx";

interface Props {
  active: boolean;
}

const Presentations = ({ active }: Props) => {
  return (
    <div className="w-full min-h-full justify-center items-center">
      <div className="w-full flex flex-col justify-center items-center py-16 gap-4">
        <p className="w-full md:w-1/3 text-light-gray text-center mb-4">
          ارائه های بلاکچین در دانشکده مهندسی کامپیوتر امیرکبیر
        </p>
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
          moreDetails={
            `<div style="text-align: right;">
              <p>برای درک بلاک چین، ابتدا باید بدانیم پول از کجا آمده و چرا دیجیتالی شد؟ در این بخش، از تاریخچه پول تا نیاز به سیستم‌های بانکی و سپس دلایل کنار گذاشتن آن‌ها را بررسی می‌کنیم.</p>
              <p>با وایت‌پیپر بیتکوین آشنا می‌شویم و می‌بینیم که این فناوری چگونه کار می‌کند و چه فلسفه‌ای دارد. سپس به الگوریتم‌های اجماع می‌پردازیم تا بفهمیم بلاک چین چگونه امنیت و شفافیت را بدون نیاز به اعتماد به یک نهاد مرکزی فراهم می‌کند.</p>
              <p>در ادامه، با اتریوم و تفاوت‌های آن با بیت کوین آشنا می‌شویم و به مفهوم قراردادهای هوشمند می‌رسیم—برنامه‌هایی که روی بلاکچین اجرا می‌شوند و دنیای دیجیتال، مالی و غیرمتمرکز را متحول کرد.</p>
            </div>`
          }
          link="https://evand.com/events/emit-intro-to-blockchain"
        />
        <PresentationCard
          title="کاربردهای واقعی بلاکچین"
          description="Beyond the Hype: Real-World Blockchain Applications"
          presenter="چمران معینی"
          price="Free"
          time="۱۴۰۳/۱۲/۰۴ ۱۶:۰۰ - ۱۹:۰۰"
          level={Level.Intermediate}
          moreDetails={
            `<div style="text-align: right;">
              <p>ویژگی‌های متمایز بلاکچین - Decentralized و trustless</p>
              <p>مزایای بلاکچین:</p>
              <ul>
                <li>۱. اطمینان</li>
                <li>۲. پیشگیری از کاغذبازی</li>
                <li>۳. بازارآزادطور</li>
                <li>۴. کاهش معضلات اقتصادی از قبیل انحصارطلبی</li>
                <li>۵. شفافیت</li>
                <li>۶. امنیت</li>
              </ul>
              <p>مثال‌های واقعی از کاربرد بلاکچین:</p>
              <ul>
                <li>۱. مقایسه با بانک: انتقال پول، گرفتن وام</li>
                <li>۲. مقایسه با بورس: فروش سهم از شرکت (برای سهام‌داران شرکت)، سرمایه‌گذاری روی شرکت‌ها (برای سرمایه‌گذارها و مردم معمولی)</li>
                <li>۳. مقایسه با سایت‌های سرگرمی و شرطبندیِ نامطمئن</li>
                <li>۴. مقایسه‌ی بازار NFT با سختی‌های کسب درآمد از هنر</li>
                <li>۵. مقایسه با سیستم رای‌گیری سنتی</li>
              </ul>
              <p>بررسی استدلال‌های مرسوم در انتقاد به کاراییِ بلاکچین:</p>
              <ul>
                <li>۱. کارایی سیستم‌های سنتی (اشاره به مقایسه‌های بخش ۳)</li>
                <li>۲. پیچیدگی بالای بلاکچین</li>
                <li>۳. مصرف بالای انرژی</li>
                <li>۴. کند بودنِ پذیرش توسط مردم و سیستم‌های فعلی</li>
                <li>۵. پیش‌بینی کاربرهای جدیدِ بلاکچین در آینده</li>
              </ul>
              <p>۶. جمع‌بندی</p>
            </div>`
          }
          link="https://evand.com/events/emit-beyond-the-hype"
        />
        <PresentationCard
          title="ماشین مجازی بیت"
          description="درباره ماشین مجازی بیت یاد میگیریم"
          presenter="حمید باطنی"
          price="Free"
          time="۱۴۰۳/۱۲/۰۵ ۱۳:۰۰ - ۱۶:۰۰"
          level={Level.Advanced}
          moreDetails={
            `<div style="text-align: right;">
              <p>ماشین مجازی بیت یکی از اجزای کلیدی در اجرای قراردادهای هوشمند در بلاکچین است. این سیستم به طوری طراحی شده است که دسترسی به شبکه بلاکچین را برای کاربران فراهم می‌کند و قابلیت‌های بسیار زیادی برای توسعه‌دهندگان می‌سازد. در این ارائه به بررسی نحوه کارکرد ماشین مجازی بیت و نقش آن در ارتقا امنیت و کارایی سیستم‌های بلاکچین می‌پردازیم.</p>
            </div>`
          }
          link="https://evand.com/events/emit-bitvm"
        />
        <PresentationCard
          title="Proof of Stake"
          description="درباره مکانیزم اجماع جمعی اثبات سهام میاموزیم"
          presenter="کیوان کامبخش"
          price="Free"
          time="۱۴۰۳/۱۲/۰۵ ۱۶:۰۰ - ۱۹:۰۰"
          level={Level.Advanced}
          moreDetails={
            `<div style="text-align: right;">
              <p>در این ارائه، به مفهوم اثبات سهام یا Proof of Stake پرداخته خواهد شد. اثبات سهام یک الگوریتم اجماع است که به‌جای استفاده از پردازش‌های پیچیده محاسباتی، به گره‌های شبکه اجازه می‌دهد که برای تایید تراکنش‌ها سهام خود را در سیستم قرار دهند.</p>
            </div>`
          }
          link="https://evand.com/events/emit-proof-of-stake"
        />
        <PresentationCard
          title="استارتاپ در بلاکچین"
          description="درباره تجربه و موقعیت های استارتا\ی در حوزه وب ۳ می آموزیم"
          presenter="سروش رضایی"
          price="Free"
          time="۱۴۰۳/۱۲/۰۶ ۱۳:۰۰ - ۱۶:۰۰"
          level={Level.Elementary}
          moreDetails={
            `<div style="text-align: right;">
              <p>وب ۳ دنیای جدیدی را برای استارتاپ‌ها به‌وجود آورده است. در این ارائه به معرفی فرصت‌ها و چالش‌هایی پرداخته می‌شود که استارتاپ‌ها در دنیای بلاکچین با آن مواجه هستند. همچنین نحوه شروع یک استارتاپ در این فضا، نحوه جذب سرمایه و ایجاد مدل‌های کسب‌وکار جدید مورد بررسی قرار می‌گیرد.</p>
            </div>`
          }
          link="https://evand.com/events/emit-blockchain-from-startup-perspective"
        />
        <PresentationCard
          title="اثبات دانش صفر"
          description="درباره اثبات دانش صفر با مثال عملی مطالعه میکنیم"
          presenter="حسین سامعی"
          price="Free"
          time="۱۴۰۳/۱۲/۰۶ ۱۶:۰۰ - ۱۹:۰۰"
          level={Level.Advanced}
          moreDetails={
            `<div style="text-align: right;">
              <p>اثبات دانش صفر یکی از مهم‌ترین تکنولوژی‌های بلاکچین است که به افراد اجازه می‌دهد اطلاعات را بدون افشای جزئیات حساس به اشتراک بگذارند. در این بخش با توضیح مفاهیم پایه‌ای و همچنین مثال‌های عملی در مورد نحوه استفاده از اثبات دانش صفر در دنیای واقعی آشنا خواهیم شد.</p>
            </div>`
          }
          link="https://evand.com/events/emit-intro-to-zero-knowledge-proofs"
        />
        <PresentationCard
          title="معرفی فرصت‌های شغلی حوزه بلاکچین"
          description="در این رویداد از شغل های بلاکچین آگاه می شویم"
          presenter="مهدیه امیری"
          price="Free"
          time="۱۴۰۳/۱۲/۰۷ ۱۶:۰۰ - ۱۹:۰۰"
          level={Level.Elementary}
          moreDetails={
            `<div style="text-align: right;">
              <p>برنامه‌نویسی در حوزه بلاکچین</p>
              <p>مقایسه ساختار اپلیکیشن‌های Web2 و Web3</p>
              <p>توسعه قرارداد هوشمند (Smart Contract)</p>
              <p>توسعه اپلیکیشن غیرمتمرکز (DApps)</p>
              <p>توسعه پروتکل‌های بلاکچینی (Core)</p>
              <p>معرفی بسترهای توسعه قرارداد هوشمند</p>
              <ul>
                <li>EVM و توسعه روی شبکه‌های مبتنی بر آن (مانند اتریوم)</li>
                <li>ساختار EVM</li>
                <li>پیاده‌سازی قرارداد هوشمند روی EVM</li>
                <li>مروری بر ابزارهای توسعه (Remix، Hardhat، Foundry, Solidity …)</li>
              </ul>
              <p>معرفی سایر بسترهای توسعه‌ی پرطرفدار</p>
              <ul>
                <li>سولانا و زبان Rust</li>
                <li>TON و زبان‌های Func/Tact</li>
                <li>Aptos و Sui با زبان Move</li>
              </ul>
              <p>سایر فرصت‌های شغلی و نقشه راه یادگیری</p>
              <p>بررسی موقعیت‌های شغلی مختلف در حوزه بلاکچین</p>
              <p>مهارت‌های مورد نیاز برای ورود به بازار کار Web3</p>
              <p>نقشه راه یادگیری و شروع به کار</p>
              <p>معرفی منابع آموزشی مفید</p>
            </div>`
          }
          link="https://evand.com/events/emit-job-opportunities"
        />
      </div>
    </div>
  );
};

export default Presentations;
