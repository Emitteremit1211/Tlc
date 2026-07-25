import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Homepage from "./Pages/Homepage";
import Body from "./Components/Body";

function App() {
  return (
    <Routes>
      <Route path="navbar" element={<Navbar />} />
      <Route path="/" element={<Homepage />} />
      <Route path="/" element={<Body />} />
    </Routes>
  );
}

export default App;