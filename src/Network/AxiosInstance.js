import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: `https://api.themoviedb.org/3/${""}/`,
  params: {
    api_key: "a69ffd22281bba23aca025b0204e0250",
  },
});
