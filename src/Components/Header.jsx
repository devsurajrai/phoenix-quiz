import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex flex-row justify-between items-end pb-4 px-4 h-16  bg-[#334E68] text-white">
      <section className="flex flex-row  items-end">
        <h1 className="font-[roboto] font-black text-[1.5rem]  tracking-wide">
          PHOENIX <sub>QUIZ</sub>
        </h1>
      </section>
      <section className="flex gap-5">
        <button className="btn-sm-secondary">Login</button>
        <Link to="/signup">
          <button className="btn-sm-primary">Signup</button>
        </Link>
        <button className="btn-sm-primary">Logout</button>
      </section>
    </div>
  );
};

export { Header };
