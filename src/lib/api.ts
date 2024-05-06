import axios, { AxiosInstance } from 'axios'

/**
 * Create Axios instance with custom config
 */
export const API: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

/**
 *  Request interceptor
 * */
// API.interceptors.request.use(
//   async axiosConfig => {
//     const token = await getItemFromLocalStorage(SESSION_KEY)
//     if (token && axiosConfig.headers) {
//       axiosConfig.headers.Authorization = `Bearer ${token}`
//     }
//     return axiosConfig
//   },
//   (error: AxiosError) => Promise.reject(error),
// )

/**
 * Response interceptor
 **/
// API.interceptors.response.use(
//   (response: AxiosResponse) => {
//     return response.data
//   },
//   async error => {
//     if (error?.response?.data?.status?.code === 401) {
//       removeItemFromLocalStorage(SESSION_KEY)
//     }
//     return Promise.reject({
//       message: 'Error occured',
//       ...error?.response?.data,
//     })
//   },
// )
