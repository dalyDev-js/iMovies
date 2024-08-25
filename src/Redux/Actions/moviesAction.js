import { axiosInstance } from "../../Network/AxiosInstance";

export const getData =
  (page = 1, searchQuery = "", type, category = "popular", language) =>
  async (dispatch) => {
    let URL = `/${type}/${category}?&page=${page}&language=${language}`;

    if (searchQuery) {
      URL = `/${type}?query=${searchQuery}&&page=${page}`;
    } else {
      URL = `/${type}/${category}?&page=${page}&language=${language}`;
    }

    try {
      const response = await axiosInstance.get(URL);
      dispatch({
        type: "GET_MOVIES",
        payload: response.data.results,
      });
    } catch (err) {
      console.error(err.message);
    }
  };
