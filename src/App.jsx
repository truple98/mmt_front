import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Diary from './pages/Diary';
import Journal from './pages/Journal';
import Momentum from './pages/Momentum';
import Layout from './components/Layout';
import './index.css'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound/>} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="diary" element={<Diary />} />
          <Route path="journal" element={<Journal />} />
          <Route path="momentum" element={<Momentum />} />          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
