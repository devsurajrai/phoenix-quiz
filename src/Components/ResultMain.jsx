import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectScore,
  selectplayerAnswers,
  selectcurrentGameQuestions,
  setScoreToDefault,
} from "../redux/slice/scoreSlice";
import { useNavigate } from "react-router-dom";
const ResultMain = () => {
  const score = useSelector(selectScore);
  const playerSelectedAnswers = useSelector(selectplayerAnswers);
  const currentGameQuestions = useSelector(selectcurrentGameQuestions);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  console.log(
    "AnsweredAnswers",
    playerSelectedAnswers,
    "currentGameQuestions",
    currentGameQuestions
  );
  const playAgain = () => {
    dispatch(setScoreToDefault());
    navigate("/home");
  };
  return (
    <div className="h-[calc(100vh-4rem)]   w-screen  flex  justify-center  items-center ">
      <section className="bg-[#334E68] h-[90%]  text-white p-20 pb-10 shadow-xl overflow-scroll">
        <p className="text-xl font-bold">
          You Answered {score / 10} correct out of 5 questions.
        </p>
        <p className="text-lg my-3">Your Score is {score}</p>
        {currentGameQuestions.map((question, index) => {
          return (
            <section key={question.id} className=" text-white p-20 shadow-xl">
              <p className="font-semibold text-2xl my-5">
                {index + 1}. {question.statement}
              </p>
              <section className=" h-[5rem] flex items-center justify-center ">
                <button
                  className={`btn-sm-secondary px-3 mx-2 hover:bg-[#334E68] hover:text-white cursor-default
                  ${
                    question[question.correct_option] === question["0"]
                      ? "bg-[#C6F7E2] text-[#334E68] hover:bg-[#C6F7E2] hover:text-[#334E68]"
                      : ""
                  }
                  ${
                    playerSelectedAnswers[index] === question["0"] &&
                    question[question.correct_option] !== question["0"]
                      ? "bg-red-400 border-red-400 hover:bg-red-400 hover:border-red-400"
                      : ""
                  }
                  `}
                >
                  {question["0"]}
                </button>
                <br />
                <button
                  className={`btn-sm-secondary px-3 mx-2 hover:bg-[#334E68] hover:text-white cursor-default
                  ${
                    question[question.correct_option] === question["1"]
                      ? "bg-[#C6F7E2] text-[#334E68] hover:bg-[#C6F7E2] hover:text-[#334E68]"
                      : ""
                  }
                  ${
                    playerSelectedAnswers[index] === question["1"] &&
                    question[question.correct_option] !== question["1"]
                      ? "bg-red-400 border-red-400 hover:bg-red-400 hover:border-red-400"
                      : ""
                  }
                  `}
                >
                  {question["1"]}
                </button>
                <button
                  className={`btn-sm-secondary px-3 mx-2 hover:bg-[#334E68] hover:text-white cursor-default
                  ${
                    question[question.correct_option] === question["2"]
                      ? "bg-[#C6F7E2] text-[#334E68] hover:bg-[#C6F7E2] hover:text-[#334E68]"
                      : ""
                  }
                  ${
                    playerSelectedAnswers[index] === question["2"] &&
                    question[question.correct_option] !== question["2"]
                      ? "bg-red-400 border-red-400 hover:bg-red-400 hover:border-red-400"
                      : ""
                  }
                  `}
                >
                  {question["2"]}
                </button>
                <button
                  className={`btn-sm-secondary px-3 mx-2 hover:bg-[#334E68] hover:text-white cursor-default
                  ${
                    question[question.correct_option] === question["3"]
                      ? "bg-[#C6F7E2] text-[#334E68] hover:bg-[#C6F7E2] hover:text-[#334E68]"
                      : ""
                  }
                  ${
                    playerSelectedAnswers[index] === question["3"] &&
                    question[question.correct_option] !== question["3"]
                      ? "bg-red-400 border-red-400 hover:bg-red-400 hover:border-red-400"
                      : ""
                  }
                  `}
                >
                  {question["3"]}
                </button>
              </section>
            </section>
          );
        })}

        <button className="btn-sm-primary w-1/3 m-3 mt-10" onClick={playAgain}>
          Play Again
        </button>
      </section>
    </div>
  );
};

export { ResultMain };
