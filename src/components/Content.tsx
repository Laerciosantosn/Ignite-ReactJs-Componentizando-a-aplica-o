import { useContext } from 'react';

import { MoviesContexts } from '../contexts/MoviesContexts';
import { MovieCard } from './MovieCard';
import Header from "./Header";


import '../styles/content.scss';

function Content() {
  const {movies, selectedGenre} = useContext(MoviesContexts);

console.log(selectedGenre.title)
  return (
    <div className="container">
      <Header title={selectedGenre.title}/>

      <main>
        <div className="movies-list">
          {movies.map(movie => (
          <MovieCard key={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
        ))}
        </div>
      </main>
    </div>
  )

}

export default Content;