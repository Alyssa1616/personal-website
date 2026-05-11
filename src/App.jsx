import React from "react";
import "./styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { NavigationBar, Projects, About } from "./components/components"
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <div id="navbar">
          <NavigationBar />
        </div>
        <Routes>
          <Route path="" element={<Navigate to="/about" />} />
          <Route path="/about" element={<About/>} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;