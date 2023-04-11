import axios from 'axios';


export const axiosCreate = () => {
    const auth = 'Bearer ' + localStorage.getItem('token');
    
    console.log(auth);
    return axios.create({
        baseURL: 'http://localhost:8000/',
        headers: {
            'Content-type': 'application/json',
            Authorization: auth ? auth: '',
        }
    });
}