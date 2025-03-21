import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { useRef } from "react";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();  
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
     
    return json.results;
  };

  const handleGptSearchClick = async () => {
    const gptQuery =
      "Act as a Movie Recommandation system and suggest some movies for the query :" +
      searchText.current.value +
      ".only give 5 movies as comma separated";

    // const gptResults = await openai.chat.completions.create({
    //     messages: [{role: 'user',content: gptQuery}],
    //     model: 'gpt-3.5-turbo'
    // });

    const gptResults =
      "Sankranthiki Vasthunam , Daaku Maharaaj , Baahubali 2: The Conclusion, Lucky Baskhar , Bujjigadu";
    const gptMovies = gptResults.split(",");

    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    const tmdbResults = await Promise.all(promiseArray);
    dispatch(addGptMovieResult({movieNames : gptMovies , movieResults:tmdbResults}));
  };

  return (
    <div className="pt-[45%] md:pt-[10%] flex justify-center">
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[langKey].gptSearchPlaceholder}
          ref={searchText}
        />
        <button
          className="py-1 px-4 m-5 col-span-3 bg-red-500 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
