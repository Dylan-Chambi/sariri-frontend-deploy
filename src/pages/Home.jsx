import React, { useEffect, useState, useContext } from "react";
import {Route, Routes} from 'react-router-dom';
import Hero from "../components/Hero";
import ScrollToTop from "../components/ScrollToTop";
import scrollreveal from "scrollreveal";
import {GoogleContext} from "../context/googleContext";
 function Home() {

     const {flag, user} = useContext(GoogleContext)

  useEffect(() => {
    const sr = scrollreveal({
      origin: "top",
      distance: "80px",
      duration: 2000,
      reset: true,
    });
    sr.reveal(
      `
        nav,
        #hero,
        #services,
        #recommend,
        #testimonials,
        footer
        `,
      {
        opacity: 0,
        interval: 300,
      }
    );
  }, []);

  return (
    <div>
        {flag && <div>Bienvenido {user.name}</div>}
      <ScrollToTop />
      <Hero />
    </div>
  );
}
export default Home;
