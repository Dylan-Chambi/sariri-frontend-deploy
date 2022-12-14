import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';

import mapStyles from './mapStyles';
import useStyles from './styles.js';
import { Box } from '@mui/system';
import { useState } from 'react';

const Map = ({ coords, places, setCoords, setBounds, setChildClicked }) => {
    const matches = useMediaQuery('(min-width:600px)');
    const classes = useStyles();

    const [wasClicked, setWasClicked] = useState(false);

    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
                center={coords}
                defaultCenter={{ lat: -34.6037, lng: -58.3816 }}
                defaultZoom={14}
                margin={[50, 50, 50, 50]}
                
                options={{ disableDefaultUI: true, zoomControl: true, styles: mapStyles }}
                onChange={(e) => {
                    if (!wasClicked) {
                        setCoords({ lat: e.center.lat, lng: e.center.lng });
                        setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
                    }
                    setWasClicked(false);
                }}
                onChildClick={(childkey, childProps) => {
                    setWasClicked(true);
                    setChildClicked(childkey);
                    setCoords({ lat: childProps.lat, lng: childProps.lng });
                }}
            >
                {places.length && places.map((place, i) => (
                    <Box
                        className={classes.markerContainer}
                        lat={Number(place.hotel_lat)}
                        lng={Number(place.hotel_lng)}
                        key={i}
                    >
                        {(!matches)
                            ? <LocationOnOutlinedIcon fontSize="large" />
                            : place.hotel_price ? (
                                <Paper elevation={10} className={classes.paper}>
                                    <Typography className={classes.typography} variant="subtitle2" gutterBottom color='#24528A'
                                    >
                                        {(place.hotel_price)?.length < 7 ? (place.hotel_price) : (place.hotel_price)?.length === 7 ? (place.hotel_price).substring(3, (place.hotel_price).length) : (place.hotel_price)?.length === 8 ? (place.hotel_price).substring(4, (place.hotel_price).length)
                                            : (place.hotel_price)?.length === 9 ? (place.hotel_price).substring(5, (place.hotel_price).length) : (place.hotel_price)?.length === 10 ? (place.hotel_price).substring(6, (place.hotel_price).length) : (place.hotel_price)?.substring(7, (place.hotel_price).length)}
                                    </Typography>
                                </Paper>
                            ) : <div />}
                    </Box>
                ))}
            </GoogleMapReact>
        </div>
    );
};

export default Map;