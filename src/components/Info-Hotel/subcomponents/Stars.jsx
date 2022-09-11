import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

// const StyledRating = styled(Rating)({
//   '& .MuiRating-iconFilled': {
//     color: '#ff6d75',
//   },
//   '& .MuiRating-iconHover': {
//     color: '#ff3d47',
//   },
// });

export default function CustomizedRating() {
  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Rating name="customized-10" defaultValue={0} max={10} />
    </Box>
  );
}
