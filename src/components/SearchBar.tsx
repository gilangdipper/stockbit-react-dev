import React, { ChangeEvent, KeyboardEvent } from 'react';

import '../styles/SearchBar.css';
import { ReactComponent as SearchIcon } from '../icon/search-thin1.svg';
import { ISearchBar } from '../interfaces';

const SearchBar = (props: ISearchBar) => {
  const { setFilters, searchMovies } = props;

  const inputChangeHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    const value: string = event.target.value;

    setFilters('keyword', value);
  };

  const keyPressHandler = (event: KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === 'Enter') {
      searchMovies(true);
    }
  };

  return (
    <div className="search-bar__wrapper" >
      <input
        type='text'
        value={props.filters.keyword}
        onChange={inputChangeHandler}
        onKeyPress={keyPressHandler}
        placeholder="type movie's keyword"
      />
      <button onClick={() => searchMovies(true)}><SearchIcon /></button>
    </div>
  );
}

export default SearchBar;
