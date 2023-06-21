import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../screeens/HomeScreen';
import { LoginScreen } from '../screeens/LoginScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SearchScreen } from '../screeens/SearchScreen';
import { FavsScreen } from '../screeens/FavsScreen';
import { BasketScreen } from '../screeens/BasketScreen';

const Tab = createBottomTabNavigator();

export const TabRoutes = () => {
    return (
        <NavigationContainer independent={true}>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'Livraria') {
                            iconName = focused
                                ? 'home'
                                : 'home-outline';
                        } else if (route.name === 'Buscar') {
                            iconName = focused ? 'search' : 'search-outline';
                        }else if (route.name === 'Favoritos') {
                            iconName = focused ? 'heart' : 'heart-outline';
                        }else if (route.name === 'Carrinho') {
                            iconName = focused ? 'basket' : 'basket-outline';
                        }
                        // You can return any component that you like here!
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: '#efb810',
                    tabBarInactiveTintColor: '#333333',
                    tabBarStyle: { backgroundColor: '#964b00' },
                })}
            >
                <Tab.Screen options={{
                    headerStyle: { backgroundColor: '#964b00', }, headerTintColor: '#efb810', headerTitleStyle: { fontWeight: 'bold', },
                }} name="Livraria" component={HomeScreen} />
                <Tab.Screen options={{
                    headerStyle: { backgroundColor: '#964b00', }, headerTintColor: '#efb810', headerTitleStyle: { fontWeight: 'bold', },
                }} name="Buscar" component={SearchScreen} />
                <Tab.Screen options={{
                    headerStyle: { backgroundColor: '#964b00', }, headerTintColor:'#efb810', headerTitleStyle: { fontWeight: 'bold', },
                }} name="Favoritos" component={FavsScreen} />
                <Tab.Screen options={{
                    headerStyle: { backgroundColor: '#964b00', }, headerTintColor:'#efb810', headerTitleStyle: { fontWeight: 'bold', },
                }} name="Carrinho" component={BasketScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
