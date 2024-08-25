import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Rating from "./Rating";
import "./Card.css";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../Redux/Actions/favoriteAction";
import Icon from "../Icon/Icon";

function Card({ movie }) {
  const navigate = useNavigate();
  const WatchListMovies = useSelector((state) => state.favReducer);
  const dispatch = useDispatch();
  const [added, setAdded] = useState(false);

  const handleAddFavorite = () => {
    dispatch(addFavorite(movie));
    setAdded(true);
  };

  const handleRemoveFavorite = () => {
    dispatch(removeFavorite(movie.id));
    setAdded(false);
  };

  function handleReadMore() {
    navigate(`/movie/${movie.id}`);
  }

  useEffect(() => {
    const isFavorite = WatchListMovies.some(
      (favMovie) => favMovie.id === movie.id
    );
    setAdded(isFavorite);
  }, [WatchListMovies, movie.id]);
  return (
    <div className="flex items-center  justify-center overflow-hidden ">
      <div
        className={`card ${
          added ? "bg-yellow-300 dark:bg-yellow-400" : "bg-white"
        } e border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700  max-w-96 m-5  hover:scale-105 duration-100 overflow-hidden`}>
        <Link className="block overflow-hidden">
          <div className="img-container relative group  ">
            <img
              className="card-img rounded-t-lg  hover:scale-125 duration-1000 hover:overflow-hidden group-hover:brightness-50 group-hover:blur-sm  "
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt=""
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {!added && (
                <svg
                  onClick={handleAddFavorite}
                  className="w-28 h-28 text-yellow-300 dark:text-yellow-300"
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
                    d="M14 17h6m-3 3v-6M4.857 4h4.286c.473 0 .857.384.857.857v4.286a.857.857 0 0 1-.857.857H4.857A.857.857 0 0 1 4 9.143V4.857C4 4.384 4.384 4 4.857 4Zm10 0h4.286c.473 0 .857.384.857.857v4.286a.857.857 0 0 1-.857.857h-4.286A.857.857 0 0 1 14 9.143V4.857c0-.473.384-.857.857-.857Zm-10 10h4.286c.473 0 .857.384.857.857v4.286a.857.857 0 0 1-.857.857H4.857A.857.857 0 0 1 4 19.143v-4.286c0-.473.384-.857.857-.857Z"
                  />
                </svg>
              )}

              {added && <Icon />}
            </div>
          </div>
        </Link>
        <div className="p-5">
          <Link to="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {movie.title?.slice(0, 27) || movie.name?.slice(0, 15)} ..
            </h5>
          </Link>
          <div className="h-20">
            <p
              className={`mb-3 font-normal text-gray-700   ${
                added && "dark:text-white"
              } dark:text-gray-400 `}>
              {movie.overview.slice(0, 80)} ...
            </p>
          </div>
          <div className="flex items-center justify-between ">
            <div className="flex flex-col">
              <Rating rating={movie.vote_average} added={added} />

              <p className="dark:text-gray-300">
                {(movie.vote_average / 2).toFixed(2)}{" "}
              </p>
              <strong className="underline dark:text-gray-300 ">
                {movie.vote_count} reviews
              </strong>
            </div>

            <button
              onClick={handleReadMore}
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Read more
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10">
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </button>
            {added && (
              <button
                onClick={handleRemoveFavorite}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                Delete
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
