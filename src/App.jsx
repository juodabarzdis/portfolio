import { Routes, Route } from "react-router-dom";

import styles from "./App.module.scss";
import Navigation from "./components/atoms/Navigation";
import Home from "./pages/home";
import About from "./pages/about/About";
import Projects from "./pages/projects/Projects";

function App() {
  return (
    <div className={styles.app}>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
