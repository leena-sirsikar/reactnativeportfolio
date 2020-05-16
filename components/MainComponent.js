import 'react-native-gesture-handler';
import React, { Component, useDebugValue } from 'react';
import { View, Picker, Button, Text, ActivityIndicator } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';


class MainComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            amount: null,
            from: 'USD',
            to: 'EUR',
            convertedAmount: null,
            loading: false
        }

        this.convert = this.convert.bind(this);
    };

    

    convert() {

        this.setState({loading: true});
        fetch(`https://currency13.p.rapidapi.com/convert/${this.state.amount}/${this.state.from}/${this.state.to}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "currency13.p.rapidapi.com",
                "x-rapidapi-key": "a492c12158msh0427afc7fa534f5p15d84bjsn128cf344f59c"
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log("The Data Amount is: ", data);
            console.log("Converted Amount: ", data.amount * this.state.amount);
            this.setState({convertedAmount: data.amount * this.state.amount});
            this.setState({loading: false});
        })
        .catch(err => {
            console.log(err);
            this.setState({loading: false});
        });
    }

    render() {
        return (
                <View>    
                    <View>
                        <TextInput 
                            placeholder='Enter Amount...'
                            value={this.state.amount}
                            onChangeText={(amount) => this.setState({amount})}
                        />
                        <Picker
                            selectedValue={this.state.from}
                            style={{ height: 50, width: 150}}
                            onValueChange={(itemValue) => this.setState({from: itemValue})}
                        >
                            <Picker.Item label="USD" value="USD" />
                            <Picker.Item label="EUR" value="EUR" />
                            <Picker.Item label="INR" value="INR" />
                        </Picker>
                        <Picker
                            selectedValue={this.state.to}
                            style={{ height: 50, width: 150}}
                            onValueChange={(itemValue) => this.setState({to: itemValue})}
                        >
                            <Picker.Item label="USD" value="USD" />
                            <Picker.Item label="EUR" value="EUR" />
                            <Picker.Item label="INR" value="INR" />
                        </Picker>          
                    </View>
                    <View>
                        <Button
                            onPress={this.convert}
                            title="Convert"
                            color="blue" />
                    </View>
                    {this.state.loading &&
                        <View>
                            <ActivityIndicator size="large" color="#841584" />
                        </View>
                    }
                    {this.state.convertedAmount != null &&
                        <View>
                            <Text>
                                Converted Amount is {this.state.convertedAmount} {this.state.to}
                            </Text>
                        </View>
                    }                
                </View>
        );
    }
}

export default MainComponent;