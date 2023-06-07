import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Search from './Components/Search';
import Saareres from './Components/Saareres';
// import Allrestaurants from './Components/Allrestaurants';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import Rester from './Components/Rester';
import NewCard from './Components/NewCard';
const App = () => {

  return (
    <>
      <Navbar />
      <Header />
      <Search />
      {/* <Allrestaurants /> */}
      <Saareres/>
      <Routes>
        <Route path='/Rester' element={<Rester/>}></Route>
        <Route path='/NewCard' element={<NewCard/>}></Route>
      </Routes>
    </>
  );
};

export default App;
