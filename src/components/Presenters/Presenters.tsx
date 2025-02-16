import React from "react";
import PresenterCard from "./Components/PresenterCard";

const Presenters = () => {
  return (
    <div className="flex flex-col w-full items-center">
      <h1 className="text-3xl text-light-blue font-bold">ارائه دهندگان</h1>
      <div className="w-3/4 my-10">
        <PresenterCard
          id={1}
          image="https://thispersondoesnotexist.com"
          name="آرین خیر اندیش"
          role="salam"
        ></PresenterCard>
      </div>
    </div>
  );
};

export default Presenters;
