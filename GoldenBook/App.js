import 'react-native-gesture-handler';

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from './src/screeens/LoginScreen';
import { TabRoutes } from './src/routes/TabRoutes';

import { DataProvider } from './src/context/DataContext';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <DataProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
          <Stack.Screen options={{ headerShown: false }} name="Home" component={TabRoutes} />
        </Stack.Navigator>
      </NavigationContainer>
    </DataProvider>
  );
}

export default App;