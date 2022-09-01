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
import Grid from '@mui/material/Grid';

export default function InfoHoteles() {
    return (
        <React.Fragment>
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
                        fontSize: '3.5rem',
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
                    }>Rio Selva</Typography>
                         
                        </Grid>
                        <Grid item xs={10} md={5}>
                           <Contacts />
                        </Grid>
                        <Grid item xs={2} md={2}>
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
                <Images />

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
                <Reservar />
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
                    <Services />

                </Box>
                <Mapa />

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

        </React.Fragment>
    );
}
