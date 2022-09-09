import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import Icon from '@mui/material/Icon';
export default function Services({ serviceList }) {
    console.log(serviceList)
    return (
        <Box sx={{
            marginLeft: '5rem',
            marginBottom: '5rem',
        }}>
            {serviceList.map((service) => {
                return (
                    <Typography key={1} sx={{ fontSize: 20, mt: 2, fontWeight: 'bold', display: 'flex', }}>
                        <Icon sx={{ marginRight: 1.5 }} color='primary'>{service.icon_name}</Icon> {service.service_name}
                    </Typography>
                )
            })}
        </Box>

    );
}