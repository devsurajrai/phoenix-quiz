import "./App.css";
import TwopiRest from "twopi-rest";
import { Routes, Route } from "react-router-dom";
import { PlayQuiz } from "./Pages/PlayQuiz.jsx";
import { sample_requests } from "./backend/sample-requests";
import { Header } from "./Components/components";
import { Signup } from "./Pages/Signup.jsx";
import { Login } from "./Pages/Login.jsx";
import Home from "./Pages/Home.jsx";
import { RequiresAuth } from "./Components/RequiresAuth.jsx";
import { Result } from "./Pages/Result";
import { LandingPage } from "./Pages/LandingPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/testAPI"
          element={<TwopiRest preset={sample_requests} />}
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/home"
          element={
            <RequiresAuth>
              <Home />
            </RequiresAuth>
          }
        />
        <Route
          path="/play"
          element={
            <RequiresAuth>
              <PlayQuiz />
            </RequiresAuth>
          }
        />
        <Route
          path="/result"
          element={
            <RequiresAuth>
              <Result />
            </RequiresAuth>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
