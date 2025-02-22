import {useEffect, useRef, useState} from 'react';
import {getPopularMovies} from '../services/api';
import {Text, View} from 'react-native';
import axios from 'axios';
// import {API_KEY} from ''

// import MovieCard from "./MovieCard";

export default function MovieList({title, category}) {
  const [apiData, setApiData] = useState([]);
  //   const cardsRef = useRef();

  //   const handleWheel = (e) => {
  //     e.preventDefault();
  //     cardsRef.current.scrollLeft += event.deltaY;
  //   };
  const API_KEY = '38643af836173e58a6e567bb33b8401b';

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`,
        );
        setApiData(res.data);
      } catch (err) {
        console.error('Error fetching data:', err);
      }
    };
    getData();

    console.log(apiData);
  }, []);

  //   useEffect(() => {
  //     // getPopularMovies();
  //     // console.log(ls);
  //     axios
  //       //   .get(
  //       //     `https://api.themoviedb.org/3/movie/${
  //       //       category ? category : 'upcoming'
  //       //     }`,
  //       //   )
  //       .get('https://api.themoviedb.org/3/movie/upcoming')
  //       .then(res => {
  //         console.log(res.data);
  //       })
  //       .catch(err => {
  //         console.log(err);
  //       });
  //     //   fetch(
  //     //     `https://api.themoviedb.org/3/movie/${category ? category : 'upcoming'}`,
  //     //   )
  //     //     .then(res => res.json())
  //     //     //   .then((res) => setApiData(res.results))
  //     //     .then(res => console.log(res.results))
  //     //     .catch(err => console.error('Error', err));

  //     // cardsRef.current.addEventListener("wheel", handleWheel);
  //   }, []);
  return (
    <View>
      <Text>Popular Moviesss</Text>
      {/* <Text>{title ? title : 'Popular Movies'}</Text> */}
      {/* <div className="card-list" ref={cardsRef}>
        {apiData.map((card, idx) => {
          return <MovieCard className="card" movie={card} key={idx} />;
        })}
      </div> */}
    </View>
  );
}
