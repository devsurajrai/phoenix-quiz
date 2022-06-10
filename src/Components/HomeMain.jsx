import { CategoryCard } from "./CategoryCard.jsx";
import { useEffect } from "react";
import {
  getCategories,
  selectCategories,
} from "../redux/slice/categorySlice.js";
import { useDispatch, useSelector } from "react-redux";
import { selectAuthInfo } from "../redux/slice/authSlice.js";
import {
  setQuestionsCategory,
  setQuestionsLevel,
} from "../redux/slice/quesionsSlice";
import { useNavigate } from "react-router-dom";
const HomeMain = () => {
  const navigate = useNavigate();
  const disptach = useDispatch();
  const categories = useSelector(selectCategories);
  const auth = useSelector(selectAuthInfo);
  const { encodedToken } = auth;

  useEffect(() => {
    disptach(getCategories({ encodedToken }));
  }, [disptach, encodedToken]);
  const questionsCategoryLevelHandler = (category, level) => {
    disptach(setQuestionsCategory(category));
    disptach(setQuestionsLevel(level));
    navigate("/play");
  };
  return (
    <div>
      <h1 className="text-3xl m-4 font-semibold">Quiz Categories 👇</h1>
      <section className="flex p-4 justify-evenly ">
        {categories.length !== 0 &&
          categories.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
              questionsCategoryLevelHandler={questionsCategoryLevelHandler}
            />
          ))}
      </section>
    </div>
  );
};

export { HomeMain };
