import { Slot } from 'expo-router';
import { AuthProvider } from './authProvider';

const AuthenLayout = () => {
  return (
    <AuthProvider>
      <Slot />
    </AuthProvider>
  );
};

export default AuthenLayout;
