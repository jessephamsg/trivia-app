import React, {Component} from 'react';
import ScoreBoard from './ScoreBoard.js'

export class GameBody extends Component {
    constructor(props) {
        super(props)
        this.state = {
            viewAnswer: false
        }
        this.toggleViewAnswer = this.toggleViewAnswer.bind(this)
    }
    toggleViewAnswer () {
        this.setState({
            viewAnswer: true
        })
    }
    render () {
        return (
            <div>
                <ScoreBoard updateScore={this.props.updateScore} currentScore={this.props.currentScore}/>
                <h4>Question: {this.props.data.category.title}</h4>
                <h4>Question: {this.props.data.question}</h4>
                <button onClick={this.toggleViewAnswer}>View Answer</button>
                {(this.state.viewAnswer) ? <p>Answer: {this.props.data.answer}</p> : <p>.....</p>}
            </div>
        )
    }
} 

export default GameBody