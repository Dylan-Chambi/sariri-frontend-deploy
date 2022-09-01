import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Calendar from './Calendar';
import Huespedes from './Huespedes';
import { bgcolor, margin } from '@mui/system';

export default function DisableElevation() {
  return (
    <Box sx={{ minWidth: 275, 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    }}>
        <Typography sx={{ fontSize: 20, bgcolor:"#1c74d4", borderRadius: 2, padding: 1, color: 'white', fontWeight: 'bold', margin:2}} gutterBottom>
        104$ noche
      </Typography>
<Calendar/>
<Huespedes/>
    <Button variant="contained" sx={{margin: 5, }}>
      RESERVAR
    </Button>
    </Box>
  );
}
