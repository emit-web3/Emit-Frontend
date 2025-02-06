import React from "react";
import TextField from "../TextField/TextField";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="flex flex-col text-light-blue gap-4">
      <h1 className="font-bold text-3xl mb-5">Sign Up</h1>
      <TextField label="Username" />
      <TextField label="Phone Number" />
      <TextField label="Email Address" />
      <TextField label="Password" type="password" />
      <Button className="py-3">Sign Up</Button>
      <div className="flex flex-col md:flex-row gap-2 justify-between text-gray">
        <Link to={"/sign-in"} className="cursor-pointer">
          Have an account?
          <span className="text-orange font-medium"> Sign In</span>
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
