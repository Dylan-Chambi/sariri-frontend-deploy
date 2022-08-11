import React, { useEffect, useState } from "react";
import {Route, Routes} from 'react-router-dom';
import {getPlacesData} from "./api";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import GoogleContextProvider from "./context/googleContext";

export default function App() {
    
  return (
   <GoogleContextProvider>
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/home" element={<Home />} />
    </Routes>
   </GoogleContextProvider>
  );
}
