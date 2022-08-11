import React, { useEffect, useState } from "react";
import {Route, Routes} from 'react-router-dom';
import {getPlacesData} from "../api";
import Footer from "../components/Footer";
import Principal from "../components/Principal";
import Navbar from "../components/Navbar";
import ScrollToTop from "../components/ScrollToTop";
import scrollreveal from "scrollreveal";
import {useContext} from "react";
import {GoogleContext} from "../context/googleContext";
 function Home() {
    const [places, setPlaces] = useState([])
     const {flag, user} = useContext(GoogleContext)

    useEffect(() => {
        getPlacesData().then((data) => {console.log(data); setPlaces(data)})
    }, [])

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
        {!flag && <div>Bienvenido {user.name}</div>}
      <ScrollToTop />
      <Navbar />
      <Principal />
      <Footer />
    </div>
  );
}
export default Home;
