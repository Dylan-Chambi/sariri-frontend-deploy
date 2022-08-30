import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    paper: {
        padding: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'center', width: 'auto', color: '#24528A', backgroundColor: '#98C0EF', borderRadius: '10px',
    },
    mapContainer: {
        height: '85vh', width: '100%',borderRadius: '3px',
    },
    markerContainer: {
        position: 'absolute', transform: 'translate(-50%, -50%)', zIndex: 1, '&:hover': { zIndex: 2 },
    },
    pointer: {
        cursor: 'pointer',
    },
}));