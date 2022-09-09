import axios from 'axios';

const rapidApiKey = "e9abf265a8mshae4ec8f735d80dfp1946d1jsn2d0facf31a14";

export const getPlacesData = async (sw, ne, maxPlaces, user_id) => {
    return await axios.post(`http://localhost:4000/api/hotel-list`,
        {
            bl_latitude: sw.lat,
            bl_longitude: sw.lng,
            tr_longitude: ne.lng,
            tr_latitude: ne.lat,
            max_places: maxPlaces,
            user_id
        });
};

export const toogleFavorite = async (user_id, location_id) => {
    return await axios.post('http://localhost:4000/api/hotel-fav/user/' + user_id, { location_id });
}


export const getHotelInfo = async (hotel_id) => {
    return await axios.request({
        method: 'GET',
        url: 'https://travel-advisor.p.rapidapi.com/hotels/get-details',
        params: {
            location_id: hotel_id
        },
        headers: {
            'X-RapidAPI-Key': rapidApiKey,
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
        }
    })
}

export const api = axios.create({
    baseURL: process.env.REACT_APP_BACK_ENDPOINT,
    headers: {
        'Content-Type': 'application/json'
    }
});
