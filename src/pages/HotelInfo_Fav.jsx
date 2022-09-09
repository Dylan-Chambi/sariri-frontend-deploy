import { useLocation } from 'react-router-dom';
import InfoHoteles from '../components/Info-Hotel/InfoHoteles';


export default function HotelInfo_Fav({ isFav }) {
    const location = useLocation();
    let hotelInfo;
    let checkIn;
    let checkOut;


    console.log(location.state);

    if (isFav) {
        hotelInfo = location.state.hotel_fav;
    } else {
        hotelInfo = location.state.hotel_info;
        checkIn = location.state.check_in;
        checkOut = location.state.check_out;
    }

    return (
        <div>
            <InfoHoteles hotelInfo={hotelInfo} checkIn={checkIn} checkOut={checkOut}/>
        </div>
    )
}