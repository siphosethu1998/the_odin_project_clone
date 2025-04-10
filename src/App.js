import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import LandingPage from "./pages/LandingPage";
import AllPaths from "./pages/AllPaths";

function App() {
  return (
    <Router>
      <NavBar />

      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/allpaths" element={<AllPaths />} />
      </Routes>
    </Router>
  );
}

export default App;