import React, { useEffect, useState, useContext } from "react";
import {BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import {getPlacesData} from "./api";
import Home from "./pages/Home";
import SignIn_Up from "./pages/SignIn-Up";
import {GoogleContext} from "./context/googleContext";

export default function App() {
  const {userGoogle, userSariri} = useContext(GoogleContext)

  useEffect(() => {
    console.log(userSariri)
  }, [userSariri])
    
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/sign-in" />} />
      <Route path="/sign-in" element={<SignIn_Up signIn={true}/>} />
      <Route path="/sign-up" element={<SignIn_Up signIn={false}/>} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}
