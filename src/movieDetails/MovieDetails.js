import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./MovieDetails.css";
import Rating from "../card/Rating";
import Navbar from "../navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite } from "../Redux/Actions/favoriteAction";
import Spinner from "../Spinner/Spinner";
import { axiosInstance } from "../Network/AxiosInstance";
import { LanguageContext } from "../contexts/languageContext";

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [genre, setGenre] = useState([]);
  const [added, setAdded] = useState(false);
  const navigate = useNavigate();
  const favoriteMovies = useSelector((state) => state.favReducer);
  const dispatch = useDispatch();
  const type = useSelector((state) => state.setReducer.type);

  const { language } = useContext(LanguageContext);
  console.log(type);
  useEffect(() => {
    const fetchMovieDetails = async () => {
      setIsLoading(true);
      const response = await axiosInstance.get(
        `/${type}/${id}?language=${language}`
      );

      setMovie(response.data);
      setGenre(response.data.genres);

      setIsLoading(false);
    };

    fetchMovieDetails();
  }, [id, type, language]);

  useEffect(() => {
    const isFavorite = favoriteMovies.some(
      (favMovie) => favMovie.id === movie?.id
    );
    setAdded(isFavorite);
  }, [favoriteMovies, movie?.id]);

  const genresNames = genre.map((genre) => genre.name);
  console.log(genresNames);

  function handleAddFavorite() {
    dispatch(addFavorite(movie));
    setAdded(true);
  }
  function handleBack() {
    navigate(-1);
  }

  return (
    <>
      <Navbar />
      {isLoading ? (
        <Spinner />
      ) : (
        <div
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            minHeight: "100vh",
          }}
          className="w-full   text-white p-5 flex justify-evenly items-center">
          <button
            onClick={handleBack}
            type="button"
            className="text-gray-800 dark:text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m15 19-7-7 7-7"
              />
            </svg>
            Go Back
          </button>
          <div className="details-banner hover:bg-white hover:bg-opacity-60 h-full w-1/3 max-w-sm bg-white rounded-t-lg  rounded-b-lg flex items-center flex-col p-3  dark:bg-gray-900 dark:bg-opacity-60 dark:rounded-lg dark:shadow-lg dark:border dark:border-gray-900 dark:border-opacity-30 dark:backdrop-blur-sm dark:shadow-lg dark:border dark:border-blue-900 dark:border-opacity-30 dark:backdrop-blur-sm dark:hover:bg-opacity-80">
            <img
              className="rounded-t-lg rounded-b-lg mb-5 w-3/4 p-0"
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie?.title}
            />
            <Rating rating={movie.vote_average} />
            <p className="mb-3 text-gray-900 font-bold dark:text-gray-200 mt-3">
              Rating: {(movie.vote_average / 2).toFixed(2)}
            </p>
            <p className="mb-3 text-gray-900 font-bold dark:text-gray-200">
              Total Reviews: {movie.vote_count}
            </p>
            <p className="mb-3 text-gray-900 font-bold dark:text-gray-200">
              Release Date: {movie.release_date}
            </p>
            <div className="mb-3">
              {genresNames.map((genre) => (
                <span className="bg-gray-100 text-gray-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                  {genre}
                </span>
              ))}
            </div>
            <button
              disabled={added}
              onClick={handleAddFavorite}
              type="button"
              className={`text-gray-900 bg-[#F7BE38] disabled:bg-slate-500 ${
                added ? "cursor-not-allowed" : "cursor-pointer"
              } hover:bg-[#F7BE38]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50 me-2 mb-2`}>
              {added ? (
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-white me-2 -ms-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    fill-rule="evenodd"
                    d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z"
                    clip-rule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6 me-2 -ms-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    fill-rule="evenodd"
                    d="M4.857 3A1.857 1.857 0 0 0 3 4.857v4.286C3 10.169 3.831 11 4.857 11h4.286A1.857 1.857 0 0 0 11 9.143V4.857A1.857 1.857 0 0 0 9.143 3H4.857Zm10 0A1.857 1.857 0 0 0 13 4.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 21 9.143V4.857A1.857 1.857 0 0 0 19.143 3h-4.286Zm-10 10A1.857 1.857 0 0 0 3 14.857v4.286C3 20.169 3.831 21 4.857 21h4.286A1.857 1.857 0 0 0 11 19.143v-4.286A1.857 1.857 0 0 0 9.143 13H4.857ZM18 14a1 1 0 1 0-2 0v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 1 0 2 0v-2h2a1 1 0 1 0 0-2h-2v-2Z"
                    clip-rule="evenodd"
                  />
                </svg>
              )}

              {added ? "Already in watchlist" : "Add to watchlist"}
            </button>
            {added && (
              <div
                className="flex items-center p-4 mb-4 text-sm text-green-800 border border-green-300 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400 dark:border-green-800"
                role="alert">
                <svg
                  className="flex-shrink-0 inline w-4 h-4 me-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                </svg>
                <span className="sr-only">Info</span>
                <div>
                  <span className="font-medium">Success!</span> movie added to
                  your watchlist
                </div>
              </div>
            )}
          </div>

          <div className="details-text hover:bg-white hover:bg-opacity-60  w-1/2 flex items-center justify-center p-5 flex-col dark:bg-gray-900 dark:bg-opacity-60 dark:rounded-lg dark:shadow-lg dark:border dark:border-blue-900 dark:border-opacity-30 dark:backdrop-blur-sm dark:hover:bg-opacity-80">
            <h1 className="mb-4 text-4xl text-center font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
              {movie?.title || movie?.name}
            </h1>

            <p className="mb-3 text-xl text-center font-semibold text-black dark:text-gray-200">
              {movie?.overview}
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default MovieDetails;
