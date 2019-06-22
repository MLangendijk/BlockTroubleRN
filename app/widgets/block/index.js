import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, Dimensions} from 'react-native';

export default class Block extends Component<props> {

    constructor (props) {
        super(props);
        this.onButtonPress = props.onButtonPress;
        this.color = props.color.toString();
        this.id = props.id;
        this.colorCode = props.colorCode;

        this.style = StyleSheet.create({
            container: {
                height: '25%',
                width: (Dimensions.get('window').width / 4),
                backgroundColor: props.colorCode
            }
        });
    }

    onPress (e) {

        this.onButtonPress(this, e);
    }

    render () {

        return (
            <TouchableOpacity
                onPress={this.onPress.bind(this)}
                style={this.style.container}
            >
                <Text>
                    {this.colorCode}
                </Text>
            </TouchableOpacity>
        )
    }
}