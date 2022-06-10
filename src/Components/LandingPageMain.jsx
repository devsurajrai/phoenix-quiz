import React from "react";
import { Link } from "react-router-dom";

const LandingPageMain = () => {
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
          <button className="btn-md-primary">Play Quiz</button>
        </Link>
      </section>
    </div>
  );
};

export { LandingPageMain };
