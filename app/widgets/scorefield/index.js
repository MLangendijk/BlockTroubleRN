import {Text, View, StyleSheet} from "react-native";
import React, {Component} from 'react';

export default class ScoreField extends Component {

    styles = StyleSheet.create({

        container: {
            width: '100%',
            height: 30,
            justifyContent: 'center',
            alignItems: 'center'
        },
        text: {
            fontSize: 25
        }
    });

    render () {

        return (
            <View style={this.styles.container}>
                <Text key={this.props.score} style={this.styles.text}>
                    Score: {this.props.score}
                </Text>
            </View>
        );
    }
}
