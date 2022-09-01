import WifiIcon from '@mui/icons-material/Wifi';
import PoolIcon from '@mui/icons-material/Pool';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import FreeBreakfastIcon from '@mui/icons-material/FreeBreakfast';
import TvIcon from '@mui/icons-material/Tv';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
export default function Services() {
    return (
        <Box sx={{
            marginLeft: '16rem',
            marginBottom: '5rem',
        }}>
            <Typography sx={{fontSize: 14 , margin: 1, fontWeight: 'bold'}}>
            <WifiIcon color='primary' sx={{marginRight: 1.5}}/> Wifi
            </Typography>
            <Typography sx={{fontSize: 14 , margin: 1, fontWeight: 'bold'}}>
            <PoolIcon color='primary' sx={{marginRight: 1.5}}/> Piscina
            </Typography>
            <Typography sx={{fontSize: 14 , margin: 1, fontWeight: 'bold'}}>
            <LocalParkingIcon color='primary' sx={{marginRight: 1.5}}/> Estacionamiento
            </Typography>
            <Typography sx={{fontSize: 14 , margin: 1, fontWeight: 'bold'}}>
            <FreeBreakfastIcon color='primary' sx={{marginRight: 1.5}}/> Desayuno
            </Typography>
            <Typography sx={{fontSize: 14 , margin: 1, fontWeight: 'bold'}}>
            <TvIcon color='primary' sx={{marginRight: 1.5}}/> TV
            </Typography>
            <Typography sx={{fontSize: 14 , margin: 1, fontWeight: 'bold'}}>
            <FitnessCenterIcon color='primary' sx={{marginRight: 1.5}}/> Gym
            </Typography>
            </Box>
    );
}
