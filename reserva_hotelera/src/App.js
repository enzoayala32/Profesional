import React from 'react';
import { Counter } from './features/counter/Counter';
import Header from './components/Header';
import Home from './components/Home';
import SearchPage from './components/SearchPage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/search' element={<SearchPage />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
