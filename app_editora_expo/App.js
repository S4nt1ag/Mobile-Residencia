import Login from './src/pages/Login'
import { Home } from './src/pages/Home'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

const Stack = createStackNavigator();

class App extends React.Component {
  render(){
    return (
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen
            name="Home"
            component={Home}
          />
          <Stack.Screen
            name="Login"
            component={Login}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;