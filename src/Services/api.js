//import axios to handle GET requests
import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3/movie";

//fetchMovieList will fetch the GET request for the movie list
export const fetchMovieList = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/popular?api_key=${API_KEY}`);
    console.log(response.data.results);
    return response.data.results;
  } catch (error) {
    console.log("Error fetching movie list...");
    return [];
  }
};

//fetchMovieDetails will fetch the GET request for the movie details
export const fetchMovieDetails = async (id) => {
  try {
    const responseDetails = await axios.get(
      `${BASE_URL}/${id}?api_key=${API_KEY}`
    );
    console.log(responseDetails.data);
    return responseDetails.data;
  } catch (error) {
    console.log("Error fetching movie details...");
    return null;
  }
};
