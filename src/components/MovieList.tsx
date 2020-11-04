import React, { useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';

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
    setUrlImageModal
  } = props;
  const history = useHistory();

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
            <a
              onClick={(e) => {
                history.push(`/movie/${movie.imdbID}`);
                e.stopPropagation();
              }}
              key={movie.imdbID + index}
            >
              <div className="movie-card__wrapper">
                <div
                  className="movie-card__poster"
                  onClick={(e) => {
                    setUrlImageModal(movie.Poster);
                    e.stopPropagation();
                  }}
                >
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
            </a>
          ))}
    </div>
  );
}

export default MovieList;
