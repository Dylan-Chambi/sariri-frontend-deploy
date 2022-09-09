import { Typography } from '@mui/material';
import * as React from 'react';
import Box from '@mui/material/Box';
import GoogleMapReact from 'google-map-react';
import mapStyles from '../Map/mapStyles';
export default function Mapa({ coords }) {
    return (
        <Box bgcolor={'#1c74d4'} marginLeft="10" sx={{
            padding: '15px',
            borderRadius: '10px',
            display: 'inline-block', mx: '100px', transform: 'scale(1)',
        }}
            component="span"
        >
            <Typography component="div" style={{ color: '#fff', fontWeight: 'bold', fontSize: 30, textAlign: 'center' }}>
                UBICACION
            </Typography>
            <Box sx={{ width: "1000px", height: "600px" }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "" }}
                    defaultCenter={coords}
                    center={coords}
                    defaultZoom={14}
                    margin={[50, 50, 50, 50]}
                    options={{ disableDefaultUI: true, zoomControl: true, styles: mapStyles }}>
                    <Box
                        lat={coords.lat}
                        lng={coords.lng}>
                        <img
                            height="50px"
                            width="50px"
                            src={'https://www.pngall.com/wp-content/uploads/10/Map-Marker-Transparent-PNG.png'}
                            alt="marker"
                        ></img>
                    </Box>
                </GoogleMapReact>
            </Box>
        </ Box>
    );
}

