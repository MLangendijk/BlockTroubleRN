import {Text} from "react-native";
import React, {Component} from 'react';

export default class ScoreField extends Component {

    render () {

        return (
            <Text key={this.props.score} style={{width:"100%", height:30}}>
                Score: {this.props.score}
            </Text>
        );
    }
}
