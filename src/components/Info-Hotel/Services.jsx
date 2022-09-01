import WifiIcon from '@mui/icons-material/Wifi';
import PoolIcon from '@mui/icons-material/Pool';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import FreeBreakfastIcon from '@mui/icons-material/FreeBreakfast';
import TvIcon from '@mui/icons-material/Tv';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import BedroomParentIcon from '@mui/icons-material/BedroomParent';
import FlagCircleIcon from '@mui/icons-material/FlagCircle';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
export default function Services({ amenitiesList }) {
    console.log(amenitiesList)
    return (
        <Box sx={{
            marginLeft: '16rem',
            marginBottom: '5rem',
        }}>
            {amenitiesList? getAvailableServices(amenitiesList) : <Typography>No hay servicios extra</Typography>}
        </Box>

    );
}

const getAvailableServices = (servicesList) => {
    const availableServicesList = []
    if(servicesList.some(item => item.name.toLowerCase().includes('wifi'))){
        availableServicesList.push(
            <Typography key={1} sx={{ fontSize: 14, margin: 1, fontWeight: 'bold' }}>
                <WifiIcon color='primary' sx={{ marginRight: 1.5 }} /> Wifi
            </Typography>
        )
    }

    if(servicesList.some(item => item.name.toLowerCase().includes('pool'))){
        availableServicesList.push(
            <Typography key={2} sx={{ fontSize: 14, margin: 1, fontWeight: 'bold' }}>
                <PoolIcon color='primary' sx={{ marginRight: 1.5 }} /> Piscina
            </Typography>
        )
    }

    if(servicesList.some(item => item.name.toLowerCase().includes('park'))){
        availableServicesList.push(
            <Typography key={3} sx={{ fontSize: 14, margin: 1, fontWeight: 'bold' }}>
                <LocalParkingIcon color='primary' sx={{ marginRight: 1.5 }} /> Estacionamiento
            </Typography>
        )
    }

    if(servicesList.some(item => item.name.toLowerCase().includes('breakfast'))){
        availableServicesList.push(
            <Typography key={4} sx={{ fontSize: 14, margin: 1, fontWeight: 'bold' }}>
                <FreeBreakfastIcon color='primary' sx={{ marginRight: 1.5 }} /> Desayuno
            </Typography>
        )
    }

    if(servicesList.some(item => item.name.toLowerCase().includes('tv'))){
        availableServicesList.push(
            <Typography key={5} sx={{ fontSize: 14, margin: 1, fontWeight: 'bold' }}>
                <TvIcon color='primary' sx={{ marginRight: 1.5 }} /> TV
            </Typography>
        )
    }

    if(servicesList.some(item => item.name.toLowerCase().includes('fitness'))){
        availableServicesList.push(
            <Typography key={6} sx={{ fontSize: 14, margin: 1, fontWeight: 'bold' }}>
                <FitnessCenterIcon color='primary' sx={{ marginRight: 1.5 }} /> Gym
            </Typography>
        )
    }
    return availableServicesList;
}