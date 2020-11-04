import React, { useEffect, useRef, useState } from 'react';
import axios, { AxiosResponse, AxiosError } from 'axios';

import '../styles/MovieList.css';
import { API_URL, API_KEY } from '../constant';
import { encodeQueryData } from '../helper';
import { IMovieList, IMovies } from '../interfaces';

const MovieList = (props: IMovieList) => {
  const movieWrapperRef = useRef<HTMLDivElement>(null);
  const [isFetching, setIsFetching] = useState<boolean>(false);

  const {
    movieList,
    filters: { page, keyword },
    setMovieList,
    setFilters
  } = props;

  useEffect(() => {
    if (!isFetching) {
      fetchMovieList();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.filters]);

  const fetchMovieList = (): void => {
    const queryData = {
      apikey: API_KEY,
      s: keyword,
      page: page
    };
    const queryString: string = encodeQueryData(queryData);
    const fetchUrl: string = API_URL + queryString;

    setIsFetching(true);

    axios.get(fetchUrl)
      .then((res: AxiosResponse) => {
        setMovieList(res.data.Search);
        setIsFetching(false);
      })
      .catch((error: AxiosError) => {
        console.log(error);
        setIsFetching(false);
      });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFetching]);

  const handleScroll = () => {
    const lastItemOfList = movieWrapperRef.current?.lastElementChild;

    if (lastItemOfList) {
      const { y: positionYAxis }: DOMRect = lastItemOfList?.getBoundingClientRect();

      if (!isFetching && positionYAxis < window.innerHeight) {
        setFilters('page', page + 1);
      }
    }
  };

  return (
    <div className="movie-list__wrapper" ref={movieWrapperRef}>
      {movieList.map((movie: IMovies, index: number) => (
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
