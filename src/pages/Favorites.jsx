import { Box } from '@material-ui/core';
import * as React from 'react';
import Navbar from '../components/Navbar';
import { Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PlaceDetails from '../components/PlaceDetails/PlaceDetails';
export default function Favorites() {
    return (
        <div>
            <Navbar />
            <Box sx={{margin:'5%', display: 'flex', flexDirection: 'row', alignItems: 'center',}}>
                <Typography color={'primary'} variant="h3" component="h3" fontWeight={'bold'} gutterBottom marginRight={1.5}>
                    Favoritos
            </Typography>
            <FavoriteIcon color={'primary'} sx={{ fontSize: 40 }} />
            </Box>
            <Box sx={{margin:'5%', display: 'flex', flexDirection: 'row', alignItems: 'center',}}>
            <PlaceDetails place={'LaPaz'} sx={{innerHeight:10}}/>
            </Box>
        </div>
    );
}