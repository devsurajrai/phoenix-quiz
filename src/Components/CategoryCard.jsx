import React from "react";

const CategoryCard = ({ category, questionsCategoryLevelHandler }) => {
  return (
    <div className="w-[25vw] bg-[#334E68] p-4  text-slate-100 flex flex-col justify-between">
      <div>
        <section className="w-full h-[30vh]">
          <img
            className="w-full h-full object-fill"
            src={category?.image}
            alt="html_img"
          />
        </section>
        <h3 className="text-3xl font-bold m-4">{category.title}</h3>
        <p className="text-base">{category.description}</p>
      </div>

      <section>
        {category?.timer_detail.map((level, idx) => {
          return (
            <button
              key={idx}
              className="btn-sm-secondary p-2 m-3"
              onClick={() =>
                questionsCategoryLevelHandler(category.title, level.level)
              }
            >
              {level.level}
            </button>
          );
        })}
      </section>
    </div>
  );
};

export { CategoryCard };
