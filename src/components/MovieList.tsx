import {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import axios from 'axios';
import MovieCard from './MovieCard';

export default function MovieList({title, category}) {
  const [apiData, setApiData] = useState([]);
  const API_KEY = '38643af836173e58a6e567bb33b8401b';

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`,
        );
        setApiData(res.data.results);
      } catch (err) {
        console.error('Error fetching data:', err);
      }
    };

    getData();
  }, [apiData]);

  return (
    <View>
      <Text>Popular Movies</Text>
      {apiData.length > 0 ? (
        apiData.map((card, idx) => <MovieCard movie={card} key={idx} />)
      ) : (
        <Text>Loading...</Text> // Add loading text when fetching data
      )}
    </View>
  );
}
