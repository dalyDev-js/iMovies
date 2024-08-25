import React, { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../navbar/Navbar";
import Card from "../card/Card";
import { resetFavorite } from "../Redux/Actions/favoriteAction";
import { LanguageContext } from "../contexts/languageContext";

function WatchList() {
  const [modal, setModal] = useState(false);

  const WatchListMovies = useSelector((state) => state.favReducer);
  console.log(WatchListMovies);
  const dispatch = useDispatch();
  const { language } = useContext(LanguageContext);

  function handleDeleteAllList() {
    dispatch(resetFavorite());
    setModal(false);
  }

  function handleClick() {
    setModal(true);
    console.log("clicked");
  }

  function handleCloseModal() {
    setModal(false);
  }

  return (
    <div className="dark:bg-gray-800 ">
      <Navbar />

      <div className="watchlist-container flex flex-col items-center justify-center p-10 bg-white dark:bg-slate-800    ">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white mt-20 ">
          Welcome to{" "}
          <span className="text-blue-600 dark:text-blue-500">Watchlists</span>{" "}
          Page.
        </h1>
        <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
          Browse movies, add them to watchlist and share them with your friends.
        </p>
        <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400 mb-20">
          just click the{" "}
          <span className="inline-flex items-center justify-center">
            <svg
              className="w-10 h-5 text-yellow-300 dark:text-yellow-300 align-middle"
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
          </span>
          icon to add the movie
        </p>
        {WatchListMovies.length > 0 ? (
          <button
            onClick={handleClick}
            type="button"
            className="flex items-center justify-evenly px-1 w-32 text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-white dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">
            <svg
              className="w-6 h-6 text-current"
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
                d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1-1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"
              />
            </svg>
            Delete List
          </button>
        ) : (
          <h2 class="text-3xl font-bold text-gray-500 dark:text-gray-300">
            you don't have a watchlist, start browsing.{" "}
          </h2>
        )}

        {modal && (
          <div
            id="popup-modal"
            tabIndex="-1"
            className="fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-x-hidden overflow-y-auto bg-gray-800 bg-opacity-50">
            <div className="relative w-full max-w-md p-4 max-h-full">
              <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <button
                  type="button"
                  className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={handleCloseModal}>
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14">
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
                <div className="p-4 text-center md:p-5">
                  <svg
                    className="w-12 h-12 mx-auto mb-4 text-gray-400 dark:text-gray-200"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20">
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                  <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                    Are you sure you want to delete this list?
                  </h3>
                  <button
                    onClick={handleDeleteAllList}
                    type="button"
                    className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 dark:focus:ring-red-800">
                    Yes, I'm sure
                  </button>
                  <button
                    onClick={handleCloseModal}
                    type="button"
                    className="px-5 py-2.5 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg ms-3 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">
                    No, cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="flex items-center flex-wrap justify-center w-full bg-white dark:bg-slate-800   ">
          {WatchListMovies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default WatchList;
