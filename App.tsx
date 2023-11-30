import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/screens/HomeScreen';
import Shop from './src/screens/Shop';
import Why from './src/screens/Contact';
import Login from './src/screens/Login';
import Cart from './src/screens/Cart';


const Tab = createBottomTabNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Shop" component={Shop} />
        <Tab.Screen name="Why" component={Why} />
        <Tab.Screen name="Login" component={Login} />
        <Tab.Screen name="Cart" component={Cart} />


      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
