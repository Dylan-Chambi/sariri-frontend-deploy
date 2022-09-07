import React, { useEffect, useState, useRef } from "react";
import { Route, Routes } from "react-router-dom";
import { getPlacesData } from "../api";
import Footer from "../components/Footer";
import Principal from "../components/Principal";
import Navbar from "../components/Navbar";
import ScrollToTop from "../components/ScrollToTop";
import scrollreveal from "scrollreveal";
import {useContext} from "react";
import {GoogleContext} from "../context/googleContext";
import { Grid } from "@material-ui/core";
import Map from "../components/Map/Map";
import Hotels from "../components/Hotels";
import ScrollReveal from "./../components/container/ScrollReveal";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

 function Home() {
    const [places, setPlaces] = useState([])
    const {flag, userSariri} = useContext(GoogleContext)
    const [autocomplete, setAutocomplete] = useState(null);
    const [coords, setCoords] = useState(null);
    const [childClicked, setChildClicked] = useState(null);
    const [bounds, setBounds] = useState(null);
    const [filteredPlaces, setFilteredPlaces] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [type, setType] = useState("hotels");
    const [rating, setRating] = useState("");
    const [priceRange, setPriceRange] = useState("Todos");


    const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  // const [open2, setOpen2] = React.useState(false);
  // const handleClose2 = () => {
  //   setOpen2(false);
  // };
  
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
    if (filtered.length===0 && priceRange!=="Todos") {
      setOpen(true);
    }
    filtered.map((place) => console.log("Nivel: " + place.price_level));
    setFilteredPlaces(filtered);
  }, [priceRange]);

  useEffect(() => {
    if (bounds) {
      setIsLoading(true);

      getPlacesData(bounds.sw, bounds.ne).then((data) => {
        setPlaces(data.filter((place) => true));
        setFilteredPlaces([]);
        setRating("");
        setPriceRange("Todos");
        setIsLoading(false);
      }).catch((error) => {
        console.log(error);
      });
    }
  }, [bounds]);

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
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Lo sentimos, no se encontraron lugares de acuerdo al filtro seleccionado."}
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
export default Home;
