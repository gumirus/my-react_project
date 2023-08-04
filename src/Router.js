import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./components/Home";
import Gallery from "./components/Gallery";
import AboutMe from "./components/AboutMe";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="about-me" element={<AboutMe />} />
      </Route>
    </Routes>
  );
};

export default Router;
