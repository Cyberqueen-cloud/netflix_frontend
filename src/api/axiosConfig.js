import axios from 'axios';

export default axios.create({
    baseURL:'http://13.51.193.240:8080',
    headers: {
        'Content-Type': 'application/json',
    },
});
