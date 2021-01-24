import { Component } from "react";
import Question from "./Components/Question";
import * as data from './questions.json';
import { PieChart } from 'react-minimal-pie-chart';

class App extends Component {
  state = {
    libertarian: 3,
    progressive: 3,
    conservative: 3,
    questions: [],
    toShow: true
  }

  componentDidMount(){
    this.setState({questions: data.default});
  }

  btnClick(e){
    e.preventDefault();
    this.setState({toShow: !this.state.toShow});
    this.score();
  }

  score(){
    const answerKey = this.state.questions.map(el => el.answer),
    answers = Array.from(document.querySelectorAll('input[type="radio"]'))
    .filter(el => el.checked).map(el => el.attributes["data-key"].value);

    let c = 0, l = 0, p = 0;

    for(let i = 0; i< answers.length; i++){
      const val = answerKey[i][answers[i]];
      if(val === 'c')c++;
      else if(val === 'l') l++;
      else p++;
    }

    this.setState({progressive: p,conservative: c,libertarian: l});
  }

  render(){ 
    const { questions, libertarian, conservative,  progressive, toShow} = this.state;
    console.log(progressive);
    return (
      <div className='container'>
      <h1>The Three Axis</h1>
      <section>
        {toShow ?
         questions.map(el => (<Question question = {el.question} options = {el.options} key = {el.key} />))
        : (
          <div className = 'result'>
            <div className = 'label'>
              <div className = 'box box1'></div>
              <div className = 'tag1'>Conservative</div>
              <div className='box box2'></div>
              <div className = 'tag2'>Progressive</div>
              <div className='box box3'></div>
              <div className = 'tag3'>Libertarian</div>
            </div>
            <PieChart
              data = {[
                    { title: 'Progressive', value: progressive, color: '#00A3FF' },
                    { title: 'Conservative', value: conservative, color: '#FF0000' },
                    { title: 'Libertarian', value: libertarian, color: '#E7DE0E' },
              ]}
              label={({ dataEntry }) => `${Math.round(dataEntry.percentage)} %`}
              labelStyle = {{fontSize: '6px', fill: '#FFF', fontFamily: 'Quicksand', fontWeight: '800'}} 
              labelPosition = {85}
              lineWidth={30} 
            />
          </div>
        )
        }
        <button onClick = {(e) => this.btnClick(e)}>{toShow ? 'Submit': 'Retake Quiz'}</button>
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
