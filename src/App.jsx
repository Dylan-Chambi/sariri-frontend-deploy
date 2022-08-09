import React, { useEffect, useState } from "react";
import {Route, Routes} from 'react-router-dom';
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import GoogleContextProvider from "./context/googleContext";

export default function App() {
    
  return (
      <GoogleContextProvider>
          <Routes>
              <Route path="/signin" element={<SignIn />} />
              <Route path="/home" element={<Home />} />
              <Route path="/signup" element={<SignUp />} />
          </Routes>
      </GoogleContextProvider>

  );
}
