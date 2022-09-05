import { Box } from '@material-ui/core';
import * as React from 'react';
import Navbar from '../components/Navbar';
import { Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
export default function Favorites() {
    return (
        <div>
            <Navbar />
            <Box sx={{margin:'5%', display: 'flex', flexDirection: 'row', alignItems: 'flex-end', }}>
                <Typography variant="h3" component="h3" fontWeight={'bold'} gutterBottom>
                    Favoritos
            </Typography>
            <FavoriteIcon sx={{ fontSize: 50 }} />
            </Box>
        </div>
    );
}