import axios from 'axios';
export const checkEmailExist = (email) => axios.get('/api/v1.0/auth/exists/email/' + email);
export const localRegister = ({email, password}) => axios.post('/api/v1.0/auth/register/local', { email, password });
export const localLogin = ({email, password}) => axios.post('/api/v1.0/auth/login/local', {email, password});
export const checkLoginStatus = () => axios.get('/api/v1.0/auth/check');
export const logout = () => axios.post('/api/v1.0/auth/logout');