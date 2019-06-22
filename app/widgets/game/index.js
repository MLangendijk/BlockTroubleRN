import GameField from '../gamefield/index';
import ScoreField from '../scorefield/index';
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
            round: 0
        };
    }

    componentDidMount() {
        this.startGame();
    }

    startGame () {

        setTimeout(this.onGameUpdate.bind(this), 3000);
    }

    onGameUpdate () {

        if (!this._failed && this._roundFinished) {

            this._roundFinished = false;
            this._round++;
            this.setState({
                round: this._round
            }, this.startGame.bind(this));
        } else {
            this._failed = true;
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
                <ScoreField score={this.state.score}/>
                <GameField onPress={this.onPress.bind(this)} round={this.state.round}/>
            </View>
        )
    }
}