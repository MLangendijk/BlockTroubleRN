import GameField from '../gamefield/index';
import ScoreField from '../scorefield/index';
import BeginGame from '../messages/begingame';
import EndGame from '../messages/endgame';
import React, {Component} from 'react';
import {View} from 'react-native';

export default class Game extends Component {

    constructor () {
        super();
        this._score = 0;
        this._round = 0;
        this._failed = false;

        this.state = {
            score: 0,
            round: 0,
            beginGameVisible: true,
            endGameVisible: false
        };
    }

    startRound () {
        let timeout = this.getTimeoutForRound();

        setTimeout(this.onRoundEnd.bind(this), timeout);
    }

    beginGame () {
        this.setState({
            beginGameVisible: false
        }, this.startRound.bind(this));
    }

    restartGame () {
        this._round = 0;
        this._score = 0;
        this._failed = false;

        this.setState({
            endGameVisible: false,
            beginGameVisible: true,
            score: 0,
            round: 0
        })
    }

    getTimeoutForRound () {
        let timeout = 3000;

        if (this._round > 100) {
            timeout -= this._round;
        } else if (this._round > 50) {
            timeout -= (this._round / 2)
        } else if (this._round >= 25) {
            timeout -= (this._round / 3);
        } else if (this._round >= 10) {
            timeout -= (this._round / 4);
        }

        return timeout;
    }

    onRoundEnd () {

        if (!this._failed && this._roundFinished) {

            this._roundFinished = false;
            this._round++;
            this.setState({
                round: this._round
            }, this.startRound.bind(this));
        } else {
            this._failed = true;

            this.setState({
                endGameVisible: true
            });
        }
    }

    onPress (successful) {

        this._roundFinished = true;

        if (successful && !this._failed) {
            this._score++;
            this.setState({
                score: this._score
            });
        } else {
            this._failed = true;
        }
    }

    render () {

        return (
            <View style={{flex: 1}}>
                <View style={{flex: 1}}>
                    <ScoreField score={this.state.score}/>
                    <GameField onPress={this.onPress.bind(this)} round={this.state.round}/>
                </View>
                {this.state.beginGameVisible === true ? <BeginGame callback={this.beginGame.bind(this)}/> : null}
                {this.state.endGameVisible === true ? <EndGame callback={this.restartGame.bind(this)} /> : null}
            </View>
        )
    }
}