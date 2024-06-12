import axios, { AxiosInstance } from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const api: AxiosInstance = axios.create({
  baseURL: "https://sgbc-media-f87afc10b986.herokuapp.com",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  async (config) => {
    try {
      const accessToken = await AsyncStorage.getItem("accessToken");
      console.log(accessToken);
      //   if (accessToken) {
      if (accessToken) {
        const newConfig = { ...config };
        newConfig.headers.Authorization = `Bearer ${accessToken}`;
        newConfig.headers.Authorization = `Bearer 9999`;
        return newConfig;
      }
      return config;
    } catch (error) {
      return config;
    }
  },
  (error) => Promise.reject(error)
);

// Response interceptor
api.interceptors.response.use(
  (response) => {
    // Any status code that lies within the range of 2xx causes this function to trigger
    return response;
  },
  (error) => {
    // Any status codes that falls outside the range of 2xx causes this function to trigger
    if (error.response.status === 401) {
      // Handle unauthorized errors (e.g., redirect to login)
      console.log("Unauthorized, logging out...");
      localStorage.removeItem("token");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default api;

// test@Testmail.com
// mayflower
// tesUser@test.com
// Password1@
