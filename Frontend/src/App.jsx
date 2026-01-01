// import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Navbar from "./component/Navbar.jsx";
import Manager from "./component/Manager.jsx";
import HoverImageLinks from "./component/HoverImageLinks.jsx";
import Particles from "./component/Particle.jsx";
import SubjectNotes from "./component/Subject.jsx";
import Telegram from "./component/Telegram.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <div className="w-full max-w-full min-h-screen bg-black py-10 overflow-x-hidden  relative">
          <Navbar />

          <div style={{ width: "100vw", height: "100vh", position: "fixed" }}>
            <Particles
              particleColors={["#ffffff", "#ffffff"]}
              particleCount={360}
              particleSpread={12}
              speed={0.7}
              particleBaseSize={100}
              moveParticlesOnHover={false}
              alphaParticles={false}
              disableRotation={false}
            />
          </div>
          <Routes>
            <Route path="/" element={<Manager />} />
            <Route path="/subject/:subject" element={<SubjectNotes />} />
          </Routes>
          <Telegram />
        </div>
        <HoverImageLinks />
      </BrowserRouter>
    </>
  );
}

export default App;
