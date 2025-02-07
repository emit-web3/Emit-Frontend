import React, { useState } from "react";
import TextField from "../TextField/TextField";
import Button from "../Button/Button";
import { Link, useNavigate } from "react-router-dom";
import FiveDigitInput from "../FiveDigitInput/FiveDigitInput";
import { BsArrowRight, BsBack } from "react-icons/bs";

const ForgetPassword = () => {
  const [state, setState] = useState<0 | 1 | 2>(0);
  const navigate = useNavigate();

  return (
    <div className="flex flex-col text-light-blue gap-4">
      {state === 0 && (
        <>
          <div
            className="absolute top-60 flex items-center gap-2 cursor-pointer"
            onClick={() => navigate("/sign-in")}
          >
            <BsArrowRight />
            <p>بازگشت</p>
          </div>
          <h1 className="font-bold text-3xl mb-5">فراموشی رمز عبور</h1>
          <TextField label="آدرس ایمیل" />
          <Button className="py-3" onClick={() => setState(1)}>
            ادامه
          </Button>
        </>
      )}
      {state === 1 && (
        <>
          <div
            className="absolute top-60 flex items-center gap-2 cursor-pointer"
            onClick={() => setState(0)}
          >
            <BsArrowRight />
            <p>بازگشت به مرحله قبل</p>
          </div>
          <h1 className="font-bold text-3xl mb-5">
            کد ارسال شده به ایمیل را وارد کنید
          </h1>
          <FiveDigitInput onComplete={(code) => console.log("!@!", code)} />
          <Button className="py-3" onClick={() => setState(2)}>
            ادامه
          </Button>
        </>
      )}
      {state === 2 && (
        <>
          <div
            className="absolute top-60 flex items-center gap-2 cursor-pointer"
            onClick={() => setState(1)}
          >
            <BsArrowRight />
            <p>بازگشت به مرحله قبل</p>
          </div>
          <h1 className="font-bold text-3xl mb-5">
            لطفا یک رمز جدید انتخاب کنید
          </h1>
          <TextField label="رمز عبور جدید" />
          <TextField label="تکرار رمز عبور جدید" />
          <Button className="py-3">ثبت و ورود</Button>
        </>
      )}
    </div>
  );
};

export default ForgetPassword;
