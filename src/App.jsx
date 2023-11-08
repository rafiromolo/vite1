import { Routes, Route } from "react-router-dom";
import NavbarComponent from "./components/Navbar";
import FooterComponent from "./components/Footer";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import ProjectsPage from "./pages/ProjectsPage";
import ResumePage from "./pages/ResumePage";

function App() {
  return (
    <div>
      <NavbarComponent />
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/resume" Component={ResumePage} />
        <Route path="/projects" Component={ProjectsPage} />
        <Route path="/contact" Component={ContactPage} />
      </Routes>
      <FooterComponent />
    </div>
  );
}

export default App;
