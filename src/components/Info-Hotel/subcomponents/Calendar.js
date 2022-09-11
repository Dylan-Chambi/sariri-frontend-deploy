import * as React from 'react';

import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { useState } from 'react';

export default function BasicDateRangePicker({ setNroNoches, checkIn, checkOut }) {
  const [value, setValue] = useState([checkIn ? new Date(`${checkIn.$d}`): null, checkOut ? new Date(`${checkOut.$d}`) : null]);
  setNroNoches(calculateNights([checkIn, checkOut]));

  return (
    <LocalizationProvider
      dateAdapter={AdapterDayjs}
      localeText={{ start: 'Check-in', end: 'Check-out' }}
    >
      <DateRangePicker
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
          setNroNoches(calculateNights(newValue));
        }}
        disablePast
        renderInput={(startProps, endProps) => (
          <React.Fragment>
            <TextField {...startProps} />
            <Box sx={{ mx: 2 }}> to </Box>
            <TextField {...endProps} />
          </React.Fragment>
        )}
      />


    </LocalizationProvider>
  );
}

const calculateNights = (dateRange) => {
  if(dateRange[0] && dateRange[1]){
    const startDate = new Date(`${dateRange[0].$d}`);
    const endDate = new Date(`${dateRange[1].$d}`);

    const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    return diffDays;
  }else return 1
}