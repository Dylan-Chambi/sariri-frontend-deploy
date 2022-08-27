import React, { useState, useEffect, createRef } from 'react';
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';
import useStyles from './styles.js';
import Box from '@mui/material/Box';

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
      <Typography variant="h4">Encuentra tu hotel</Typography>
      <h5>Explicación de precios</h5>
      <h6>$ = Precios hasta 110 </h6>
        <h6>$$ = Precios hasta a 200 </h6>
        <h6>$$$ = Precios hasta a 300 </h6>
        <h6>$$$$ = Precios hasta a 400 </h6>
      {isLoading ? (
        <div className={classes.loading}>
          <CircularProgress size="5rem" />
        </div>
      ) : (
        <>
          <FormControl className={classes.formControl}>
            <InputLabel id="rating">Precio</InputLabel>
            <Select id="rating" value={priceRange} onChange={(e) => setPriceRange(e.target.value)}>
              <MenuItem value="">Todos</MenuItem>
              <MenuItem value="$">$</MenuItem>
              <MenuItem value="$$">$$</MenuItem>
              <MenuItem value="$$$">$$$</MenuItem>
              <MenuItem value="$$$$">$$$$</MenuItem>
            </Select>
          </FormControl>
        </>
        
      )}
      </Box>
    </div>
  );
};

export default List;
