import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Calendar from './Calendar';
import Huespedes from './Huespedes';
import Reservar from './Reservar';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '10px', transform: 'scale(1)' }}
  >
    •
  </Box>
);

const card = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        104$ noche
      </Typography>
      <Calendar/>
      <Huespedes/>
    </CardContent>
    <CardActions>
      <Reservar/>
    </CardActions>
  </React.Fragment>
);

export default function OutlinedCard() {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}
