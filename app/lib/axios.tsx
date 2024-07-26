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

      if (accessToken) {
        const newConfig = { ...config };
        newConfig.headers.Authorization = `Bearer ${accessToken}`;
        // newConfig.headers.Authorization = `Bearer 9999`;
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
      // console.log("Unauthorized, logging out...");
      // localStorage.removeItem("token");
      // window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default api;

// test@Testmail.com
// mayflower
// tesUser@test.com
// Password1@

// const sermonSample = {
//   _id: "662ae11fcc33936acf3ecaae",
//   title: "Questions Leading To The Salvation of Man ",
//   program: "Evening Worrship Service ",
//   preacher: {
//     _id: "65f99a5023696d2eb6c18fdc",
//     first_name: "Osagie",
//     last_name: "Azeta",
//     email: "ekomudo@gmail.com",
//     phone_number: "07077336409",
//     role: "media",
//     createdAt: "2024-03-19T13:59:44.816Z",
//     updatedAt: "2024-03-19T13:59:44.816Z",
//     __v: 0,
//     can_preach: true,
//   },
//   sermonSeries: "Genesis 3 Series",
//   bookOfBible: {
//     name: "genesis ",
//     chapter: 3,
//     verse: 1,
//   },
//   description: "Biblical Theology",
//   datePreached: "2024-04-14T09:49:25.692Z",
//   audioUrl:
//     "https://sgbc-media-2024.nyc3.digitaloceanspaces.com/sermons/1714086171138_sermon.mp3",
//   thumbnailUrl:
//     "https://sgbc-media-2024.nyc3.digitaloceanspaces.com/thumbnails/1714086174327_thumbnails.jpg",
//   bannerUrl:
//     "https://sgbc-media-2024.nyc3.digitaloceanspaces.com/banners/1714086175506_banners.jpg",
//   createdAt: "2024-04-25T23:02:55.605Z",
//   updatedAt: "2024-04-25T23:02:55.605Z",
//   __v: 0,
// };
{
  /* <View style={tailwind('w-40 h-40 bg-gray-200 overflow-hidden rounded-lg')}>
<Image
  source={source}
  style={tailwind('w-full h-full')}
  resizeMode="cover"
/>
</View> */
}
// 1_(1)_I_once_despised_and_scorned_the_name
