import React, { useState } from 'react';
import { connect } from 'react-redux';
import axios, { AxiosResponse, AxiosError } from 'axios';

import { API_URL, API_KEY } from '../constant';
import { encodeQueryData } from '../helper';

import '../styles/App.css';
import * as actions from '../redux/actions';
import { IInitialState, IAppProps, IMovies, IFilters } from '../interfaces';

import MovieList from '../components/MovieList';
import SearchBar from '../components/SearchBar';
import ImagePopup from '../components/ImagePopup';

const SearchPage = (props: IAppProps) => {
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [errorMessages, setErrorMessages] = useState<string>('');
  const [urlImageModal, setUrlImageModal] = useState<string>('');

  const {
    movies,
    filters,
    setFilters,
    setMovieList,
  } = props;
  const { keyword, page } = filters;

  const searchMovies = (newSearch = false) => {
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
        if (res.data.Response === "True") {
          let nextMovies: IMovies = {
            Search: [ ...movies.Search, ...res.data.Search ],
            totalResults: res.data.totalResults
          };

          if (newSearch) {
            nextMovies = {
              ...nextMovies,
              Search: res.data.Search,
            };
          }

          setErrorMessages('');
          setMovieList(nextMovies);
        } else {
          setErrorMessages(res.data.Error);
          setMovieList({
            Search: [],
            totalResults: '0',
          });
        }

        setIsFetching(false);
      })
      .catch((error: AxiosError) => {
        console.log(error);
        setIsFetching(false);
      });
  };

  return (
    <div className="app__wrapper">
      <SearchBar
        filters={filters}
        setFilters={setFilters}
        searchMovies={searchMovies}
      />
      <MovieList
        isFetching={isFetching}
        movies={movies}
        filters={filters}
        searchMovies={searchMovies}
        setFilters={setFilters}
        errorMessages={errorMessages}
        setUrlImageModal={setUrlImageModal}
      />
      <ImagePopup
        urlImage={urlImageModal}
        onClose={() => { setUrlImageModal(''); }}
      />
    </div>
  );
};

const mapStateToProps = (state: IInitialState): {
  movies: IMovies;
  filters: IFilters;
} => state;
const mapDispatchToProps: {
  setMovieList(movies: IMovies): void;
  setFilters(filterName: string, value: number | string): void;
} = {
  setMovieList: actions.setMovieList,
  setFilters: actions.setFilters,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
