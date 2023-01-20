import React, { useEffect, useRef, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { userStore } from '@/store/userStore';
import { shallow } from 'zustand/shallow';

import Admin from '@/layouts/Admin';
import Auth from '@/layouts/Auth';
import setAuthToken from './utils/setAuthToken';

import Login from '@/views/auth/Login';
import Todo from '@/views/admin/Todo';

function App() {
  const { token: isAuthenticated } = userStore(
    (state) => ({
      token: state.token,
    }),
    shallow
  );

  const isRunned = useRef(false);

  if (isAuthenticated) {
    setAuthToken(localStorage.token);
  }

  useEffect(() => {
    if (isRunned.current) return;
    isRunned.current = true;

  }, [isAuthenticated]);

  return (
    <Routes>
      <>
        <Route path="admin" element={<Admin />}>
          <Route
            path="todo"
            element={
              <ProtectedRoute>
                <Todo />
              </ProtectedRoute>
            }
          />
        </Route>
      </>
      <Route path="auth" element={<Auth />}>
        <Route path="login" element={<Login />} />
      </Route>
      <Route path="*" element={<MissingRoute />} />
    </Routes>
  );
}

const ProtectedRoute = ({ roles, children }) => {
  const token = userStore((state) => state.token);
  const user = userStore((state) => state.user);
  const isAuthenticated = token;

  if (!isAuthenticated) {
    return <Navigate to="/auth/login" replace />;
  }
  return children;
};

const MissingRoute = () => {
  return <Navigate to={{ pathname: '/auth/login' }} />;
};

export default App;
