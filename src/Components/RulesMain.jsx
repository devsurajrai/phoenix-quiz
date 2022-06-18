import { Link } from "react-router-dom";

const RulesMain = () => {
  return (
    <div className="h-[calc(100vh-4rem)]   w-screen  flex  justify-center  items-center ">
      <section className="bg-[#334E68]  text-white p-20 pb-10 shadow-xl text-left">
        <ol
          className="list-decimal text-2xl flex-col items-center

        "
        >
          <li>Every Quiz will contain 5 questions.</li>
          <li>Each Question will have 4 options.</li>
          <li>You need to select only one option.</li>
          <li>You will be awarded 5 points for correct answer.</li>
          <li>No negative marking for wrong answer.</li>
          <li>Click on next for the next question</li>
          <li>You must select an option</li>
        </ol>
        <Link to="/play">
          <button className="btn-sm-primary w-full mt-10">Next</button>
        </Link>
      </section>
    </div>
  );
};

export { RulesMain };
