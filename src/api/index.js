import axios from 'axios';

const rapidApiKey = "e64953e729msh74806b1e11f7700p1687d8jsnf0051a016244";

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
