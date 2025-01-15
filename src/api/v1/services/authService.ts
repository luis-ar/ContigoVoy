import axios from 'axios';
import { User } from '../models/user.model';
import API_URL from '../apiConfig';

export const register = async (user: User): Promise<User> => {
  const response = await axios.post(`${API_URL}/auth/register`, user);
  return response.data;
};

export const login = async (email: string, password: string): Promise<string> => {
  const response = await axios.post(`${API_URL}/auth/login`, { email, password });
  return response.data.token;
};
