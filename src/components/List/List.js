import React, { useState, useEffect, createRef } from 'react';
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';
import useStyles from './styles.js';
import Box from '@mui/material/Box';
import PlaceDetails from '../PlaceDetails/PlaceDetails';
import InformationButton from './InformationButton';
import { color } from '@mui/system';
import InputBase from '@mui/material/InputBase';
import { styled } from '@mui/material/styles';
const BootstrapInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: '#fff',
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '6px 26px 6px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}));
const List = ({ places, childClicked, isLoading, setPriceRange, priceRange }) => {
  const [elRefs, setElRefs] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    setElRefs((refs) => Array(places.length).fill().map((_, i) => refs[i] || createRef()));
  }, [places]);

  return (
    <div className={classes.container}>
      <Box
        display="flex justify-content-around"
        color={'white'}
        backgroundColor={'primary.main'}
        padding={3}
        borderRadius={3}


      >
        <Typography variant="h4">Encuentra tu hotel!</Typography>
        <Typography variant="h7">Selecciona el precio que deseas</Typography>
        {isLoading ? (
          <div className={classes.loading}>
            <CircularProgress size="5rem" color='#fff' />
          </div>
        ) : (
          <>

            <Box display="flex" justifyContent="space-between" alignItems="center">
              <FormControl fullWidth>

                <Select id="demo-simple-select-label" value={priceRange} onChange={(e) => setPriceRange(e.target.value)}
                  input={<BootstrapInput />}>
                  <MenuItem value="">Todos</MenuItem>
                  <MenuItem value="$">$</MenuItem>
                  <MenuItem value="$$">$$</MenuItem>
                  <MenuItem value="$$$">$$$</MenuItem>
                  <MenuItem value="$$$$">$$$$</MenuItem>
                </Select>
              </FormControl>
              <InformationButton />

            </Box>
            <Grid container spacing={3} className={classes.list}>
              {places?.map((place, i) => (
                <Grid ref={elRefs[i]} key={i} item xs={12}>
                  <PlaceDetails selected={Number(childClicked) === i} refProp={elRefs[i]} place={place} />
                </Grid>
              ))}
            </Grid>
          </>

        )}
      </Box>
    </div>
  );
};

export default List;
