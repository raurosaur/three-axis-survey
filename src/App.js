import { Component } from "react";
import Question from "./Components/Question";
import * as data from './questions.json';

class App extends Component {
  state = {
    libertarian: 0,
    progressive: 0,
    conservative: 0,
    responses: 0,
    questions: []
  }
  componentDidMount(){
    this.setState({questions: data.default});
  }
  render(){ 
    const {questions} = this.state;
    return (
    <div className = 'container'>
      <h1>The Three Axis</h1>
      <section>
        {questions.map(el => (<Question question = {el.question} options = {el.options} key = {el.key} />))}
      </section>
      <footer>
      <div>©Arnold Kling</div>
          <div>Created by <a href= 'https://github.com/raurosaur'>raurosaur</a></div>
      </footer>
    </div>
    );
  }
}

export default App;
