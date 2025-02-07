import React from "react";
import profileImage from "../../assets/profile.png";
import TextField from "../TextField/TextField";
import Button, { ButtonColors } from "../Button/Button";
import { PiPencil } from "react-icons/pi";
import BoughtCard from "./components/BoughtCard";

const Profile = () => {
  return (
    <div className="w-full my-auto flex flex-row-reverse justify-between items-center gap-20">
      <img src={profileImage} alt="profile" className="w-1/2" />

      <div className="flex flex-col w-3/4">
        <h1 className="text-3xl text-light-blue font-bold mb-4">
          مشخصات کاربر
        </h1>

        <div className="flex items-end gap-4">
          <TextField label="نام کابری" />
          <Button
            color={ButtonColors.SECONDARY_BLUE}
            suffix={<PiPencil />}
            className="h-full mb-1"
          >
            ویرایش
          </Button>
        </div>

        <div className="flex items-end gap-4">
          <TextField label="ایمیل" />
          <Button
            color={ButtonColors.SECONDARY_BLUE}
            suffix={<PiPencil />}
            className="h-full mb-1"
          >
            ویرایش
          </Button>
        </div>

        <div className="flex items-end gap-4">
          <TextField label="شماره همراه" />
          <Button
            color={ButtonColors.SECONDARY_BLUE}
            suffix={<PiPencil />}
            className="h-full mb-1"
          >
            ویرایش
          </Button>
        </div>

        <div className="flex flex-col mt-10">
          <p className="text-lg text-light-blue font-bold mb-4">
            خرید های انجام شده
          </p>
          <div className="flex flex-wrap gap-4 max-h-72 overflow-auto">
            <BoughtCard
              index={1}
              title="تست"
              description="یه آقا ۱۴۰۳/۱۱/۲۷ ۱۰:۳۰"
            />
            <BoughtCard
              index={2}
              title="تست"
              description="یه آقا ۱۴۰۳/۱۱/۲۷ ۱۰:۳۰"
            />
            <BoughtCard
              index={3}
              title="تست"
              description="یه آقا ۱۴۰۳/۱۱/۲۷ ۱۰:۳۰"
            />
            <BoughtCard
              index={4}
              title="تست"
              description="یه آقا ۱۴۰۳/۱۱/۲۷ ۱۰:۳۰"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
