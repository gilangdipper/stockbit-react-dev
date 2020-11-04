import React, { useEffect, useRef } from 'react';

import '../styles/MovieList.css';
import { IMovieList, IMoviesSearchList } from '../interfaces';

const MovieList = (props: IMovieList) => {
  const movieWrapperRef = useRef<HTMLDivElement>(null);
  const {
    movies: { Search: movieList, totalResults },
    filters: { page },
    searchMovies,
    setFilters,
    isFetching,
    errorMessages,
  } = props;

  useEffect(() => {
    if (!isFetching) {
      searchMovies();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFetching]);

  const handleScroll = () => {
    const lastItemOfList = movieWrapperRef.current?.lastElementChild;

    if (lastItemOfList) {
      const { y: positionYAxis }: DOMRect = lastItemOfList?.getBoundingClientRect();

      if (
        !isFetching &&
        positionYAxis < window.innerHeight &&
        Number(totalResults) > movieList.length
      ) {
        setFilters('page', page + 1);
      }
    }
  };

  return (
    <div className="movie-list__wrapper" ref={movieWrapperRef}>
      {errorMessages
        ? <div className="movie-list__error">
            {errorMessages}
          </div>
        : movieList.map((movie: IMoviesSearchList, index: number) => (
            <div className="movie-card__wrapper" key={movie.imdbID + index}>
              <div className="movie-card__poster">
                <img src={movie.Poster} alt={movie.Title}/>
              </div>
              <div className="movie-card__description">
                  <div className="movie-card__description-row">
                    <div className="movie-card__year">{movie.Year}</div>
                    <div className="movie-card__type">{movie.Type}</div>
                  </div>
                  
                  <div className="movie-card__title">{movie.Title}</div>
              </div>
            </div>
          ))}
    </div>
  );
}

export default MovieList;
