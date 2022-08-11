import React, { useEffect, useState } from "react";
import {Route, Routes} from 'react-router-dom';
import {getPlacesData} from "./api";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";

export default function App() {
    
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}
