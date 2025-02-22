import {ScrollView} from 'react-native';
import React from 'react';
import MovieList from '../components/MovieList';

export default function Home() {
  return (
    <ScrollView>
      <MovieList title="Popular Movies" category="popular" />
      <MovieList title="Upcoming Movies" category="upcoming" />
    </ScrollView>
  );
}
