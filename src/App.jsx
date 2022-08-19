import React, { useEffect, useState } from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {getPlacesData} from "./api";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import GoogleContextProvider from "./context/googleContext";
import Profile from "./pages/Profile";

export default function App() {
    
  return (
   <GoogleContextProvider>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/home" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
    </BrowserRouter>
   </GoogleContextProvider>
  );
}
