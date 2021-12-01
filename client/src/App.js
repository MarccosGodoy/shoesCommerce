import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Eleven from "./pages/eleven/Eleven";
import Futsal from "./pages/futsal/Futsal";
import Sintetic from "./pages/sintetic/Sintetic";
import Payment from "./pages/payment/Payment";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/eleven" element={<Eleven />} />
          <Route path="/futsal" element={<Futsal />} />
          <Route path="/sintetic" element={<Sintetic />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
