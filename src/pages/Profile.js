import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ScrollToTop from '../components/ScrollToTop';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Navbar from '../components/Navbar';
import imagen from '../assets/bolivia2.jpg';
import { useRef, useState } from 'react';


function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © Sariri'}
            {' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}



const theme = createTheme();

export default function Profile() {
    const [readOnly, setReadOnly] = useState(true);

    const handleEditButtonChange = () => {
        setReadOnly(!readOnly);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    return (
        <div>
            <ThemeProvider theme={theme}>
                <Grid container component="main" sx={{ height: '100vh' }}>
                    <CssBaseline />
                    <Grid
                        item
                        xs={false}
                        sm={4}
                        md={7}
                        sx={{
                            backgroundImage: `url(${imagen})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundColor: (t) =>
                                t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    />
                    <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                        <Box
                            sx={{
                                my: 8,
                                mx: 4,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                        >
                            <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
                                <AccountCircleIcon />
                            </Avatar>
                            <Typography component="h1" variant="h5" sx={{ fontWeight: 'bold' }}>
                                Perfil
                            </Typography>
                            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                                <Typography variant="body1" color="text.secondary" align="left" sx={{ fontWeight: 'bold' }}>
                                    Nombre:
                                </Typography>
                                <Box
                                    component="form"
                                    sx={{
                                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <div>
                                        <TextField
                                            id="outlined-read-only-input"
                                            defaultValue="Luke"
                                            InputProps={{
                                                readOnly: readOnly,
                                            }}
                                        />
                                    </div>
                                </Box>
                            </Box>
                            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                                <Typography variant="body1" color="text.secondary" align="left" sx={{ fontWeight: 'bold' }}>
                                    Apellido:
                                </Typography>
                                <Box
                                    component="form"
                                    sx={{
                                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <div>

                                        <TextField
                                            id="outlined-read-only-input"
                                            defaultValue="Morrow"
                                            InputProps={{
                                                readOnly: readOnly,
                                            }}

                                        />
                                    </div>
                                </Box>
                            </Box>
                            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                                <Typography variant="body1" color="text.secondary" align="left" sx={{ fontWeight: 'bold' }}>
                                    Telefono:
                                </Typography>
                                <Box
                                    component="form"
                                    sx={{
                                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <div>

                                        <TextField
                                            id="outlined-read-only-input"
                                            defaultValue="6556678"
                                            InputProps={{
                                                readOnly: readOnly,
                                            }}
                                        //disabled={readOnly}
                                        />
                                    </div>
                                </Box>
                            </Box>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ width: 230, mt: 3, mb: 2 }}
                                onClick={handleEditButtonChange}

                            >
                                EDITAR
                            </Button>
                            <Button
                                href="/home"
                                type="submit"

                                variant="contained"
                                sx={{ width: 230, mt: 3, mb: 2 }}
                            >
                                ACTUALIZAR INFORMACION
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </ThemeProvider>
        </div>
    );
}