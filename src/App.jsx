import React, { useEffect, useState } from "react";
import {Route, Routes} from 'react-router-dom';
import {getPlacesData} from "./api";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import GoogleContextProvider from "./context/googleContext";
import Profile from "./pages/Profile";

export default function App() {
    
  return (
   <GoogleContextProvider>
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/home" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
   </GoogleContextProvider>
  );
}
