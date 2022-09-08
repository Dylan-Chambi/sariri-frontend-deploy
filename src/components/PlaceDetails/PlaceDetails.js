import React, { useEffect } from 'react';
import { useState } from 'react'
import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import Rating from '@material-ui/lab/Rating';
import FavButton from '../Info-Hotel/FavButton';
import useStyles from './styles.js';
import { Link, useNavigate } from 'react-router-dom';

const PlaceDetails = ({ place, selected, refProp }) => {
  const navigate = useNavigate();
  const [pricePerNight, setPricePerNight] = useState("")

const priceSubstring = (place.hotel_price)?.length < 7 ? (place.hotel_price) : (place.hotel_price)?.length == 7 ? (place.hotel_price).substring(3, (place.hotel_price).length) : (place.hotel_price)?.length == 8 ? (place.hotel_price).substring(4, (place.hotel_price).length)
    : (place.hotel_price)?.length == 9 ? (place.hotel_price).substring(5, (place.hotel_price).length) : (place.hotel_price)?.length == 10 ? (place.hotel_price).substring(6, (place.hotel_price).length) : (place.hotel_price)?.substring(7, (place.hotel_price).length)
 
  useEffect(() => {
    setPricePerNight(priceSubstring)
  }, []);



  if (selected) refProp?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  const classes = useStyles();
  return (
    <Card elevation={6}>
      <CardMedia
        style={{ height: 350 }}
        image={place.photo_url_original ? place.photo_url_original : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
        title={place.hotel_name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5">
          <Link to='/hotel-info' state={{hotel_info: place}} style={{ textDecoration: 'none', color: 'black' }}>
            {place.hotel_name}
          </Link>
          </Typography>
        <Box display="flex" justifyContent="space-between" my={2}>
          <Rating name="read-only" value={Number(place.hotel_rating)} readOnly />
          <Typography component="legend">{place.num_reviews} reseña{place.num_reviews > 1 && 's'}</Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography component="legend">Precio por noche</Typography>
          <Typography gutterBottom variant="subtitle1">
            {pricePerNight}
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography component="legend">Puesto </Typography>
          <Typography gutterBottom variant="subtitle1">
            {place.hotel_ranking}
          </Typography>
        </Box>
        {place?.awards?.map((award) => (
          <Box display="flex" justifyContent="space-between" my={1} alignItems="center">
            <img src={award.badge_url} />
            <Typography variant="subtitle2" color="textSecondary">{award.display_name}</Typography>
          </Box>
        ))}
        {place.hotel_address && (
          <Typography gutterBottom variant="body2" color="textSecondary" className={classes.subtitle}>
            <LocationOnIcon />{place.hotel_address}
          </Typography>
        )}
        {place.contact_number && (
          <Typography variant="body2" color="textSecondary" className={classes.spacing}>
            <PhoneIcon /> {place.contact_number}
          </Typography>
        )}
        {place?.services?.map(({ service_name }) => (
          <Chip key={service_name} size="small" label={service_name} className={classes.chip} />
        ))}
      </CardContent>
      <CardActions justifyContent='right'>
        <Button size="small" color="primary" onClick={() => { }}>
          <FavButton/>
        </Button>
      </CardActions>
    </Card>
  );
};

export default PlaceDetails;
