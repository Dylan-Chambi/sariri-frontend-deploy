import React, { useState, useContext } from "react";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import MuiPhoneNumber from 'material-ui-phone-number';
import HouseIcon from '@mui/icons-material/House';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { GoogleContext } from "../context/googleContext";
import { api } from "../api";
import { useNavigate } from "react-router-dom";
import Message from ".././components/global-components/popUpSignIn"
function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            Sariri

            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createTheme({});

export default function SignIn({ signIn }) {

    const navigate = useNavigate();

    const { userGoogle, setUserSariri } = useContext(GoogleContext)


    const [phoneNumber, setPhoneNumber] = React.useState('');


    const postUser = async (n) => {
        console.log("hola")
        await api.post('/user', {
            user_id: userGoogle.sub,
            user_name: userGoogle.given_name,
            user_lastName: userGoogle.family_name,
            user_phone: n,
            user_email: userGoogle.email
        }).then(async res => {
            console.log(res);
            if (res.status === 201) {
                const saririDBUser = await api.get('/user/' + userGoogle.sub);
                setUserSariri(saririDBUser.data[0])
                navigate("/home")
            }
        }).catch(err => {
            <Message/>
        });
    }


    return (
        <ThemeProvider theme={theme}>

            <Container component="main" maxWidth="m" sx={{ backgroundImage: 'url(../assets/bolivia2.jpg)' }}>
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        bgcolor: '#fff',
                    }}
                >
                    <Typography component="h1" variant="h4" sx={{ mt: 3, mb: 3, fontWeight: 'bold' }}>
                        Tu viaje comienza junto a Sariri!
                    </Typography>
                    <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
                        <HouseIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5" marginBottom={3}>
                        Ingresar
                    </Typography>
                    <Box component="form" noValidate sx={{ mt: 1 }}>
                        <div color="primary"
                             type="submit"
                             align="center"
                             variant="contained"
                             sx={{ mt: 10, mb: 6 }} id='signInDiv'></div>
                        {!signIn && <><MuiPhoneNumber defaultCountry={'us'} onChange={(value) => { setPhoneNumber(value) }} value={phoneNumber}
                                                      margin="normal"
                                                      required
                                                      fullWidth
                                                      id="phone"
                                                      label="Ingrese su numero de telefono"
                                                      name="phone"
                                                      autoFocus
                        />

                            <Button
                                underline="none"
                                color="primary"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                                onClick={() => postUser(phoneNumber)}>
                                Conectar
                            </Button></>}

                        <Button
                            href="/home"
                            underline="none"
                            color="primary"
                            type="submit"
                            fullWidth
                            variant="contained"
                            onClick={navigate('/home')}
                            sx={{ mt: 3, mb: 2 }}>
                            Skip
                        </Button>

                    </Box>
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>

        </ThemeProvider>
    );
}