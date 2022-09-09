import * as React from 'react';
import Box from '@mui/material/Box';
import CallIcon from '@mui/icons-material/Call';
import { Typography } from '@mui/material';
import PlaceIcon from '@mui/icons-material/Place';

export default function contacts({ location_string, phone_number }) {
  return (
    <Box sx={{
      marginLeft: '5rem',
      marginBottom: '5rem',
  }}>
        <Typography sx={{ fontSize: 20, mt: 2, fontWeight: 'bold', display: 'flex', }}>
        <PlaceIcon color='primary'/> {location_string}
</Typography>
      <Typography sx={{ fontSize: 20, mt: 2, fontWeight: 'bold', display: 'flex', }} >
      <CallIcon color='primary'/> {phone_number}
        </Typography>
    </Box>
  );
}
