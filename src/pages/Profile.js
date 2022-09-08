import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import imagen from '../assets/bolivia2.jpg';
import { useState, useContext } from 'react';
import { GoogleContext } from "../context/googleContext";
import { api } from '../api';
import { useNavigate } from 'react-router-dom';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';


const theme = createTheme();

export default function Profile() {
    const { userSariri, setUserSariri } = useContext(GoogleContext)
    const navigate = useNavigate();
    const [readOnly, setReadOnly] = useState(true);
    const [newPhoneNumber, setNewPhoneNumber] = useState(userSariri.user_phone);
    const [newUserName, setNewUserName] = useState(userSariri.user_name);
    const [newUserLastName, setNewUserLastName] = useState(userSariri.user_lastName);

    const [open, setOpen] = React.useState(false);

    const [message, setMessage] = useState("");
    const handleClose = () => {
        setOpen(false);
        navigate('/home')
    };

    const handleEditButtonChange = () => {
        setReadOnly(!readOnly);
        setShow((prevState) => !prevState);
    }

    const [show, setShow] = useState(false);
    const [errorText, setErrorText] = useState('');
    const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
    const [disableButton, setDisableButton] = useState(false);

    const handleUpdateUser = async (event) => {
        event.preventDefault();
        await api.patch('/user/' + userSariri.user_id, {
            user_name: newUserName,
            user_lastName: newUserLastName,
            user_phone: newPhoneNumber
        }).then(async (response) => {

            if (response.status === 200) {
                setOpen(true);
                setMessage("Usuario actualizado correctamente");
                const uploadDB = await api.get('/user/' + userSariri.user_id);
                setUserSariri(uploadDB.data[0])
            }
        }).catch((err) => {
            
            setOpen(true);
            setMessage("Error al actualizar los datos");

        })

    }

    const handleError = (event) => {
        setNewPhoneNumber(event.target.value)
        if (event.target.value.match(phoneRegex)) {
            setErrorText('');
            setDisableButton(false);
        } else {
            setErrorText('Ingrese un numero de telefono valido');
            setDisableButton(true);
        }
    }

    

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
                            component="form" noValidate onSubmit={handleUpdateUser}
                        >
                            <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
                                <AccountCircleIcon />
                            </Avatar>
                            <Typography component="h1" variant="h5" sx={{ fontWeight: 'bold' }}>
                                Perfil
                            </Typography>
                            <Box sx={{ mt: 1 }}>
                                <Typography variant="body1" color="text.secondary" align="left" sx={{ fontWeight: 'bold' }}>
                                    Nombre:
                                </Typography>
                                <Box

                                    sx={{
                                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <TextField
                                        id="outlined-read-only-input"
                                        value={newUserName}
                                        InputProps={{
                                            readOnly: readOnly,
                                        }}
                                        onChange={(e) => setNewUserName(e.target.value)}
                                    />
                                </Box>
                            </Box>
                            <Box sx={{ mt: 1 }}>
                                <Typography variant="body1" color="text.secondary" align="left" sx={{ fontWeight: 'bold' }}>
                                    Apellido:
                                </Typography>
                                <Box

                                    sx={{
                                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <TextField
                                        id="outlined-read-only-input"
                                        value={newUserLastName}

                                        InputProps={{
                                            readOnly: readOnly,
                                        }}
                                        onChange={(e) => setNewUserLastName(e.target.value)}

                                    />
                                </Box>
                            </Box>
                            <Box sx={{ mt: 1 }}>

                                <Typography variant="body1" color="text.secondary" align="left" sx={{ fontWeight: 'bold' }}>
                                    Telefono:
                                </Typography>
                                <Box

                                    sx={{
                                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <TextField
                                        id="outlined-read-only-input"
                                        value={newPhoneNumber}
                                        type="phone"

                                        onChange={handleError}
                                        helperText={errorText}

                                        InputProps={{
                                            readOnly: readOnly,
                                        }}
                                    />
                                </Box>
                            </Box>
                            {!show &&
                                <Button
                                    fullWidth
                                    variant="contained"
                                    sx={{ width: 230, mt: 3, mb: 2 }}
                                    onClick={handleEditButtonChange}

                                >
                                    EDITAR
                                </Button>}
                            <Button
                                type="submit"
                                disabled={disableButton}
                                variant="contained"
                                sx={{ width: 230, mt: 3, mb: 2 }}

                            >
                                GUARDAR
                            </Button>
                            <Dialog
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="alert-dialog-title"
                                aria-describedby="alert-dialog-description"
                            >
                                <DialogTitle id="alert-dialog-title">
                                    {message}
                                </DialogTitle>
                                <DialogActions>
                                    <Button onClick={handleClose} autoFocus>
                                        OK
                                    </Button>
                                </DialogActions>
                            </Dialog>
                        </Box>
                    </Grid>
                </Grid>
            </ThemeProvider>
        </div>
    );
}