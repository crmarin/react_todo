import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import api from '../utils/api';

let store = (set, get) => ({
  token: localStorage.getItem('token'),
  user: null,
  error: null,
  login: async (formData) => {
    try {
      const { data: token } = await api.post('auth/login', formData);
      set({ token: token }, false, {
        type: 'login',
        formData,
      });
      api.defaults.headers.common['x-auth-token'] = token.token;
      localStorage.setItem('token', token.token);
    } catch (err) {
      set({ error: err.response.data }, false, {
        type: 'login-fail',
      });
    }
  },
  logout: async () => {
    set({ token: null }, false, { type: 'logout' });
    delete api.defaults.headers.common['x-auth-token'];
    localStorage.removeItem('token');
    document.location.href = '/';
  },
});

const userStore = create(devtools(store, { name: 'userStore' }));

export { userStore };
