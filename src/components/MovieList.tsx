import React, { useEffect } from 'react';
import axios, { AxiosResponse, AxiosError } from 'axios';

import '../styles/MovieList.css';
import { API_URL, API_KEY } from '../constant';
import { encodeQueryData } from '../helper';
import { IMovieList, IMovies } from '../interfaces';

const MovieList = (props: IMovieList) => {

  useEffect(() => {
    const queryData = {
      apikey: API_KEY,
      s: 'Batman',
      page: 1
    };
    const queryString: string = encodeQueryData(queryData);
    const fetchUrl: string = API_URL + queryString;

    axios.get(fetchUrl)
      .then((res: AxiosResponse) => {
        props.setMovieList(res.data.Search);
      })
      .catch((error: AxiosError) => {
        // handle error
        console.log(error);
      });
  });

  return (
    <div className="movie-list__wrapper">
      {props.movieList.map((movie: IMovies) => (
        <div className="movie-card__wrapper" key={movie.imdbID}>
          {movie.Title}
        </div>
      ))}
    </div>
  );
}

export default MovieList;
