import {createContext, useContext} from 'react';
import {MMKVLoader, useMMKVStorage} from 'react-native-mmkv-storage';

const MMKV = new MMKVLoader().initialize();

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({children}) => {
  const [favorites, setFavorites] = useMMKVStorage('favorites', MMKV, []);

  const addToFavorites = movie => {
    if (!favorites.some(fav => fav.id === movie.id)) {
      setFavorites([...favorites, movie]);
    }
  };

  const removeFromFavorites = movieId => {
    setFavorites(favorites.filter(movie => movie.id !== movieId));
  };

  // Check if movie is in favorites store
  const isFavorite = movieId => favorites.some(movie => movie.id === movieId);

  return (
    <MovieContext.Provider
      value={{favorites, addToFavorites, removeFromFavorites, isFavorite}}>
      {children}
    </MovieContext.Provider>
  );
};
