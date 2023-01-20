import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';

import { shallow } from 'zustand/shallow';

import { userStore } from '@/store/userStore';

export default function Login() {
  const {
    login,
    error,
    token: isAuthenticated,
  } = userStore(
    (state) => ({
      login: state.login,
      error: state.error,
      token: state.token,
    }),
    shallow
  );

  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const { username, password } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (isAuthenticated) {
    return <Navigate to="/admin/todo" />;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    login(formData);
  };
  return (
    <>
      <div className="container mx-auto h-full px-4">
        <div className="flex h-full content-center items-center justify-center">
          <div className="w-full px-4 lg:w-4/12">
            <div className="relative mb-6 flex w-full min-w-0 flex-col break-words rounded-lg border-0 bg-gray-200 shadow-lg">
              <div className="mb-0 rounded-t px-6 py-6">
                <div className="mb-3 text-center">
                  <h6 className="text-sm font-bold text-gray-500">
                    Iniciar Sesión
                  </h6>
                </div>
                <hr className="border-b-1 mt-6 border-gray-300" />
              </div>
              <div className="flex-auto px-4 py-10 pt-0 lg:px-10">
                <form onSubmit={(e) => handleSubmit(e)}>
                  <div className="relative mb-3 w-full">
                    <label
                      className="mb-2 block text-xs font-bold uppercase text-gray-600"
                      htmlFor="grid-username"
                    >
                      username
                    </label>
                    <input
                      type="text"
                      className="w-full rounded border-0 bg-white px-3 py-3 text-sm text-gray-600 placeholder-gray-300 shadow transition-all duration-150 ease-linear focus:outline-none focus:ring"
                      name="username"
                      value={username}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="relative mb-3 w-full">
                    <label
                      className="mb-2 block text-xs font-bold uppercase text-gray-600"
                      htmlFor="grid-password"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      className="w-full rounded border-0 bg-white px-3 py-3 text-sm text-gray-600 placeholder-gray-300 shadow transition-all duration-150 ease-linear focus:outline-none focus:ring"
                      name="password"
                      value={password}
                      onChange={handleChange}
                    />
                    {error && error.message && (
                      <span className="mr-2 text-xs text-red-500">
                        <i className="fas fa-bell"></i> {error.message}
                      </span>
                    )}
                  </div>

                  <div className="mt-6 text-center">
                    <button
                      className="mr-1 mb-1 rounded bg-gray-800 px-6 py-3 text-sm font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-lg focus:outline-none active:bg-gray-600"
                      type="submit"
                    >
                      Iniciar Sesión
                    </button>
                    <Link
                      className="mr-1 mb-1 rounded bg-gray-800 px-6 py-3 text-sm font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-lg focus:outline-none active:bg-gray-600"
                      type="submit"
                      to="/admin/todo"
                    >
                      To do
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
