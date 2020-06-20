import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { Component } from 'react';
import { View } from 'react-native';
import MainComponent from './MainComponent';
import Login from './LoginComponent';
import HistoryComponent from './HistoryComponent';

export default function MyTab()
{
    const Tab = createBottomTabNavigator();

    return (
        <View style={{height:'100%', justifyContent: 'center'}}>
            <NavigationContainer>
                <Tab.Navigator>
                    <Tab.Screen name="Conversion" component={MainComponent} />
                    <Tab.Screen name="History" component={HistoryComponent} />
                    <Tab.Screen name="Login" component={Login} />
                </Tab.Navigator>
            </NavigationContainer>
        </View>
    );
}
