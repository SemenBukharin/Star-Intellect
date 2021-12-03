import React from 'react';
import Main from './src/pages/MainPage'
import Load from './src/pages/LoadScene';
import First from './src/pages/FirstScene';
import Second from './src/pages/SecondScene';
import Third from './src/pages/ThirdScene';
import Titles from './src/pages/TitlesScene';
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
          options={{ headerShown: false}}
        />
        <Stack.Screen
          name="Second"
          component={Second}
          options={{ headerShown: false}}
        />
        <Stack.Screen
          name="Third"
          component={Third}
          options={{ headerShown: false}}
        />
        <Stack.Screen
          name="Titles"
          component={Titles}
          options={{ headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
