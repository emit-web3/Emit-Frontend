import React, { useState } from "react";
import Button, { ButtonColors, ButtonVariants } from "../Button/Button";
import Tabs from "./components/Tabs";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import SwiperCore from "swiper";
import { Swiper as SwiperType } from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import Presentations from "./components/Presentations";
import WorkShops from "./components/WorkShops";
import Competition from "./components/Competition";

SwiperCore.use([Navigation, Pagination]);

const Features = () => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperCore | null>(null);
  const [activeTab, setActiveTab] = useState<0 | 1 | 2>(0);

  const handleTabChange = (index: number) => {
    if (swiperInstance) {
      swiperInstance.slideTo(index);
    }
    setActiveTab(index as 0 | 1 | 2);
  };

  const handleSlideChange = (swiper: SwiperType) => {
    setActiveTab(swiper.activeIndex as 0 | 1 | 2);
  };

  return (
    <div className="w-full min-h-full flex flex-col px-20 mt-5 transition-all">
      <Tabs
        activeTab={activeTab}
        onChange={(value) => handleTabChange(value)}
      />
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSwiper={setSwiperInstance}
        onSlideChange={handleSlideChange}
        pagination={{ clickable: true }}
        className="h-full w-full"
        touchRatio={0.5}
        touchAngle={500}
        threshold={30}
      >
        <SwiperSlide>
          <Presentations active={activeTab === 0} />
        </SwiperSlide>
        <SwiperSlide>
          <WorkShops active={activeTab === 1} />
        </SwiperSlide>
        <SwiperSlide>
          <Competition />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Features;
