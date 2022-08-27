import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function BasicTextFields() {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 0.5, width: '26ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic"placeholder='Ej. La Paz, Bolivia'/>
    </Box>
  );
}