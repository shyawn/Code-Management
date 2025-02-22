import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import MovieList from '../components/MovieList';
import {getPopularMovies} from '../services/api';

export default function Home() {
  return (
    <View>
      <MovieList title="Popular Movies" category="popular" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
  },
});
