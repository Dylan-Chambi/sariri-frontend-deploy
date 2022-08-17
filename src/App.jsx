import React, { useEffect, useState } from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {getPlacesData} from "./api";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import GoogleContextProvider from "./context/googleContext";

export default function App() {
    
  return (
   <GoogleContextProvider>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/home" element={<Home />} />
    </Routes>
    </BrowserRouter>
   </GoogleContextProvider>
  );
}
