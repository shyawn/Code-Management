import {createContext, useContext} from 'react';
import MMKVStorage, {
  MMKVLoader,
  useMMKVStorage,
} from 'react-native-mmkv-storage';

// Correctly initialize MMKV
const MMKV = new MMKVLoader().initialize();

const MovieContext = createContext();
export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({children}) => {
  // MMKV storage for favorites
  const [favorites, setFavorites] = useMMKVStorage('favorites', MMKV, []);

  // Function to add a movie to favorites
  const addToFavorites = movie => {
    if (!favorites.some(fav => fav.id === movie.id)) {
      setFavorites([...favorites, movie]);
    }
  };

  // Function to remove a movie from favorites
  const removeFromFavorites = movieId => {
    setFavorites(favorites.filter(movie => movie.id !== movieId));
  };

  // Function to check if a movie is in favorites
  const isFavorite = movieId => favorites.some(movie => movie.id === movieId);

  return (
    <MovieContext.Provider
      value={{favorites, addToFavorites, removeFromFavorites, isFavorite}}>
      {children}
    </MovieContext.Provider>
  );
};

// import {createContext, useContext} from 'react';
// import {MMKVLoader, useMMKVStorage} from 'react-native-mmkv-storage';

// // Initialize MMKV storage
// const MMKV = new MMKVLoader().initialize();

// // Create MovieContext
// const MovieContext = createContext();
// export const useMovieContext = () => useContext(MovieContext);

// export const MovieProvider = ({children}) => {
//   // Use MMKV storage to persist favorites
//   const [favorites, setFavorites] = useMMKVStorage('favorites', MMKV, []);

//   // Function to add a movie to favorites
//   const addToFavorites = movie => {
//     if (!favorites.some(fav => fav.id === movie.id)) {
//       setFavorites([...favorites, movie]); // Save to MMKV
//     }
//   };

//   // Function to remove a movie from favorites
//   const removeFromFavorites = movieId => {
//     setFavorites(favorites.filter(movie => movie.id !== movieId)); // Update MMKV
//   };

//   // Check if a movie is in favorites
//   const isFavorite = movieId => favorites.some(movie => movie.id === movieId);

//   return (
//     <MovieContext.Provider
//       value={{favorites, addToFavorites, removeFromFavorites, isFavorite}}>
//       {children}
//     </MovieContext.Provider>
//   );
// };

// import {createContext, useContext} from 'react';
// import {MMKVLoader, useMMKVStorage} from 'react-native-mmkv-storage';

// // Initialize MMKV Storage
// const MMKV = new MMKVLoader().initialize();

// // Create Context
// const MovieContext = createContext();
// export const useMovieContext = () => useContext(MovieContext);

// export const MovieProvider = ({children}) => {
//   // MMKV storage for favorites
//   const [favorites, setFavorites] = useMMKVStorage('favorites', MMKV, []);

//   // Add a movie to favorites
//   const addToFavorites = movie => {
//     if (!favorites.some(fav => fav.id === movie.id)) {
//       setFavorites([...favorites, movie]);
//     }
//   };

//   // Remove a movie from favorites
//   const removeFromFavorites = movieId => {
//     setFavorites(favorites.filter(movie => movie.id !== movieId));
//   };

//   // Check if a movie is in favorites
//   const isFavorite = movieId => {
//     return favorites.some(movie => movie.id === movieId);
//   };

//   return (
//     <MovieContext.Provider
//       value={{favorites, addToFavorites, removeFromFavorites, isFavorite}}>
//       {children}
//     </MovieContext.Provider>
//   );
// };

// import {createContext, useState, useContext, useEffect} from 'react';
// import {MMKVLoader, useMMKVStorage} from 'react-native-mmkv-storage';
// // import {AsyncStorage} from 'react-native';

// const MovieContext = createContext();
// const MMKV = new MMKVLoader().initialize();

// export const useMovieContext = () => useContext(MovieContext);

// export const MovieProvider = ({children}) => {
//   //   const [favorites, setFavorites] = useState([]);
//   //   useEffect(() => {
//   //     const storedFavs = localStorage.getItem('favorites');
//   //     if (storedFavs) setFavorites(JSON.parse(storedFavs));
//   //   }, []);

//   //   useEffect(() => {
//   //     localStorage.setItem('favorites', JSON.stringify(favorites));
//   //   }, [favorites]);

//   //   const addToFavorites = movie => {
//   //     setFavorites(prev => [...prev, movie]);
//   //   };

//   //   const removeFavorites = movieId => {
//   //     setFavorites(prev => prev.filter(movie => movie.id !== movieId));
//   //   };

//   //   const isFavorite = movieId => {
//   //     return favorites.some(movie => movie.id === movieId);
//   //   };
//   const value = {
//     // favorites,
//     // addToFavorites,
//     // removeFavorites,
//     // isFavorite,
//   };
//   return (
//     <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
//   );
// };
