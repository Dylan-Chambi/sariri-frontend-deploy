import * as React from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import CallIcon from '@mui/icons-material/Call';
import { Typography } from '@mui/material';
import { margin } from '@mui/system';
import PlaceIcon from '@mui/icons-material/Place';

export default function contacts() {
  return (
    <Box>
        <Typography sx={{fontSize: 14 , margin: 0}}>
        <PlaceIcon color='primary'/> Calle Romecin Campos Nro. 696
Esq. Francisco Bedregal Zona Sopocachi
</Typography>
      <Typography sx={{fontSize: 18 , margin: 0}} >
      <CallIcon color='primary'/> (591-2) 2412281 - 24115161
        </Typography>
    </Box>
  );
}
