import React, { useContext, useEffect, useState } from "react";
import MoviesList from "../moviesList/MoviesList";

import Navbar from "../navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { setType } from "../Redux/Actions/type_category_Action";
import { getData } from "../Redux/Actions/moviesAction";
import { LanguageContext } from "../contexts/languageContext";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  // const [moviesList, setMoviesList] = useState([]);
  const [page, setPage] = useState(1);
  const [isloading, setIsloading] = useState(true);
  const { type, category } = useSelector((state) => ({
    type: state.setReducer.type,
    category: state.setReducer.category,
  }));

  const { language } = useContext(LanguageContext);
  console.log(language);
  const dispatch = useDispatch();
  const moviesList = useSelector((state) => state.moviesReducer);
  console.log(moviesList);

  useEffect(() => {
    setIsloading(true);
    dispatch(setType("movie"));
    dispatch(getData(page, searchQuery, type, category, language)).then(() =>
      setIsloading(false)
    );
  }, [dispatch, page, searchQuery, type, category, language]);

  function handleNextPage() {
    setPage(page + 1);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  function handlePrevPage() {
    setPage(page - 1);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  function handleSearch(query) {
    setSearchQuery(query);
  }

  return (
    <div className="dark:bg-slate-800">
      <Navbar onSearch={handleSearch} />
      <MoviesList
        movies={moviesList}
        page={page}
        nextPage={handleNextPage}
        prevPage={handlePrevPage}
        isLoading={isloading}
      />
    </div>
  );
}

export default Home;
