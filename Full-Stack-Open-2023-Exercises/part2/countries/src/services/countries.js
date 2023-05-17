import axios from 'axios';

const BASE_URL = 'https://restcountries.com/v3.1/all';
const api_key = import.meta.env.VITE_API_KEY;
const getAll = () => {
    const request = axios.get(BASE_URL);
    return request.then((res) => res.data);
};
const getWeather = (lat, lon) => {
    const request = axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}`);
    return request.then((res) => res.data);
}
export default {
    getAll,
    getWeather,
};
