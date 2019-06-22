import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Block from '../block/index';
import styles from '../gamefield/style';

export default class GameField extends Component<props> {
    
    colorsValues = {
        RED: '#ba2828',
        BLUE: '#2860ba',
        GREEN: '#2cba28',
        YELLOW: '#f4f11d',
        PINK: '#f41cf4',
        PURPLE: '#8302F4'
    };

    colorsBase = [
        'RED', 'BLUE', 'GREEN', 'YELLOW', 'PINK', 'PURPLE'
    ];

    onButtonPress (e) {

    }

    shuffle (a) {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }

    generateButtons () {
        const length = 5;
        let i, max = 5, min = 0, output = [], colors = [...this.colorsBase],
            oddColor = colors.splice([Math.floor(Math.random() * (max - min + 1)) + min], 1);

        // Generate all pairs.
        for (i = 0; i < length; i++) {
            const color = colors[i];
            const colorValue = this.colorsValues[colors[i]];

            for (let j = 0, l = 3; j < l; j++) {
                output.push({
                    color: color,
                    colorCode: colorValue,
                    key: Math.random()
                });
            }
        }

        // Generate odd color.
        output.push({
            color: oddColor,
            colorCode: this.colorsValues[oddColor],
            key: Math.random()
        });

        return this.shuffle(output);
    }

    render () {
        let buttons = this.generateButtons();

        return (
            <View style={styles.container}>
                { buttons.map(button => <Block onButtonPress={this.onButtonPress.bind(this)} color={button.color} key= {button.key} id={button.key} colorCode={button.colorCode}/>)}
            </View>
        )
    }
}