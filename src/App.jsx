import React, { useEffect, useState, useContext } from "react";
import {BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import {getPlacesData} from "./api";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import GoogleContextProvider from "./context/googleContext";
import Profile from "./pages/Profile";

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
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}
