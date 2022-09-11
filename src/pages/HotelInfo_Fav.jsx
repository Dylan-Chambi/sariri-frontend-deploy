import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import InfoHoteles from '../components/Info-Hotel/InfoHoteles';


export default function HotelInfo_Fav({ isFav }) {
    const location = useLocation();
    let hotelInfo;
    let checkIn;
    let checkOut;
    let numGuests;

    if (isFav) {
        hotelInfo = location.state.hotel_fav;
    } else {
        hotelInfo = location.state.hotel_info;
        checkIn = location.state.check_in;
        checkOut = location.state.check_out;
        numGuests = location.state.num_guests[0] + location.state.num_guests[1];
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            {isFav ? <InfoHoteles hotelInfo={hotelInfo} /> 
            : <InfoHoteles hotelInfo={hotelInfo} checkIn={checkIn} checkOut={checkOut} numGuests={numGuests} />}
        </>
    )
}