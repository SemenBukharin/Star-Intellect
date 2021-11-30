import React from 'react';
import Main from './src/pages/MainPage'
import Load from './src/pages/LoadScene';
import First from './src/pages/FirstScene';
import Second from './src/pages/SecondScene'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

let App = () => {  
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ animationEnabled: false }}>
        <Stack.Screen
          name="Load"
          component={Load}
          options={{ headerShown: false}}
        />
        <Stack.Screen
          name="Main"
          component={Main}
          options={{ headerShown: false}}
        />
        <Stack.Screen
          name="First"
          component={First}
          options={{ headerShown: true}}
        />
        <Stack.Screen
          name="Second"
          component={Second}
          options={{ headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
