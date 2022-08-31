import React, { useEffect, useState, useRef } from "react";
import { Route, Routes } from "react-router-dom";
import { getPlacesData } from "../api";
import Footer from "../components/Footer";
import Principal from "../components/Principal";
import Navbar from "../components/Navbar";
import ScrollToTop from "../components/ScrollToTop";
import scrollReveal from "scrollreveal";
import { Grid } from "@material-ui/core";
import Map from "../components/Map/Map";
import { useContext } from "react";
import { GoogleContext } from "../context/googleContext";
import Hotels from "../components/Hotels";
import ScrollReveal from "./../components/container/ScrollReveal";
function Home() {
  const sectionRef = useRef < HTMLElement > null;
  const { flag, user } = useContext(GoogleContext);

  const [autocomplete, setAutocomplete] = useState(null);
  const [coords, setCoords] = useState({});
  const [childClicked, setChildClicked] = useState(null);
  const [bounds, setBounds] = useState(null);
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const [places, setPlaces] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [type, setType] = useState("hotels");
  const [rating, setRating] = useState("");
  const [priceRange, setPriceRange] = useState("");

  // useEffect(() => {
  //     getPlacesData().then((data) => {console.log(data); setPlaces(data)})
  // }, [])

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoords({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  useEffect(() => {
    const filtered = places.filter((place) => Number(place.rating) > rating);

    setFilteredPlaces(filtered);
  }, [rating]);

  useEffect(() => {
    const filtered = places.filter(
      (place) => String(place.price_level) === priceRange
    );
    filtered.map((place) => console.log("Nivel: " + place.price_level));
    setFilteredPlaces(filtered);
  }, [priceRange]);

  useEffect(() => {
    if (bounds) {
      setIsLoading(true);

      getPlacesData(type, bounds.sw, bounds.ne).then((data) => {
        setPlaces(data.filter((place) => place.name && place.num_reviews > 0));
        setFilteredPlaces([]);
        setRating("");
        setPriceRange("");
        setIsLoading(false);
      });
    }
  }, [bounds, type]);

  const onLoad = (autoC) => setAutocomplete(autoC);

  const onPlaceChanged = () => {
    const lat = autocomplete.getPlace().geometry.location.lat();
    const lng = autocomplete.getPlace().geometry.location.lng();

    setCoords({ lat, lng });
  };

  const showHotelsInConsole = () => {
    // console.log("Start showing")
    // console.log("-------------------------------------")
    // places?.map((place, i) => (console.log(place)))
    // console.log("-------------------------------------")
    // console.log("Done showing")
  };

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <ScrollReveal>
        <Principal
          onPlaceChanged={onPlaceChanged}
          onLoad={onLoad}
          showHotels={showHotelsInConsole()}
        />
      </ScrollReveal>
      <ScrollReveal>
        <Hotels
          coords={coords}
          places={places}
          filteredPlaces={filteredPlaces}
          setCoords={setCoords}
          setBounds={setBounds}
          setChildClicked={setChildClicked}
          setPriceRange={setPriceRange}
          priceRange={priceRange}
          isLoading={isLoading}
          childClicked={childClicked}
        />
      </ScrollReveal>
      <Footer />
    </>
  );
}
export default Home;
