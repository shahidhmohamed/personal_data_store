import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import PersonalDatas from "./pages/personalDatas/PersonalDatas";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/PersonalDatas" element={<PersonalDatas />}></Route>
      </Routes>

      {/* <Form /> */}
    </div>
  );
}

export default App;
