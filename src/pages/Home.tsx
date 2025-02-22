import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import MovieList from '../components/MovieList';
import {getPopularMovies} from '../services/api';

export default function Home() {
  return (
    <ScrollView>
      <MovieList title="Popular Movies" category="popular" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
  },
});
