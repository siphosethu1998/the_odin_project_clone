import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AllPaths from "./pages/AllPaths";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";

function App() {
  return (
    <Router>
      <NavBar />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/paths" element={<AllPaths />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;