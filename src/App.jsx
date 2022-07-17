import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";

import NumbersGame from "./pages/NumbersGame";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="App-content">
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/new-game" element={<NumbersGame />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
