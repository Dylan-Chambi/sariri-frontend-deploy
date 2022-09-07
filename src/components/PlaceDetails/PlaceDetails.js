import React, { useEffect } from 'react';
import { useState } from 'react'
import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import Rating from '@material-ui/lab/Rating';

import useStyles from './styles.js';
import { Link, useNavigate } from 'react-router-dom';

const PlaceDetails = ({ place, selected, refProp }) => {
  const navigate = useNavigate();
  const [pricePerNight, setPricePerNight] = useState("")

const priceSubstring = (place.price)?.length < 7 ? (place.price) : (place.price)?.length == 7 ? (place.price).substring(3, (place.price).length) : (place.price)?.length == 8 ? (place.price).substring(4, (place.price).length)
    : (place.price)?.length == 9 ? (place.price).substring(5, (place.price).length) : (place.price)?.length == 10 ? (place.price).substring(6, (place.price).length) : (place.price)?.substring(7, (place.price).length)
 
  useEffect(() => {
    setPricePerNight(priceSubstring)
  }, []);



  if (selected) refProp?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  const classes = useStyles();
  return (
    <Card elevation={6}>
      <CardMedia
        style={{ height: 350 }}
        image={place.photo_url ? place.photo_url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
        title={place.hotel_name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5">
          <Link to={'/hotels-info/' + place.location_id}>{place.hotel_name}</Link>
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
            {place.ranking}
          </Typography>
        </Box>
        {place?.awards?.map((award) => (
          <Box display="flex" justifyContent="space-between" my={1} alignItems="center">
            <img src={award.images.small} />
            <Typography variant="subtitle2" color="textSecondary">{award.display_name}</Typography>
          </Box>
        ))}
        {place?.cuisine?.map(({ name }) => (
          <Chip key={name} size="small" label={name} className={classes.chip} />
        ))}
        {place.hotel_address && (
          <Typography gutterBottom variant="body2" color="textSecondary" className={classes.subtitle}>
            <LocationOnIcon />{place.hotel_address}
          </Typography>
        )}
        {place.phone && (
          <Typography variant="body2" color="textSecondary" className={classes.spacing}>
            <PhoneIcon /> {place.phone}
          </Typography>
        )}
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" onClick={() => window.open(place.web_url, '_blank')}>
          Trip Advisor
        </Button>
        <Button size="small" color="primary" onClick={() => window.open(place.website, '_blank')}>
          Página Web
        </Button>
        <Button size="small" color="primary" onClick={() => { }}>
          Favorito
        </Button>
      </CardActions>
    </Card>
  );
};

export default PlaceDetails;
