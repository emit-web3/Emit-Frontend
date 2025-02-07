import React from "react";
import TextField from "../TextField/TextField";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="flex flex-col text-light-blue gap-4">
      <h1 className="font-bold text-3xl mb-5">ثبت نام</h1>
      <TextField label="نام کاربری" />
      <TextField label="شماره تلفن همراه" />
      <TextField label="آدرس ایمیل" />
      <TextField label="رمز عبور" type="password" />
      <Button className="py-3">ثبت نام</Button>
      <div className="flex flex-col md:flex-row gap-2 justify-between text-gray">
        <Link to={"/sign-in"} className="cursor-pointer">
          حساب کاربری دارید ؟
          <span className="text-orange font-medium"> ورود</span>
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
