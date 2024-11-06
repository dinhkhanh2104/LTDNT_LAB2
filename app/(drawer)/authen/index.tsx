import { router } from 'expo-router';
import { useAuth } from './authProvider';
import { useEffect } from 'react';
import { View, Text } from 'react-native';

const index = () => {
  const { currentUser } = useAuth();

  useEffect(() => {
    setTimeout(() => {
      if (!currentUser) {
        router.navigate('/(drawer)/authen/login');
      } else {
        router.navigate('/(drawer)/authen/(tabs)/');
      }
    }, 0);
  }, [currentUser]);
};

export default index;

// Trần Đình Khánh - 21520984