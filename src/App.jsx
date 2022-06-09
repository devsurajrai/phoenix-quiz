import "./App.css";
import TwopiRest from "twopi-rest";
import { Routes, Route } from "react-router-dom";

import { sample_requests } from "./backend/sample-requests";
import { Header } from "./Components/components";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          pathname="/twopirest"
          element={<TwopiRest preset={sample_requests} />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
