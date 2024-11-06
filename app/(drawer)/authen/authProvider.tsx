import { createContext, useContext, useState, ReactNode } from 'react';
import { User } from '~/interfaces/User';
import { AuthContextType } from '~/interfaces/AuthContextType';

const accounts = [
  {
    email: '21520984@gm.uit.edu.vn',
    password: 'trandinhkhanh',
    name: 'Khanh',
  },
];

const AuthContext = createContext<AuthContextType>({
  currentUser: null,
  login: () => Promise.reject(new Error('Not implemented')),
  register: () => Promise.reject(new Error('Not implemented')),
  logout: () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  const login = async (email: string, password: string): Promise<void> => {
    const user = accounts.find(
      (account) => account.email === email && account.password === password
    );
    if (user) {
      setCurrentUser(user);
      return;
    }
    throw new Error('Invalid email or password'); 
  };

  const logout = () => {
    setCurrentUser(null);
  };

  const register = async (email: string, password: string, name: string): Promise<void> => {
    const userExists = accounts.some((account) => account.email === email);
    if (userExists) {
      throw new Error('User already exists'); 
    }

    accounts.push({ email, password, name });
    setCurrentUser({ email, name });
  };

  return (
    <AuthContext.Provider value={{ currentUser, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
