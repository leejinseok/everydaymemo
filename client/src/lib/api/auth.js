import axios from 'axios';
const config = { proxy: { host: 'http://localhost', port: 4000 } };
export const checkEmailExist = (email) => axios.get('/api/v1.0/auth/exists/email' + email, config);