import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavBar } from "./NavBar/NavBar";
import { Main } from "./main/Main";
import { Cars } from "./cars/Cars.jsx";
import {SingleCar } from "./SingleCar/SingleCar.jsx"
export const App = () => {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Main />}/>
                  <Route path="/cars" element={<Cars />} />
                  <Route path="/singleCar" element={<SingleCar/>}/>
        </Routes>
      </Router>
    </div>
  );
};
