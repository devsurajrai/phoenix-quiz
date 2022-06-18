import React from "react";
import { Link } from "react-router-dom";
import { setScoreToDefault } from "../redux/slice/scoreSlice";
import { useDispatch } from "react-redux";
const LandingPageMain = () => {
  const dispatch = useDispatch();
  return (
    <div className="flex justify-center items-center h-[calc(100vh-5rem)] bg-[#F0F4F8]">
      <section className=" antialiased flex flex-col gap-5 items-center">
        <h1 className="font-[roboto] font-black text-[3rem] ">
          Welcome To Phoenix Quiz
        </h1>
        <p className="font-[roboto] font-black text-[1.5rem] ">
          Have Fun Testing Your Knowledge About HTML,CSS And Javascript
        </p>
        <Link to="/home">
          <button
            className="btn-md-primary"
            onClick={() => dispatch(setScoreToDefault())}
          >
            Play Quiz
          </button>
        </Link>
      </section>
    </div>
  );
};

export { LandingPageMain };
