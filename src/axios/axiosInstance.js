import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://demo-api.syaifur.io',
  headers: {
    'Content-Type': 'application/json', // Menambahkan default Content-Type
  },
  timeout: 10000, 
});

// Interceptor untuk request
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      
      console.error('Unauthorized! Redirecting to login.');
      window.location.href = '/login';
    } else if (error.response && error.response.status === 500) {
      console.error('Server error! Please try again later.');
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
