import axios from 'axios';
const instance = axios.create({
    baseURL:'https://react-burger-by-punit.firebaseio.com/'
}); 
    

export default instance;
