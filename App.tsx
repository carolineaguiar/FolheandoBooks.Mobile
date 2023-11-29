import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/screens/HomeScreen';
import Shop from './src/screens/Shop';

const Tab = createBottomTabNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Shop" component={Shop} />
        {/* Adicione outras telas/tabs conforme necessário */}
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
