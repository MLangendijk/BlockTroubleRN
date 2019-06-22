import GameField from '../gamefield/index';
import ScoreField from '../scorefield/index';
import React, {Component} from 'react';
import {View} from 'react-native';

export default class Game extends Component {

    constructor () {
        super();
        this._score = 0;
        this._round = 0;

        this.state = {
            score: 0,
            round: 0,
            failed: false
        };
    }

    componentDidMount() {
        this.startGame();
    }

    startGame () {

        setTimeout(this.onGameUpdate.bind(this), 3000);
    }

    onGameUpdate () {

        if (!this.state.failed) {

            this._round++;
            this.setState({
                round: this._round
            }, this.startGame.bind(this));
        }
    }

    onPress (succesfull) {

        if (succesfull) {
            this._score++;
            this.setState({
                score: this._score
            });
        } else {
            this.setState({
                failed: true
            })
        }
    }

    render () {

        return (
            <View style={{flex: 1}}>
                <ScoreField score={this.state.score}/>
                <GameField onPress={this.onPress.bind(this)} round={this.state.round}/>
            </View>
        )
    }
}