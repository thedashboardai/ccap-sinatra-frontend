import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Profile from './pages/Profile';
import Portfolio from './pages/Portfolio';
import { useAuth } from './hooks/useAuth';

const PrivateRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

const AppRoutes = () => {
  return (
    <Routes>
      <Route 
        path="/profile" 
        element={
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        } 
      />
      <Route 
        path="/portfolio" 
        element={
          <PrivateRoute>
            <Portfolio />
          </PrivateRoute>
        } 
      />
      <Route path="/" element={<Navigate to="/profile" replace />} />
    </Routes>
  );
};

export default AppRoutes;