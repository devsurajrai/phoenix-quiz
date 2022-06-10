import { Link, useNavigate } from "react-router-dom";
import { selectAuthInfo, setAuthToDefault } from "../redux/slice/authSlice";
import { logout } from "../utils/utils.js";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  const { isUserLoggedIn } = useSelector(selectAuthInfo);
  const navigate = useNavigate();

  return (
    <div className="flex flex-row justify-between items-end pb-4 px-4 h-16  bg-[#334E68] text-white">
      <section className="flex flex-row  items-end">
        <Link to={`${isUserLoggedIn ? "/home" : "/"}`}>
          <h1 className="font-[roboto] font-black text-[1.5rem]  tracking-wide">
            PHOENIX <sub>QUIZ</sub>
          </h1>
        </Link>
      </section>
      <section className="flex gap-5">
        {!isUserLoggedIn ? (
          <>
            <Link to="/login">
              <button className="btn-sm-secondary">Login</button>
            </Link>
            <Link to="/signup">
              <button className="btn-sm-primary">Signup</button>
            </Link>
          </>
        ) : (
          <button
            className="btn-sm-primary"
            onClick={() => logout(navigate, dispatch, setAuthToDefault)}
          >
            Logout
          </button>
        )}
      </section>
    </div>
  );
};

export { Header };
