import {useMovieContext} from '../contexts/MovieContext';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function MovieCard({movie}) {
  const navigation = useNavigation();

  const {isFavorite, addToFavorites, removeFromFavorites} = useMovieContext();
  const favorite = isFavorite(movie.id);

  const handlePress = () => {
    navigation.navigate('MovieDetails', {movie});
  };

  //   Used to toggle favorite state of movie
  const handleFavoritePress = () => {
    favorite ? removeFromFavorites(movie.id) : addToFavorites(movie);
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.cardContainer}>
      <Image
        source={{
          uri: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
        }}
        style={styles.image}
      />
      <View>
        <TouchableOpacity
          onPress={handleFavoritePress}
          style={styles.favoriteButton}>
          <Text style={{fontSize: 24, color: favorite ? 'red' : 'white'}}>
            {favorite ? '❤️' : '🤍'}
          </Text>
        </TouchableOpacity>
        <Text style={styles.cardText}>{movie.original_title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: 'black',
    marginVertical: 8,
    padding: 10,
    borderRadius: 8,
  },
  cardText: {
    color: 'white',
    marginTop: 5,
    fontSize: 16,
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
  favoriteButton: {
    alignSelf: 'center',
    marginTop: 5,
  },
});
