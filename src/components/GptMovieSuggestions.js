import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const { tmdbMovies, movieName } = useSelector((store) => store.gpt);
  if (!movieName) return null;

  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-90">
      <div>
        {movieName.map((movie, index) => (
          <MovieList key={movie} title={movie} movies={tmdbMovies[index]} />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestions;
