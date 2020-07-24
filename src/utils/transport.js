import axios from 'axios';

let transport = axios.create({
    headers: {
        'content-Type': 'application/json',
    },
});
export default transport;
