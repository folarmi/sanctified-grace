import axios from "axios";

export const register = () =>
  axios
    .get("https://sgbc-media-f87afc10b986.herokuapp.com/auth/register")
    .then((res) => res.data);
