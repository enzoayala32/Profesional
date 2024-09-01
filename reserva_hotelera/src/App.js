import React from 'react';
import { Counter } from './features/counter/Counter';
import Header from './components/Header';
import Home from './components/Home';
import SearchPage from './components/searchPage';

function App() {
  return (
    <div >
      <Header/>
      <Home/>
      <SearchPage/>
    </div>
  );
}

export default App;
