import Images from '../components/Info-Hotel/imagesList';
import * as React from 'react';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import FavButton from '../components/Info-Hotel/FavButton';
import Contacts from '../components/Info-Hotel/Contacts';
import Reservar from '../components/Info-Hotel/Reservar';
import Navbar from '../components/Navbar';
import Divider from '@mui/material/Divider';
import Services from '../components/Info-Hotel/Services';
import Mapa from '../components/Info-Hotel/Mapa';
import Stars from '../components/Info-Hotel/Stars';
import Comment from '../components/Info-Hotel/CommentUser';
import Others from '../components/Info-Hotel/CommetsOthersUsers';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { getHotelInfo, getHotelMoreInfo } from '../api';
import { Grid } from '@mui/material';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function InfoHoteles() {
  console.log('InfoHoteles');
  const navigate = useNavigate();
  const location = useLocation();
  const [hotelInfo, setHotel] = useState(location.state.hotel_info);

  const [open, setOpen] = React.useState(false);


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
              <Grid item xs={12} md={5}>

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
              <Grid item xs={10} md={5} alignSelf='self-end'>
                <Contacts location_string={hotelInfo.hotel_address} phone_number={hotelInfo.contact_number} />
              </Grid>
              <Grid item xs={2} md={2} alignSelf='center'>
                <FavButton />
              </Grid>
            </Grid>


          </Box>



        </Box>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
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
          <Reservar price={getMaxPrice(hotelInfo.hotel_price)} />
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
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            height: '100%',

          }}>
            <Typography sx={{
              fontWeight: 'bold',
              fontSize: '2rem',
              textAlign: 'left',
              marginLeft: '15rem',
              marginTop: '1rem',
              marginBottom: '1rem',
            }}>
              SERVICIOS
            </Typography>
            <Services serviceList={hotelInfo.services} />

          </Box>
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

const getMaxPrice = (priceString) => priceString.match(/\d+/g)[1]