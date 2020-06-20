import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
// import MainComponent from './MainComponent';
import { connect } from 'react-redux';
import History from '../redux/reducers';

const mapStateToProps = (state) => 
{
    return {
        history:state.history
    }
}

class HistoryComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            signedIn: false,
            name: ""            
        }
    };

    componentDidMount() {
            // this.setState({showhistory: true});
            fetch("http://10.0.2.2:3000/history", {
                "method": "GET",
            })
            .then(response => response.json())
            .then(data => {
                this.setState({history: data});
                console.log("History List is: ", data);
                console.log("Length of history list is: ", data.length);
                console.log("The HISTORY in the STATE is: ", this.props.history);
            })
            .catch(err => {
                console.log(err);
            });
    }

    render() {
        return(
            <View style={styles.container}>                          
                <Text>
                    Here is your conversion history: {"\n"}
                    {/* {this.state.history.map(history => {
                        <Text>
                            {history.convertedAmount}
                        </Text>
                    })}  */}
                </Text>
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



export default connect(mapStateToProps)(HistoryComponent);