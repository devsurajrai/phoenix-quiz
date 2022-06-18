import { useDispatch, useSelector } from "react-redux";
import {
  getQuestions,
  selectQuestionsData,
} from "../redux/slice/quesionsSlice";
import { useEffect, useState } from "react";

import { selectAuthInfo } from "../redux/slice/authSlice";
import { useNavigate } from "react-router-dom";
import {
  incrementScore,
  setQuestions,
  setPlayerAnswer,
} from "../redux/slice/scoreSlice";
const PlayQuizMain = () => {
  const dispatch = useDispatch();
  const { encodedToken } = useSelector(selectAuthInfo);

  const { questionsCategory, questionsLevel, questions } =
    useSelector(selectQuestionsData);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getQuestions({ encodedToken, questionsCategory, questionsLevel }));
  }, [encodedToken, questionsCategory, questionsLevel, dispatch]);
  const answerHandler = (answer, questionNumber) => {
    setSelectedAnswer(answer);
    dispatch(setPlayerAnswer(answer));
    if (
      answer ===
      questions[questionNumber][questions[questionNumber].correct_option]
    ) {
      dispatch(incrementScore());
    }
  };
  return (
    <div className="h-[calc(100vh-4rem)] w-screen  flex  justify-center  items-center">
      {questions.length !== 0 && (
        <section className="bg-[#334E68] text-white p-20 shadow-xl">
          <div className="w-full flex justify-start  ">
            <span className="border-2 border-white p-2 mb-10">
              {questions[questionNumber].tags[0]} :{" "}
              {questions[questionNumber].level}
            </span>
          </div>
          <span className="font-semibold text-xl">
            Question {questionNumber + 1}/{questions.length}
          </span>
          <p className="font-semibold text-2xl my-5">
            {questions[questionNumber].statement}
          </p>
          <section className=" h-[5rem] flex items-center justify-center ">
            <button
              className={`btn-sm-secondary px-3 mx-2 ${
                selectedAnswer === questions[questionNumber]["0"]
                  ? "bg-[#C6F7E2] text-[#334E68]"
                  : ""
              }`}
              onClick={() =>
                answerHandler(questions[questionNumber]["0"], questionNumber)
              }
            >
              {questions[questionNumber]["0"]}
            </button>
            <button
              className={`btn-sm-secondary px-3 mx-2 ${
                selectedAnswer === questions[questionNumber]["1"]
                  ? "bg-[#C6F7E2] text-[#334E68]"
                  : ""
              }`}
              onClick={() =>
                answerHandler(questions[questionNumber]["1"], questionNumber)
              }
            >
              {questions[questionNumber]["1"]}
            </button>
            <button
              className={`btn-sm-secondary px-3 mx-2 ${
                selectedAnswer === questions[questionNumber]["2"]
                  ? "bg-[#C6F7E2] text-[#334E68]"
                  : ""
              }`}
              onClick={() =>
                answerHandler(questions[questionNumber]["2"], questionNumber)
              }
            >
              {questions[questionNumber]["2"]}
            </button>
            <button
              className={`btn-sm-secondary px-3 mx-2 ${
                selectedAnswer === questions[questionNumber]["3"]
                  ? "bg-[#C6F7E2] text-[#334E68]"
                  : ""
              }`}
              onClick={() =>
                answerHandler(questions[questionNumber]["3"], questionNumber)
              }
            >
              {questions[questionNumber]["3"]}
            </button>
          </section>
          {questionNumber === questions.length - 1 ? (
            <button
              className="btn-sm-primary w-1/3 my-3"
              onClick={() => {
                navigate("/result");
                dispatch(setQuestions(questions));
              }}
            >
              See Score
            </button>
          ) : (
            <button
              className="btn-sm-primary w-1/3 m-3 mt-10"
              onClick={() =>
                setQuestionNumber((questionNumber) => questionNumber + 1)
              }
            >
              Next
            </button>
          )}
        </section>
      )}
    </div>
  );
};

export { PlayQuizMain };
