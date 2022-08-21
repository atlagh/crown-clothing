import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/shoppage.component';
import Header from './components/header/header.component';
import SignIn from './pages/sign-in/sign-in.component';





function App() {
  return (
    <div>
        <Header />
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route path='/shop' element={<ShopPage />} />
          <Route path='/signin' element={<SignIn />} />
        </Routes>
    </div>
  );
}

export default App;
