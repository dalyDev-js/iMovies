import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../Redux/Actions/type_category_Action";
function TvCategotyButtons() {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.setCategory);
  function handleClick(newCategory) {
    dispatch(setCategory(newCategory));
    console.log(category);
  }
  return (
    <div className="inline-flex rounded-md shadow-sm mt-20  " role="group">
      <button
        onClick={() => handleClick("airing_today")}
        type="button"
        className="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-s-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
        Airing Today
      </button>
      <button
        onClick={() => handleClick("top_rated")}
        type="button"
        className="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border-t border-r border-b border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
        Top Rated
      </button>
      <button
        onClick={() => handleClick("on_the_air")}
        type="button"
        className="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border-t border-b border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
        On The Air
      </button>
      <button
        onClick={() => handleClick("popular")}
        type="button"
        className="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-e-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
        Popular
      </button>
    </div>
  );
}

export default TvCategotyButtons;
