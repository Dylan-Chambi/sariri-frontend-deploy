import { Box } from '@material-ui/core';
import * as React from 'react';
import Navbar from '../components/Navbar';
import { Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoritesCard from '../components/FavoritesCard/FavoritesCard';
import { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import { getFavoritePlacesData } from '../api/index';
import { useContext } from 'react';
import { GoogleContext } from '../context/googleContext';

export default function Favorites() {
    const { userSariri } = useContext(GoogleContext);


    const [favPlaces, setFavPlaces] = useState([]);
    

    useEffect(() => {
        getFavoritePlacesData(userSariri.user_id).then(res => {
            setFavPlaces(res.data);
        }).catch(err => {
            console.log(err);
        });
    }, [userSariri.user_id]);

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
                {favPlaces?.map((place, index) => <FavoritesCard key={index} place={place} user_id={userSariri.user_id} />)}
            </section>
            <Footer />
        </div>
    );
}

