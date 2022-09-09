// import React from "react";
// import styled from "styled-components";
import Map from "./Map/Map";
import Grid from "@mui/material/Grid";
import List from "./List/List";

export default function Hotels({setChildClicked, setBounds, setCoords, coords, filteredPlaces, places, priceRange, setPriceRange, isLoading, childClicked, maxPlaces, setMaxPlaces, checkIn, checkOut, numGuests}) {
    return(

    <Grid id="hotels" container spacing={3} style={{ width: '100%' }}>
        <Grid item xs={12} md={4}>
            <List
                numGuests={numGuests}
                checkIn={checkIn}
                checkOut={checkOut}
                maxPlaces={maxPlaces}
                setMaxPlaces={setMaxPlaces}
                isLoading={isLoading}
                childClicked={childClicked}
                places={filteredPlaces.length ? filteredPlaces : places}
                priceRange={priceRange}
                setPriceRange={setPriceRange}
            />
        </Grid>
        <Grid item xs={12} md={8} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Map
                setChildClicked={setChildClicked}
                setBounds={setBounds}
                setCoords={setCoords}
                coords={coords}
                places={filteredPlaces.length ? filteredPlaces : places}
            />

        </Grid>
    </Grid>

    )
}

// const Section = styled.section`
//   padding: 5rem 0;
//   display: grid;
//   grid-template-columns: repeat(4, 1fr);
//   gap: 1rem;
//   .service {
//     display: flex;
//     flex-direction: column;
//     gap: 1rem;
//     padding: 2rem;
//     background-color: aliceblue;
//     box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
//     transition: 0.3s ease-in-out;
//     &:hover {
//       transform: translateX(0.4rem) translateY(-1rem);
//       box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
//     }
//     .icon {
//       img {
//         height: 2.4rem;
//       }
//     }
//   }
//   @media screen and (min-width: 280px) and (max-width: 720px) {
//     grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
//   }
//   @media screen and (min-width: 720px) and (max-width: 1080px) {
//     grid-template-columns: repeat(2, 1fr);
//   }
// `;