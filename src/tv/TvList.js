import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../card/Card";
import Pagination from "../moviesList/Pagination";
import { useEffect, useState } from "react";
import { setType } from "../Redux/Actions/type_category_Action";
import Navbar from "../navbar/Navbar";
import Spinner from "../Spinner/Spinner";
import TvCategotyButtons from "../categoryButtons/TvCategotyButtons";
import { getData } from "../Redux/Actions/moviesAction";
import { LanguageContext } from "../contexts/languageContext";

function TvList() {
  const [searchQuery, setSearchQuery] = useState("");

  const [page, setPage] = useState(1);
  const [isloading, setIsloading] = useState(true);
  const { type, category } = useSelector((state) => ({
    type: state.setReducer.type,
    category: state.setReducer.category,
  }));

  const tvList = useSelector((state) => state.moviesReducer);
  console.log(tvList);
  const dispatch = useDispatch();
  const { language } = useContext(LanguageContext);

  useEffect(() => {
    dispatch(setType("tv"));
    setIsloading(true);
    dispatch(getData(page, searchQuery, type, category, language)).then(() =>
      setIsloading(false)
    );
  }, [type, category, searchQuery, page, dispatch, language]);

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
    <div className="dark:bg-gray-800 ">
      <Navbar onSearch={handleSearch} />
      <div className="tv-container flex items-center justify-center  flex-col pt-20 overflow-hidden dark:bg-gray-800">
        {isloading ? (
          <Spinner />
        ) : (
          <>
            <TvCategotyButtons />
            <div className="flex items-center justify-center flex-wrap   pt-5 overflow-hidden dark:bg-gray-800">
              {tvList.map((tvShow) => (
                <Card key={tvShow.id} movie={tvShow} />
              ))}
            </div>
          </>
        )}
        {!isloading && (
          <Pagination page={page} next={handleNextPage} prev={handlePrevPage} />
        )}
      </div>
    </div>
  );
}

export default TvList;
