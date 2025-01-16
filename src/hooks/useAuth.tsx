import { useState } from 'react';

interface AuthState {
  user: { id: number; email: string; rol: string } | null;
  token: string | null;
  loading: boolean;
  error: string | null;
}

export const useAuth = () => {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    token: null,
    loading: false,
    error: null
  });

  // Función para hacer login
  const login = async (email: string, password: string) => {
    setAuthState({ ...authState, loading: true });
    try {
      const response = await fetch('http://localhost:3001/v1/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Credenciales inválidas');
      }

      const data = await response.json();
      localStorage.setItem('token', data.token); // Guarda el token
      localStorage.setItem('user', JSON.stringify(data.user)); // Guarda los datos del usuario
      setAuthState({ user: data.user, token: data.token, loading: false, error: null });
      console.log("Inicio de sesión exitoso");
      console.log(data.user)
      console.log(data.token)

    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'Se produjo un error desconocido';
      setAuthState({ ...authState, loading: false, error: errorMessage });
    }
  };

  // Función para hacer logout
  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setAuthState({ user: null, token: null, loading: false, error: null });
    console.log("Sesión cerrada");
  };

  return { authState, login, logout };
};
