import React, { Suspense } from "react";
import "./App.css";
import Textarea from "./components/Textarea";
// import About from "./components/About";
import { Routes, Route } from "react-router-dom";

const About = React.lazy(() => import("./components/About"));

function App() {
  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<Textarea TThide="none" />} />
          <Route path="about" element={<About />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
