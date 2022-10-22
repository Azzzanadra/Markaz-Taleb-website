import React from 'react'
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/pages/Home';
import SearchPage from './components/pages/SearchPage';
import Stationary from './components/pages/Stationary';
import NoteBooks from './components/pages/NoteBooks';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/search-page' exact element={<SearchPage />} />
        <Route path='/stationery' exact element={<Stationary />} />
        <Route path='/books' exact element={<NoteBooks />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
