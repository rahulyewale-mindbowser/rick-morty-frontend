import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css';
import CardList from './containers/CardList';
import FavoriteList from './containers/FavoriteList';
import NavBar from './components/NavBar';
import Login from './components/Login';
import Register from './components/Register';
import Logout from './components/Logout';

function App() {
  return (
    <div className="App">
       <Router>
      <NavBar/>
      <Routes>
        <Route path= "/" element={<CardList/>}/>
        <Route path= "/favorite" element={<FavoriteList/>}/>
        <Route path= "/login" element={<Login/>}/>
        <Route path= "/register" element={<Register/>}/>
        <Route path= "/logout" element={<Logout/>}/>

      </Routes>
      </Router>

    </div>
  );
}

export default App;
