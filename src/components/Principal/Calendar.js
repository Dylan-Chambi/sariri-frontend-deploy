import * as React from 'react';

import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { fontGrid } from '@mui/material/styles/cssUtils';
import { responsiveFontSizes } from '@material-ui/core';
import { sizeHeight } from '@mui/system';

export default function BasicDateRangePicker() {
  const [value, setValue] = React.useState([null, null]);

  return (
    <LocalizationProvider
      dateAdapter={AdapterDayjs}
      localeText={{ start: 'Check-in', end: 'Check-out'}}
    >
      <DateRangePicker
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
      disablePast
        renderInput={(startProps, endProps) => (
            
          <React.Fragment>
            <TextField {...startProps} />
            <Box sx={{ mx: 2 }}> hasta </Box>
            <TextField {...endProps} />
          </React.Fragment>
        )}
      />
       

    </LocalizationProvider>
  );
}