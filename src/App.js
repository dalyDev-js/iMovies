import "./App.css";
import Footer from "./footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home/Home.js";
import MovieDetails from "./movieDetails/MovieDetails.js";
import WatchList from "./watchlist/WatchList.js";
import PageNotFound from "./PageNotFound/PageNotFound.js";
import TvList from "./tv/TvList.js";
import Spinner from "./Spinner/Spinner.js";
import LanguageButton from "./languageButton/LanguageButton.js";
import { LanguageProvider } from "./contexts/languageContext.js";

function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <Routes>
          <Route path={"/spinner"} Component={Spinner} />
          <Route path={"/"} Component={Home} />
          <Route path={"/tv"} Component={TvList} />
          <Route path={"/movie/:id"} Component={MovieDetails} />
          <Route path={"/watchlist"} Component={WatchList} />
          <Route path={"/lang"} Component={LanguageButton} />

          <Route path={"*"} Component={PageNotFound} />
        </Routes>
      </LanguageProvider>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
