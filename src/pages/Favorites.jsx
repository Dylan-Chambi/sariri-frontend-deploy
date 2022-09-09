import { Box } from '@material-ui/core';
import * as React from 'react';
import { api } from '../api/index'
import Navbar from '../components/Navbar';
import { Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoritesCard from '../components/FavoritesCard/FavoritesCard';
import { useEffect, useState } from 'react';
import Footer from '../components/Footer';
export default function Favorites() {
    const [places, setPlaces] = useState([]);

    //Provisional user id until Redux is properly implemented
    const provisionalID = 1

    const getFavPlaces = async () => {
        const favPlaces = await api.get(`/hotels-fav/user/${provisionalID}`)
        setPlaces(favPlaces.data)
    }

    useEffect(() => {
        getFavPlaces()
    })

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
            <Box sx={{ margin: '5%', display: 'flex', flexDirection: 'row', alignItems: 'center', }}>
                <Typography color={'primary'} variant="h3" component="h3" fontWeight={'bold'} gutterBottom marginRight={1.5}>
                    Favoritos
                </Typography>
                <FavoriteIcon color={'primary'} sx={{ fontSize: 40 }} />
            </Box>
            <section
                className='favorites-list'
            >
                {places?.map((place) => {
                    <FavoritesCard place={place} />
                })}
            </section>
            <Footer />
        </div>
    );
}

