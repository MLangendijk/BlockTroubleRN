import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class BeginGame extends Component<props> {

    styles = StyleSheet.create({
        overlay: {
            flex: 1,
            position: 'absolute',
            height: '100%',
            width: '100%',
            opacity: 0.4,
            backgroundColor: 'black'
        },
        container: {
            width: '90%',
            height: '50%',
            backgroundColor: 'blue',
            position: 'absolute',
            top: '15%',
            left: '5%',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            opacity: 1
        },
        text: {
            textAlign: 'center',
            fontSize: 30,
            color: 'white'
        }
    });

    constructor (props) {
        super(props);

        this.state = {
            current: 5
        };
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.decrement();
        }, 1000);
    }

    decrement () {

        if (this.state.current === 0) {
            clearInterval(this.interval);
            this.props.callback();
        } else {
            this.setState((prevstate) => ({current: prevstate.current - 1}));
        }
    }

    render () {

        return (
            <View style={{flex:1, height:'100%', width:'100%', position:'absolute'}}>
                <View style={this.styles.overlay}>
                </View>
                <View style={this.styles.container}>
                    <Text style={this.styles.text}>
                        Game starting in {this.state.current}
                    </Text>
                </View>
            </View>
        )
    }
}