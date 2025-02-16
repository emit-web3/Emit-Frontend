import React from "react";
import chain from "../../assets/chain.png";
import sponsor from "../../assets/sponsor.png";
import Button from "../Button/Button";
import { LuClipboardPenLine } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="my-auto flex justify-between items-center gap-4">
      <div className="w-max">
        <div className="flex flex-col gap-2 w-max lg:text-6xl md:text-5xl sm:text-4xl text-2xl">
          <p className="font-bold text-light-blue">یاد بگیر و مسابقه بده</p>
          <p className="text-white">اولین مسابقه بلاکچین ایران</p>
          <Button
            className="w-max text-sm sm:text-m md:text-lg px-10 mt-5 md:mt-10"
            prefix={<LuClipboardPenLine />}
            onClick={() => navigate("/features")}
          >
            شروع کنید
          </Button>
        </div>
      </div>
      <img
        src={chain}
        alt="chain"
        className="w-1/4 sm:max-w-xs md:max-w-xs lg:max-w-lg md:w-2/3 select-none"
      />
    </div>
  );
};
