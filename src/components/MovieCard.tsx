import {Link} from '@react-navigation/native';

export default function MovieCard({movie}) {
  const {isFavorite, addToFavorites, removeFavorites} = useMovieContext();
  const favorite = isFavorite(movie.id);
  function onFavoriteClick(e) {
    e.preventDefault();
    if (favorite) {
      removeFavorites(movie.id);
    } else {
      addToFavorites(movie);
    }
  }

  return (
    <Link to={`/player/${movie.id}`} className="movie-card" key={movie.id}>
      <div className="movie-poster">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
          alt=""
        />
        <div className="movie-overlay">
          <button
            className={`favorite-btn ${favorite ? 'active' : ''}`}
            onClick={onFavoriteClick}>
            ♥
          </button>
        </div>
      </div>
      <p>{movie.original_title}</p>
    </Link>
  );
}
