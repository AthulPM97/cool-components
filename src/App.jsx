import { Suspense } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CoolBtn from "./components/Button/CoolBtn";


function App() {
  return (
    <Router>
      <div className="App">
        <Suspense
          fallback={<div>Oops!</div>}
        >
          <Routes>
            <Route exact path="/" element={<div>Home</div>} />
            <Route exact path="/buttons" element={<CoolBtn />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
