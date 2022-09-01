import axios from 'axios';

const rapidApiKey = "2b56e0d118msh360fd25058ad318p12342cjsn859bd34c20dd";

export const getPlacesData = async (type, sw, ne) => {
    try {
        const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
            params: {
                bl_latitude: sw.lat,
                bl_longitude: sw.lng,
                tr_longitude: ne.lng,
                tr_latitude: ne.lat,
            },
            headers: {
                'x-rapidapi-key': rapidApiKey,
                'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
            },
        });

        return data;
    } catch (error) {
        console.log(error);
    }
};

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
