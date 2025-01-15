import { User } from '@/api/v1/models/user.model';
import { useState } from 'react';
import * as authService from '@/api/v1/services/authService';

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const register = async (userData: User) => {
    try {
      const registeredUser = await authService.register(userData);
      setUser(registeredUser);
    } catch {
      setError('Error al registrar usuario');
    }
  };

  const login = async (email: string, password: string) => {
    try {
      const token = await authService.login(email, password);
      setToken(token);
    } catch {
      setError('Credenciales inválidas');
    }
  };

  return { user, token, error, register, login };
};