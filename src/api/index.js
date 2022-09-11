import axios from 'axios';


export const getPlacesData = async (sw, ne, maxPlaces, user_id) => {
    return await axios.post(process.env.REACT_APP_BACK_ENDPOINT + '/hotel-list',
        {
            bl_latitude: sw.lat,
            bl_longitude: sw.lng,
            tr_longitude: ne.lng,
            tr_latitude: ne.lat,
            max_places: maxPlaces,
            user_id
        });
};

export const getFavoritePlacesData = async (user_id) => {
    return await axios.get(process.env.REACT_APP_BACK_ENDPOINT + '/hotels-fav/user/' + user_id);
}

export const toogleFavorite = async (user_id, location_id) => {
    return await axios.post(process.env.REACT_APP_BACK_ENDPOINT + '/hotel-fav/user/' + user_id, { location_id });
}

export const api = axios.create({
    baseURL: process.env.REACT_APP_BACK_ENDPOINT,
    headers: {
        'Content-Type': 'application/json'
    }
});
