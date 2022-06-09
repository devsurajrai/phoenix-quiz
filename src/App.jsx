import "./App.css";
import TwopiRest from "twopi-rest";
import { Routes, Route } from "react-router-dom";

import { sample_requests } from "./backend/sample-requests";
import { Header, SignupMain } from "./Components/components";
import { Signup } from "./Pages/Signup.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<TwopiRest preset={sample_requests} />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
