import Images from './subcomponents/imagesList';
import * as React from 'react';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import FavButton from './subcomponents/FavButton';
import Contacts from './subcomponents/Contacts';
import Reservar from './subcomponents/Reservar';
import Navbar from '../Navbar';
import Divider from '@mui/material/Divider';
import Services from './subcomponents/Services';
import Mapa from './subcomponents/Mapa';
import Comment from './subcomponents/CommentUser';
import Others from './subcomponents/CommetsOthersUsers';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Grid } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import { useContext } from 'react';
import { GoogleContext } from '../../context/googleContext';

export default function InfoHoteles({ hotelInfo, checkIn, checkOut, numGuests }) {
  const navigate = useNavigate();
  const { userSariri } = useContext(GoogleContext);
  const user_id = userSariri?.user_id;

  const [open, setOpen] = useState(false);


  const handleClose = () => {
    setOpen(false);
    navigate('/home');
  };

  return (
    <>
      {hotelInfo ? <Box>
        <Navbar />
        <Box sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-evenly',

          marginBottom: '2%',


        }}>
          <Box sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-end',
            justifyContent: 'left',

            marginRight: '2%'
          }}>
            <Grid container spacing={2}>
              <Grid item xs={10} md={5}>

                <Typography sx={{
                  fontWeight: 'bold',
                  fontSize: '2.5rem',
                  textAlign: 'center',
                  marginTop: '1rem',
                  marginLeft: '2rem',
                  marginRight: '2rem',
                  bgcolor: 'primary.main',
                  borderRadius: '10px',
                  color: '#fff',
                  padding: '1rem',
                  fontFamily: 'Roboto',
                }
                }>{hotelInfo.hotel_name}</Typography>

              </Grid>
              <Grid item xs={2} md={2} alignSelf='center'>
                <FavButton isFavorite={hotelInfo.isFavorite} user_id={user_id} location_id={hotelInfo.location_id} />
              </Grid>
            </Grid>


          </Box>
        </Box>
        <Box sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
          padding: '1rem',
          margin: 'auto',
          borderRadius: '10px',
          marginBottom: '2rem',
        }}>
          <Images imageList={hotelInfo.photo_url_original ? [{ img: hotelInfo.photo_url_original, tittle: hotelInfo.hotel_name }] : []} />
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'left',
            justifyContent: 'center',
            marginLeft: '2rem',
          }}>
            <Typography sx={{
                fontWeight: 'bold',
                fontSize: '2rem',
                textAlign: 'left',
                marginLeft: '2rem',
              }}>
                INFORMACION
              </Typography>
            <Grid item xs={10} md={5}>
              <Contacts location_string={hotelInfo.hotel_address} phone_number={hotelInfo.contact_number} />
            </Grid>
            <Box sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'left',
            }}>
              <Typography sx={{
                fontWeight: 'bold',
                fontSize: '2rem',
                textAlign: 'left',
                marginLeft: '2rem',
              }}>
                SERVICIOS
              </Typography>
              <Services serviceList={hotelInfo.services} />

            </Box>
          </Box>
        </Box>
        <Divider color="#000" />
        <Box
          sx={{
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
            marginTop: '2rem',
            marginBottom: '2rem',
          }}
        >
          <Reservar price={getMaxPrice(hotelInfo.hotel_price)} checkIn={checkIn ?? null} checkOut={checkOut ?? null} numGuests={numGuests ?? ''} />
        </Box>
        <Divider color="#000" />
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
          padding: '2rem',
        }}>

          <Mapa coords={{ lat: parseFloat(hotelInfo.hotel_lat), lng: parseFloat(hotelInfo.hotel_lng) }} />

        </Box>
        <Divider color="#000" />
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
          height: '100%',
          padding: '2rem',
        }}>
          <Comment />
          <Others />



        </Box>

      </Box> : null}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"No se pudo cargar correctamente la página, lo sentimos."}
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            CANCELAR
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

const getMaxPrice = (priceString) => {
  const prices =priceString.match(/\d+/g);
  if(prices[1]){
    return prices[1];
  }else{
    return prices[0];
  }
}