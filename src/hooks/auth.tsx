import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { api } from "../services/api";

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthContextData {
  user: User;
  SignIn: (credentials: Credentials) => Promise<void>;
  SignOut: () => void;
  updateProfile: ({ user }: { user: User; }) => Promise<string | undefined>;
}

interface Credentials {
  email: string;
  password: string;
}

interface AuthData {
  token: string;
  user: User;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

function AuthProvider({ children }: any) {
  const [data, setData] = useState({} as AuthData);

  async function SignIn({ email, password }: Credentials) {
    try {
      const response = await api.post('/sessions', { email, password });
      const { user, token } = response.data;

      localStorage.setItem('@rocketnotes:users', JSON.stringify(user));
      localStorage.setItem('@rocketnotes:token', token);

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      setData({ user, token });
    } catch (error: any) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert('Não foi possível realizar o login.');
      }
    }
  }

  function SignOut() {
    localStorage.removeItem('@rocketnotes:users');
    localStorage.removeItem('@rocketnotes:token');

    setData({} as AuthData);
  }

  async function updateProfile({ user }: { user: User; }) {
    try {
      await api.put('/users', user);
      localStorage.setItem('@rocketnotes:users', JSON.stringify(user));

      setData({ user, token: data.token });
      alert('Perfil Atualizado!');

      return 'sucesso'
    } catch (error: any) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert('Não foi possível atualizar o usuário.');
      };
    };
  }

  useEffect(() => {
    const user = localStorage.getItem('@rocketnotes:users');
    const token = localStorage.getItem('@rocketnotes:token');

    if (user && token) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      setData({
        token,
        user: JSON.parse(user)
      });
    }
  }, []);

  return (
    <AuthContext.Provider value={{
      SignIn,
      SignOut,
      updateProfile,
      user: data.user
    }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
