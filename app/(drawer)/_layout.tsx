import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Entypo from '@expo/vector-icons/Entypo';
import { Link } from 'expo-router';
import { Drawer } from 'expo-router/drawer';

const DrawerLayout = () => (
  <Drawer>
     <Drawer.Screen
      name="authen"
      options={{
        headerTitle: 'Authentication',
        drawerLabel: 'Authentication',
        drawerIcon: ({ size, color }) => 
          <FontAwesome5 name="user-alt" size={24} color="#8b4513" />
        
      }}
    />
    <Drawer.Screen
      name="facebook"
      options={{
        headerTitle: 'Facebook',
        drawerLabel: 'Facebook',
        drawerIcon: ({ size, color }) => <Entypo name="facebook" size={24} color="blue" />,
      }}
    />
    <Drawer.Screen
      name="feedback"
      options={{
        headerTitle: 'Feedback & Setting',
        drawerLabel: 'Feedback & Setting',
        drawerIcon: ({ size, color }) => <MaterialIcons name="feedback" size={24} color="black" />,
      }}
    />
   
  </Drawer>
);

export default DrawerLayout;
