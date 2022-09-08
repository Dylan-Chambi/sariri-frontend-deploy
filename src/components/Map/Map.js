import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';

import mapStyles from './mapStyles';
import useStyles from './styles.js';

const Map = ({ coords, places, setCoords, setBounds, setChildClicked }) => {
    const matches = useMediaQuery('(min-width:600px)');
    const classes = useStyles();


    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
                defaultCenter={coords}
                center={coords}
                defaultZoom={14}
                margin={[50, 50, 50, 50]}
                
                options={{ disableDefaultUI: true, zoomControl: true, styles: mapStyles }}
                onChange={(e) => {
                    setCoords({ lat: e.center.lat, lng: e.center.lng });
                    setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
                }}
                onChildClick={(child) => setChildClicked(child)}
            >
                {places.length && places.map((place, i) => (
                    <div
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
                    </div>
                ))}
            </GoogleMapReact>
        </div>
    );
};

export default Map;