import React from 'react';
import Scanner from './Scanner';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Scanopener from './Scanopener';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Scanopener" component={Scanopener} />
        <Stack.Screen name="Scanner" component={Scanner} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
