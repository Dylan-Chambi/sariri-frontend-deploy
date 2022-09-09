import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Calendar from './Calendar';
import Huespedes from './Huespedes';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function DisableElevation({ price }) {
  const navigate = useNavigate();
  const [nroHuespedes, setNroHuespedes] = useState(1);
  const [nroNoches, setNroNoches] = useState(1);

  return (
    <Box sx={{
      minWidth: 275,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-evenly'
    }}>
      <Typography sx={{ fontSize: 20,  backgroundColor: "#B9C7D8", borderRadius: 2, padding: 1, fontWeight: 'bold', margin: 2 }} gutterBottom>
        {price}$ noche
      </Typography>
      <Calendar setNroNoches={setNroNoches}/>
      <Huespedes setNroHuespedes={setNroHuespedes}/>
      <Box sx={{ display: 'flex', flexDirection: 'row' }}>
        <Box sx={{ backgroundColor: "#B9C7D8", display:'flex', 
        alignItems: 'center', justifyContent: 'center', borderRadius: 2, padding:1, margin: 5 }}>
          <Typography sx={{fontWeight: 'bold', fontSize:18}}>
            Precio sumado: {price*nroHuespedes*nroNoches}$
          </Typography>
        </Box>
        <Button variant="contained" padding={10} sx={{ margin: 5, width: '100px', height: '50px',
        fontSize: 18, fontWeight: 'bold', backgroundColor: "#1c74d4", color: 'white' , borderRadius: 2, 
      }} onClick={() => navigate('/book')}>
          RESERVAR
        </Button>
      </Box>
    </Box>
  );
}
