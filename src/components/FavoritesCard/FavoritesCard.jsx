import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavButton from '../Info-Hotel/subcomponents/FavButton';
import { Link } from 'react-router-dom';
import { Rating } from '@mui/material';

export default function FavoritesCard({ place, user_id }) {
  return (
    <Card sx={{ maxWidth: 345, padding: 2, borderRadius: 3, hover: { cursor: 'pointer' } }}>
      <CardHeader
        title={<Typography gutterBottom variant="h5">
          <Link to='/hotel-fav' state={{ hotel_fav: place }} style={{ textDecoration: 'none', color: 'black' }}>
            {place.hotel_name}
          </Link>
        </Typography>
        }
      />
      <CardMedia
        component="img"
        height="194"
        image={place.photo_url_original}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary" component="p" sx={{ fontSize: 18 }}>
          {place.hotel_address}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavButton isFavorite={place.isFavorite} user_id={user_id} location_id={place.location_id} />
        </IconButton>
        <Rating name="read-only" value={place.hotel_rating} readOnly precision={0.1} />
      </CardActions>
    </Card>
  );
}
