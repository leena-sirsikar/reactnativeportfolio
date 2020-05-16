import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Login extends Component {

    constructor(props) {
        super(props);

    }

    static navigationOptions = {
        title: 'Login'
    }

    render() {
        return(
            <View>
                <Text>
                    Google Sign in here...
                </Text>
            </View>
        );
    }
}

export default Login;