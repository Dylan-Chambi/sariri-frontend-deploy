import { Box } from '@material-ui/core';
import * as React from 'react';
import Navbar from '../components/Navbar';
import { Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoritesCard from '../components/FavoritesCard/FavoritesCard';
import { useEffect, useState } from 'react';
import { api } from "../api";
export default function Favorites() {
    const [places, setPlaces] = useState([]);
    //useEffect(() => {
    //    api.get("/hotels-fav/user/:id").then((response) => {
            //falta el id del usuario
     //       setPlaces(response.data);
    //    });
    //}, []);
    const example = {
        location_id: 4564510,
        hotel_name: "Kempinski Hotel",
        hotel_lat: "45.4545",
        hotel_lng: "45.4787",
        photo_url: "https://media-cdn.tripadvisor.com/media/photo-s/1c/d2/67/8a/exterior.jpg",
        hotel_price: 45,
        
    };
    return (
        <div>
            <Navbar />
            <Box sx={{margin:'5%', display: 'flex', flexDirection: 'row', alignItems: 'center',}}>
                <Typography color={'primary'} variant="h3" component="h3" fontWeight={'bold'} gutterBottom marginRight={1.5}>
                    Favoritos
            </Typography>
            <FavoriteIcon color={'primary'} sx={{ fontSize: 40 }} />
            </Box>
                <section
                className='favorites-list'  
                >
                    <FavoritesCard place={example} />
                    <FavoritesCard place={example} />
                    <FavoritesCard place={example} />
                    <FavoritesCard place={example} />
                    <FavoritesCard place={example} />
                    <FavoritesCard place={example} />
                    <FavoritesCard place={example} />
                    <FavoritesCard place={example} />
                </section>
        </div>
    );
}

