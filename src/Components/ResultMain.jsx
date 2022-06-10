import React from "react";
import { useSelector } from "react-redux";
import { selectScore } from "../redux/slice/scoreSlice";
import { useNavigate } from "react-router-dom";
const ResultMain = () => {
  const score = useSelector(selectScore);
  const navigate = useNavigate();
  return (
    <div className="h-[calc(100vh-4rem)] w-screen  flex  justify-center  items-center">
      <section className="bg-[#334E68] text-white p-20 shadow-xl">
        <p className="text-xl font-bold">
          You Answered {score / 10} correct out of 5 questions.
        </p>
        <p className="text-lg my-3">Your Score is {score}</p>
        <button
          className="btn-sm-primary w-1/3 m-3 mt-10"
          onClick={() => navigate("/home")}
        >
          Play Again
        </button>
      </section>
    </div>
  );
};

export { ResultMain };
