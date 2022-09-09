import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect({ nroHuespedes, setNroHuespedes }) {

  const handleChange = (event) => {
    setNroHuespedes(event.target.value);
  };

  const range = (start, end) => {
    return Array(end - start + 1).fill().map((_, idx) => start + idx)
  }

  return (
    <Box sx={{ minWidth: 120, margin: 2 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Huespedes</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={nroHuespedes}
          label="huespedes"
          onChange={handleChange}
        >
          {range(1, 20).map((i) => (
            <MenuItem value={i}>{i}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
