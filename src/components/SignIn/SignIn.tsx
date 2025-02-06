import React from "react";
import TextField from "../TextField/TextField";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="flex flex-col text-light-blue gap-4">
      <h1 className="font-bold text-3xl mb-5">Sign In</h1>
      <TextField label="Email Address" />
      <TextField label="Password" type="password" />
      <Button className="py-3">Sign In</Button>
      <div className="flex flex-col md:flex-row gap-2 justify-between text-gray">
        <Link to={"/forget-password"} className="cursor-pointer">
          Forget Password?
        </Link>
        <Link to={"/sign-up"} className="cursor-pointer">
          Don't have an account?
          <span className="text-orange font-medium"> Sign Up</span>
        </Link>
      </div>
    </div>
  );
};

export default SignIn;
