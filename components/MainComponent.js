import 'react-native-gesture-handler';
import React, { Component, useDebugValue } from 'react';
import { View, Picker, Button, ActivityIndicator, Image } from 'react-native';
import { Text } from 'react-native-elements';
import { TextInput } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { addHistory } from '../redux/actions';


class MainComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            amount: null,
            from: 'USD',
            to: 'EUR',
            convertedAmount: null,
            loading: false,
            currencylist: [],
            newHistory: {
                fromCurr: 'USD',
                toCurr: 'EUR',
                amount: '',
                convertedAmount: ''
            },
            // historyList: [],
            historybuilt: false,
            showhistory: false
        }

        this.convert = this.convert.bind(this);
        // this.pullHistory = this.pullHistory.bind(this);
        this.addHistory = this.addHistory.bind(this);
        // this.currencyList = this.currencyList.bind(this);

    };

    componentDidMount() {
        fetch("https://currency13.p.rapidapi.com/list", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "currency13.p.rapidapi.com",
                "x-rapidapi-key": "a492c12158msh0427afc7fa534f5p15d84bjsn128cf344f59c"
            }
        })
        .then(response => response.json())
        .then(data => {
            this.setState({currencylist: data.currencies.map((curr) => curr.code)});
            // console.log("Currency List is: ", data);
            console.log("Length of currency list is: ", data.length);
        })
        .catch(err => {
            console.log(err);
        });
    }
    

    convert() {
        this.setState({loading: true});
        fetch(`https://currency13.p.rapidapi.com/convert/${this.state.newHistory.amount}/${this.state.newHistory.fromCurr}/${this.state.newHistory.toCurr}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "currency13.p.rapidapi.com",
                "x-rapidapi-key": "a492c12158msh0427afc7fa534f5p15d84bjsn128cf344f59c"
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log("The Data Amount is: ", data);
            console.log("Converted Amount: ", data.amount * this.state.newHistory.amount);
            // this.setState({convertedAmount: data.amount * this.state.newHistory.amount});
            this.setState(prevState => ({
                newHistory: {
                    ...prevState.newHistory, 
                    convertedAmount: (data.amount * this.state.newHistory.amount)
                }
            })
        );
            this.setState({loading: false});
            console.log("History flag inside CONVERT: ", this.state.historybuilt);
            this.addHistory();
        })
        .catch(err => {
            console.log(err);
            this.setState({loading: false});
        });
        // this.addHistory;
    }

    // 6/16: Leena added below to handle user authentication post

    addHistory(){
        console.log("History flag prior to add history:", this.state.historybuilt);
        this.setState({historybuilt: true});
        console.log("History flag after add history:", this.state.historybuilt);
        
        fetch("http://10.0.2.2:3000/history", {
            "method": "POST",
            "headers": {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.newHistory)            
        })
        .then(response => response.text())
        .then(data => {
            // this.setState({historyList: [...this.state.historyList, this.state.newHistory] });
            // console.log("History List is: ", data.historyList);
            this.props.addHistory(this.state.newHistory);
            // console.log("Length of history list is: ", this.state.historyList);
        })
        .catch(err => {
            console.log(err);
        });  
        // console.log("The newHistory in the POST: ", this.state.historyList);  
    }
  
    // pullHistory() {
    //     this.setState({showhistory: true});
    //     fetch("http://10.0.2.2:3000/history", {
    //         "method": "GET",
    //     })
    //     .then(response => response.json())
    //     .then(data => {
    //         // this.setState({historyList: data});
    //         console.log("History List is: ", data);
    //         console.log("Length of history list is: ", data.length);
    //     })
    //     .catch(err => {
    //         console.log(err);
    //     });        
    // }

    // 6/16: Leena added above to handle user authentication post

    render() {
        return (
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                    <Text>{"\n"}{"\n"}</Text>
                    <View style={{alignItems: 'center', justifyContent: 'center'}}>
                        {/* <Image source={require('./images/logo.png')}></Image> */}
                        <Text h4>Welcome!!!</Text>
                        <Text>{"\n"}{"\n"}</Text>
                        <Text>We will help you convert the currency...</Text>
                    </View>
                    <Text>{"\n"}</Text>    
                    <View>
                        <TextInput 
                            placeholder='  Enter Amount Here...'
                            style={{height: 30, width: 150, borderWidth: 2, borderColor: 'grey' }}
                            value={this.state.newHistory.amount}
                            onChangeText={(amount) => this.setState({newHistory: {...this.state.newHistory, amount}})}
                        />
                        <Text>{"\n"}</Text> 
                        <Picker
                            selectedValue={this.state.newHistory.fromCurr}
                            style={{ height: 50, width: 150}}
                            onValueChange={(fromCurr) => this.setState({newHistory: {...this.state.newHistory, fromCurr}})}
                        >
                            {this.state.currencylist.map((curr) =>
                                <Picker.Item label={curr} value={curr} key={curr} />
                            )}

                        </Picker>
                        <Picker
                            selectedValue={this.state.newHistory.toCurr}
                            style={{ height: 50, width: 150}}
                            onValueChange={(toCurr) => this.setState({newHistory: {...this.state.newHistory, toCurr}})}
                        >
                        {this.state.currencylist.map((curr) =>
                            <Picker.Item label={curr} value={curr} key={curr} />
                        )}

                        </Picker>          
                    </View>
                    <Text>{"\n"}</Text> 
                    <View>
                        <Button
                            onPress={this.convert}
                            title="Convert"
                            color="blue" />
                    </View>
                    <Text>{"\n"}</Text> 
                    
                    {this.state.loading &&
                        <View>
                            <ActivityIndicator size="large" color="#841584" />
                        </View>
                    }
                    {this.state.historybuilt &&
                        <View>
                                 
                            <Text>
                                Converted Amount is {this.state.newHistory.convertedAmount} {this.state.newHistory.toCurr}
                            </Text>
                        </View>
                    }  
                                 
                </View>
        );
    }
}

const mapDispatchToProps = {
    addHistory
};

export default connect(null, mapDispatchToProps)(MainComponent);