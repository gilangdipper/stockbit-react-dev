import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

import './styles/App.css';
import SearchPage from './page/SearchPage';
import DetailPage from './page/DetailPage';

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={SearchPage}></Route>
          <Route exact path='/movie/:id' component={DetailPage}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
