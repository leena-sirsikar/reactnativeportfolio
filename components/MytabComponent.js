import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from 'react-navigation';
import React, { Component } from 'react';
import { View } from 'react-native';
import { Icon } from 'react-native-elements'
import MainComponent from './MainComponent';
import Login from './LoginComponent';
import History from './HistoryComponent';

const MyTab = createBottomTabNavigator(
    {
        Login: {
            screen: Login,

            navigationOptions: {
                tabBarLabel:"Login",
                tabBarIcon: ({ tintColor }) => (
                    <Icon 
                        name='sign-in'
                        type='font-awesome'
                        color='#fff'
                        iconStyle={{marginRight: 10}} 
                    />
                )
            },
        },
        Conversion: {
            screen: MainComponent,

            navigationOptions: {
                tabBarLabel:"Conversion",
                tabBarIcon: ({ tintColor }) => (
                    <Icon 
                        name='exchange'
                        type='font-awesome'
                        color='#fff'
                        iconStyle={{marginRight: 10}} 
                    />
                )
            },
        },
        History: {
            screen: History,

            navigationOptions: {
                tabBarLabel:"History",
                tabBarIcon: ({ tintColor }) => (
                    <Icon 
                        name='history'
                        type='font-awesome'
                        color='#fff'
                        iconStyle={{marginRight: 10}} 
                    />
                )
            },
        },
    },
    {
        order: ['Conversion', 'History', 'Login'],
        tabBarOptions: {
            activeBackgroundColor: '#5637DD',
            inactiveBackgroundColor: '#CEC8FF',
            activeTintColor: '#fff',
            inactiveTintColor: '#808080',
            labelStyle: {fontSize: 16}
        }
    }
);

export default MyTab;
// {
//     return (
//         <View style={{height:'100%', justifyContent: 'center'}}>
//             <NavigationContainer>
//                 <Tab.Navigator>
//                     <Tab.Screen name="Conversion" component={MainComponent} />
//                     <Tab.Screen name="Login" component={Login} />
//                 </Tab.Navigator>
//             </NavigationContainer>
//         </View>
//     );
// }
