import React from "react";
import Card from "../card/Card";
import Pagination from "./Pagination";
import Spinner from "../Spinner/Spinner";

import MoviesCategoryButton from "../categoryButtons/MoviesCategoryButtons";

function MoviesList({ movies, page, nextPage, prevPage, isLoading }) {
  return (
    <div className="movies-container flex items-center justify-center flex-wrap flex-col  pt-20 overflow-hidden">
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <MoviesCategoryButton />
          <div className="flex items-center justify-center flex-wrap   pt-5 overflow-hidden dark:bg-gray-800">
            {movies.map((movie) => (
              <Card key={movie.id} movie={movie} />
            ))}
          </div>
        </>
      )}
      {!isLoading && <Pagination page={page} next={nextPage} prev={prevPage} />}
    </div>
  );
}

export default MoviesList;
