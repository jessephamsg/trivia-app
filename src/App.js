import React, {Component} from 'react';
import './App.css';
import GameBody from './components/GameBody.js'

export class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: null,
      score: 0
    }
    this.updateScore = this.updateScore.bind(this);
    this.getQuestion = this.getQuestion.bind(this);
  }
  async getData () {
    try {
      const data = await fetch('http://jservice.io/api/random');
      const JSONData = await data.json();
      this.setState({
        data: JSONData
      })
      console.log(this.state.data)
    } catch {
      console.log('Failed to fetch data')
    }
  }
  componentDidMount () {
    this.getData()
  }
  getQuestion () {
    this.getData()
  }
  updateScore (action) {
    switch (action) {
      case 'add':
      this.setState({score: this.state.score + 1});
      break;
      case 'subtract':
      this.setState({score: this.state.score - 1});
      break;
      case 'reset':
      this.setState({score: 0});
      break;
      default: 
      this.setState({score: 0});
    }
    console.log(this.state.score) 
  }
  render () {
    if(this.state.data===null) {
      return (
      <div>
        <p>loading data...</p>
      </div>
      )
    } else {
      return ( 
        <div className="App">
          <button onClick={this.getQuestion}>Get New Question</button>
          <GameBody data={this.state.data[0]} updateScore ={this.updateScore} currentScore={this.state.score}/>
        </div>
      );
    }
  }
}

export default App;
