import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Diary from './pages/Diary';
import Journal from './pages/Journal';
import Momentum from './pages/Momentum';
import Layout from './components/Layout';
import ProtectedRoute from './components/ProtectedRoute';
import './index.css'

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }>
            <Route index element={<Home />} />
            <Route path="diary" element={<Diary />} />
            <Route path="journal" element={<Journal />} />
            <Route path="momentum" element={<Momentum />} />          
          </Route>
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
