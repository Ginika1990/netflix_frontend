import axios from 'axios';

export default axios.create({
    baseURL:'http://54.196.244.221clea:8080',
    headers: {
        'Content-Type': 'application/json',
    },
});
