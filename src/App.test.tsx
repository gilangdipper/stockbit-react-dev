import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';

import App from './App';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';

import store from './redux/stateStore';
import { IMovieList } from './interfaces';

test('renders app', () => {
  render(<Provider store={store}><App /></Provider>);
  const linkElement = screen.getAllByTestId('app');
  expect(linkElement[0]).toBeInTheDocument();
});

test('renders SearchBar', () => {
  const mockProps = {
    filters: {
      keyword: 'Batman',
      page: 1
    },
    searchMovies: jest.fn(),
    setFilters: jest.fn()
  }
  const dom = render(<Provider store={store}><SearchBar { ...mockProps} /></Provider>);

  expect(dom.getAllByTestId('search-bar')[0]).toBeInTheDocument();

  expect(dom.getAllByTestId('search-bar')[0].getAttribute('value')).toBe('Batman');

  fireEvent.click(screen.getByTestId('search-bar-button'));
  expect(mockProps.searchMovies).toHaveBeenCalledTimes(1);

  fireEvent.change(screen.getByTestId('search-bar'), { target: { value: 'Superman' } })
  expect(mockProps.setFilters).toHaveBeenCalledTimes(1);
});

test('renders MovieList', () => {
  const mockProps = {
    movies: {
      Search: [
        {Title: 'test1', Year: '2020', imdbID: '1', Type: 'movie', Poster: 'http://url.com'}, 
        {Title: 'test2', Year: '2020', imdbID: '2', Type: 'movie', Poster: 'http://url.com'}
      ],
      totalResults: '2',
    },
    filters: {
      keyword: 'Batman',
      page: 1
    },
    isFetching: false,
    errorMessages: '',
    searchMovies: jest.fn(),
    setFilters: jest.fn(),
    setUrlImageModal: jest.fn()
    }
  const dom = (addProps?: IMovieList) =>
    render(<Provider store={store}><MovieList { ...mockProps} {...addProps} /></Provider>);

  expect(dom().getAllByTestId('movie-list')[0].childElementCount).toBe(2);
});