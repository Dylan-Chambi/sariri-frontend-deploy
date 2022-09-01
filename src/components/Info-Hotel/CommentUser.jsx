import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stars from './Stars';
import { Typography, Button } from '@mui/material';

export default function FullWidthTextField() {
  return (
    <Box
      sx={{
        width: 1100,
        maxWidth: '100%',
      }}
    >
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
        }
        }>
        <Typography variant='h5' fontWeight={'bold'}> Dejanos tu opinion! </Typography>
        <Stars />
        </Box>
      <TextField fullWidth id="fullWidth"/>
      <Box sx={{ 
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
       }}>
      <Button variant="contained" color='primary'>Enviar</Button>
      </Box>
    </Box>
  );
}
