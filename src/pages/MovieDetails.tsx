import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {useMovieContext} from '../contexts/MovieContext';

export default function MovieDetails({route}) {
  // Get movie object from route params
  const {movie} = route.params;

  const {addToFavorites, removeFromFavorites, isFavorite} = useMovieContext();

  const favorite = isFavorite(movie.id);

  const handleFavoriteToggle = () => {
    if (favorite) {
      removeFromFavorites(movie.id);
    } else {
      addToFavorites(movie);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={{uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`}}
        style={styles.image}
      />
      <TouchableOpacity
        onPress={handleFavoriteToggle}
        style={styles.favoriteButton}>
        <Text style={styles.favoriteText}>
          {favorite ? '❤️ Remove from Favorites' : '🤍 Add to Favorites'}
        </Text>
      </TouchableOpacity>
      <Text style={styles.title}>{movie.original_title}</Text>
      <Text style={styles.description}>{movie.overview}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#121212',
  },
  image: {
    width: '100%',
    height: 300,
    borderRadius: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    color: 'gray',
    marginTop: 10,
  },
  favoriteButton: {
    marginTop: 20,
    backgroundColor: '#ff3d47',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  favoriteText: {
    fontSize: 18,
    color: 'white',
  },
});
