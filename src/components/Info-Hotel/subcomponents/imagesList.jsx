import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
export default function StandardImageList({ imageList }) {
  const theme = useTheme();
  const matchDownMd = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <ImageList sx={{
      width: matchDownMd ? 450 : 560, height: 560, gridAutoFlow: "column",
      overflow: "none",
      backgroundColor: 'primary.main',
      gridTemplateColumns: "repeat(auto-fill,minmax(460px,1fr)) !important",
      gridAutoColumns: "minmax(460px, 1fr)", padding: 3, borderRadius: 3
    }} cols={3} rowHeight={500} >
      {imageList.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt="img"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
