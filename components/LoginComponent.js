import * as Google from 'expo-google-app-auth';
import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import MainComponent from './MainComponent';
import { connect } from 'react-redux';

class Login extends Component {

    constructor(props) {
        super(props);

        // this.state = {
        //     signedIn: false,
        //     name: ""            
        // }
    }

    signIn = async () => {
        try {
            const result = await Google.logInAsync({
              androidClientId: '1087486727974-sv2cgav6kpu3fl403ne2ufslm6l22f4o.apps.googleusercontent.com',
              scopes: ['profile', 'email'],
            });
        
            if (result.type === 'success') {
                console.log("Entering success loop: ", this.state.signedIn);
                console.log("Here are the signed in user details: ", result);
                
              this.setState({
                  signedIn: true,
                  name: result.user.name
              }) 
              
              console.log("The state is updated...");
              
            } else {
              console.log("User Cancelled...");
            }
          } catch (e) {
                console.log("Error: ", e);
          }
    }

    render() {
        return(
            <View style={styles.container}>
{/* 
                        <View>                           
                            <Text>
                                Here is your conversion history: {"\n"}
                                {this.props.history.map(history => {
                                    <Text>
                                        {history.convertedAmount}
                                    </Text>
                                })} 
                            </Text>
                        </View> */}

                {this.state.signedIn ? (
                    <MainComponent />
                ) : (         
                    <View style={styles.formButton}>           
                        <Button buttonStyle={{backgroundColor: '#5637DD'}} title="Sign In with Google" onPress={() => this.signIn()} />
                    </View>
                )}
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        margin: 10,
        alignItems: 'center'
    },
    formIcon: {
        marginRight: 10
    },
    formInput: {
        padding: 8
    },
    formCheckbox: {
        margin: 8,
        backgroundColor: null
    },
    formButton: {
        margin: 20,
        marginRight: 40,
        marginLeft: 40
    },
    imageContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        margin: 10
    },
    image: {
        width: 60,
        height: 60
    }
});

// const mapStateToProps = (state) => 
// {
//     return {
//         history:state.history
//     }
// }

// export default connect(mapStateToProps)(Login);

export default Login;