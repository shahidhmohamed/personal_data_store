import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "../src/components/Navbar"; // Adjust path as needed
import FormPage from "../src/pages/home/Home"; // Adjust path as needed
import DataPage from "../src/pages/personalDatas/PersonalDatas"; // Adjust path as needed
import earthVideo from "../src/pages/home/earth.mp4";
function App() {
  return (
    <div className="relative h-screen overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={earthVideo} // Ensure correct path
        autoPlay
        muted
        loop
      />
      <div className="relative z-10 h-full">
        <Navbar />
        <main className="p-4 md:p-10">
          <Routes>
            <Route path="/" element={<FormPage />} />
            <Route path="/form" element={<FormPage />} />
            <Route path="/data" element={<DataPage />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}
export default App;
