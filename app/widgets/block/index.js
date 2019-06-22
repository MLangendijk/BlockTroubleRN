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
                height: (Dimensions.get('window').height / 4),
                width: (Dimensions.get('window').width / 4),
                backgroundColor: props.colorCode
            }
        });
    }

    render () {

        return (
            <TouchableOpacity
                onPress={this.onButtonPress.bind(this)}
                style={this.style.container}
            >
                <Text>
                    {this.colorCode}
                </Text>
            </TouchableOpacity>
        )
    }
}