import "./App.css";
import TwopiRest from "twopi-rest";
import { Routes, Route } from "react-router-dom";

import { sample_requests } from "./backend/sample-requests";
import { Header } from "./Components/components";
import { Signup } from "./Pages/Signup.jsx";
import { Login } from "./Pages/Login.jsx";

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
      </Routes>
    </div>
  );
}

export default App;
