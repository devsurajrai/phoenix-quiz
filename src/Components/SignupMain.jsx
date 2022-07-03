import { Link } from "react-router-dom";
import { Button, Input } from "./components.js";
import { useReducer, useState } from "react";
import { signupFormHandlers } from "../utils/utils.js";
import { useDispatch } from "react-redux";
import { createUser, selectAuthInfo } from "../redux/slice/authSlice.js";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SignupMain = () => {
  const dispatch = useDispatch();
  const authState = useSelector(selectAuthInfo);
  const navigate = useNavigate();
  const [error, setError] = useState("");

  // Reducer for Signup state management
  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const signupFormReducer = (state, action) => {
    const value = action.payload;
    switch (action.type) {
      case "SET_FIRST_NAME":
        return { ...state, firstName: value };
      case "SET_LAST_NAME":
        return { ...state, lastName: value };
      case "SET_EMAIL":
        return { ...state, email: value };
      case "SET_PASSWORD":
        return { ...state, password: value };
      case "SET_CONFIRM_PASSWORD":
        return { ...state, confirmPassword: value };
      default:
        return state;
    }
  };
  const [signupFormState, dispatchSignupForm] = useReducer(
    signupFormReducer,
    initialState
  );
  const {
    handleFormFirstName,
    handleFormLastName,
    handleFormEmail,
    handleFormPassword,
    handleFormConfirmPassword,
    handleCreateAccountBtn,
  } = signupFormHandlers(dispatchSignupForm);
  useEffect(() => {
    console.log(authState);
    if (authState.status === "finished") {
      navigate(location?.state?.from || "/", { replace: true });
    }
  }, [authState.status]);
  return (
    <div className="h-[calc(100vh-4rem)] w-screen  flex flex-col justify-center  items-center overflow-scroll py-10">
      <h2 className="text-4xl p-3 font-bold tracking-wider">Create Account</h2>
      <form className="px-20 pt-14 pb-10 flex flex-col justify-between items-center gap-5 bg-white  w-[40vw]  shadow-2xl ">
        <Input
          placeholder="First Name"
          type="text"
          callback={handleFormFirstName}
          required
        />
        <Input
          placeholder="Last Name"
          type="text"
          callback={handleFormLastName}
          required
        />
        <Input
          placeholder="Enter Email"
          type="email"
          callback={handleFormEmail}
          required
        />
        <Input
          placeholder="Enter Password"
          type="password"
          callback={handleFormPassword}
          required
        />
        <Input
          placeholder="Confirm Password"
          type="password"
          callback={handleFormConfirmPassword}
          required
        />
        <p className="self-start text-red-600">{error}</p>
        <Button
          btnType="primary"
          buttonText="Create Account"
          type="submit"
          callback={(e) =>
            handleCreateAccountBtn(
              e,
              dispatch,
              createUser,
              signupFormState,
              setError
            )
          }
        />

        <Link to="/login">
          <span>Already Have an Account?</span>
          <button className="border-0 text-[#27AB83] ml-2 border-b-2 border-[#27AB83]">
            Login
          </button>
        </Link>
      </form>
    </div>
  );
};

export { SignupMain };
