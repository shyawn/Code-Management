import {View, Text, Image, StyleSheet} from 'react-native';

export default function MovieDetails({route}) {
  const {movie} = route.params; // ✅ Get movie data

  return (
    <View style={styles.container}>
      <Image
        source={{uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`}}
        style={styles.image}
      />
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
});
