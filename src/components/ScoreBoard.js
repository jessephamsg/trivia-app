import React, {Component} from 'react';

export class ScoreBoard extends Component {
    constructor(props) {
        super (props)
        this.addScore = this.addScore.bind(this);
        this.deductScore = this.deductScore.bind(this);
        this.resetScore = this.resetScore.bind(this);
    }
    addScore () {
        this.props.updateScore('add')
    }
    deductScore () {
        this.props.updateScore('subtract')
    }
    resetScore () {
        this.props.updateScore('reset')
    }
    render () {
        return (
            <div>
                <h2>Score: {this.props.currentScore}</h2>
                <button onClick={this.addScore}>Increase</button>
                <button onClick={this.deductScore}>Decrease</button>
                <button onClick={this.resetScore}>Reset</button>
            </div>
        )
    }
}

export default ScoreBoard