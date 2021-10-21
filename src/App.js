import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';

import Home from './pages/home';
import Room from './pages/room';
import SingleRoom from './pages/singleroom';
import Error from './pages/error';
import Navbar from './components/navbar';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/rooms">
          <Room />
        </Route>
        <Route path="/rooms/:slug" children={<SingleRoom />} />
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </>
  );
}

export default App;
