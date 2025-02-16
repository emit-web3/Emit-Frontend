import React from "react";
import PresenterCard from "./Components/PresenterCard";
import PresentersList from "../../assets/Presenters.json";

const Presenters = () => {
  return (
    <div className="flex flex-col w-full items-center">
      <h1 className="text-3xl text-light-blue font-bold">ارائه دهندگان</h1>
      <div className="w-full flex flex-wrap items-center justify-center my-10">
        {PresentersList.map((presenter) => (
          <PresenterCard
            id={1}
            image={`${presenter.link}.png`}
            name={presenter.firstName + " " + presenter.lastName}
            desc={presenter.desc}
          />
        ))}
      </div>
    </div>
  );
};

export default Presenters;
