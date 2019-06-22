import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export default class EndGame extends Component<props> {

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

    render () {

        return (
            <View style={{flex: 1, width: '100%', height: '100%', position: 'absolute'}}>
                <View style={this.styles.overlay}>
                </View>
                <View style={this.styles.container}>
                    <Text style={this.styles.text}>
                        That's unfortunate, you missed it!
                    </Text>
                    <TouchableOpacity onPress={this.props.callback}>
                        <Text>
                            Play again
                        </Text>
                    </TouchableOpacity>
                </View>
                </View>
        )
    }
}