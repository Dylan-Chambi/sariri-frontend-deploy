import axios from "axios";

const URL = 'https://hotels4.p.rapidapi.com/locations/v2/search'

const options = {
    method: 'GET',
    params: {query: 'new york', locale: 'en_US', currency: 'USD'},
    headers: {
        'X-RapidAPI-Key': '6d271ef56emshb9728048b81cd04p1fc06bjsna11ba41842dc',
        'X-RapidAPI-Host': 'hotels4.p.rapidapi.com'
    }
};

export const getPlacesData = async () => {
    try {
        const { data: {data}} = await axios.get(URL, options)
        return data
    } catch (e) {
        console.log(e)
    }
}