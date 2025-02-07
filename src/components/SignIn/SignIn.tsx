import React from "react";
import TextField from "../TextField/TextField";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="flex flex-col text-light-blue gap-4">
      <h1 className="font-bold text-3xl mb-5">ورود</h1>
      <TextField label="آدرس ایمیل" />
      <TextField label="رمز عبور" type="password" />
      <Button className="py-3">ورود</Button>
      <div className="flex flex-col md:flex-row gap-2 justify-between text-gray">
        <Link to={"/forget-password"} className="cursor-pointer">
          فراموشی رمز عبور ؟
        </Link>
        <Link to={"/sign-up"} className="cursor-pointer">
          حساب کاربری ندارید ؟
          <span className="text-orange font-medium">ثبت نام کنید</span>
        </Link>
      </div>
    </div>
  );
};

export default SignIn;
