import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AllPaths from "./pages/AllPaths";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <Router>
      <NavBar />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/paths" element={<AllPaths />} />
      </Routes>
    </Router>
  );
}

export default App;