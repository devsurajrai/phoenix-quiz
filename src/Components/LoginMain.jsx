import { Input, Button } from "./components.js";
import { useDispatch } from "react-redux";

import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { selectAuthInfo, loginUser } from "../redux/slice/authSlice.js";
import { login } from "../utils/utils.js";
import { Link, useLocation, useNavigate } from "react-router-dom";

const LoginMain = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPass, setLoginPass] = useState("");
  const authState = useSelector(selectAuthInfo);
  const [passType, setPassType] = useState("password");
  // The code below is for auto changing the password type to "password" from "text" after one second
  useEffect(() => {
    if (passType === "text")
      setTimeout(() => {
        setPassType("password");
      }, 1000);
  }, [passType]);
  useEffect(() => {
    console.log(authState);
    if (authState.status === "finished") {
      navigate(location?.state?.from || "/", { replace: true });
    }
  }, [authState.status]);

  // Helper functions
  const setPassTypeHandler = () => {
    setPassType((type) => (type !== "password" ? "password" : "text"));
  };
  const loginEmailHandler = (e) => {
    setLoginEmail(e.target.value);
  };
  const loginPassHandler = (e) => {
    setLoginPass(e.target.value);
  };

  return (
    <div className="h-[calc(100vh-4rem)] w-screen  flex flex-col justify-center  items-center">
      <h2 className="text-4xl p-3 font-bold tracking-wider">Login</h2>
      <form className="px-20 pt-14 pb-10 flex flex-col justify-between items-center gap-5 bg-white  w-[40vw]  shadow-2xl">
        <Input
          placeholder="Enter Email"
          type="email"
          required
          callback={loginEmailHandler}
        />
        <Input
          placeholder="Enter Password"
          type={passType}
          setPassTypeHandler={setPassTypeHandler}
          callback={loginPassHandler}
          required
          password
        />
        <div className="flex flex-col items-center w-full gap-5">
          <Button
            btnType="primary"
            buttonText="Login"
            type="submit"
            callback={(event) =>
              login(dispatch, loginUser, event, loginEmail, loginPass)
            }
          />
          <Button
            btnType="secondary"
            buttonText="Login As Guest "
            callback={(event) =>
              login(dispatch, loginUser, event, "randoms@gmail.com", "acheDin")
            }
          />
        </div>
        <Link to="/signup">
          <span>Don't Have an account?</span>
          <button className="border-0 text-[#27AB83]   ml-2 border-b-2 border-[#27AB83]">
            Create One
          </button>
        </Link>
      </form>
    </div>
  );
};

export { LoginMain };
