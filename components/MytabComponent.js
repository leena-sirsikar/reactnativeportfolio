import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { Component } from 'react';
import MainComponent from './MainComponent';
import Login from './LoginComponent';

export default function MyTab()
{
    const Tab = createBottomTabNavigator();

    return (
        <NavigationContainer style={{backgroundColor:'red',height:'100%'}}>
            <Tab.Navigator>
                <Tab.Screen name="Main" component={MainComponent} />
                <Tab.Screen name="Login" component={Login} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
