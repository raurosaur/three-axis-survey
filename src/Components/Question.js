import React, {Component} from "react";

export default class Question extends Component{
    render(){
        return(
            <div className = 'question'>
                <h3>{this.props.question}</h3>
                <form>
                    {this.props.options.map((option, index) => (
                        <div key = {Math.random()}>
                            <input name = 'group'type = 'radio' id = {option} key = {index} />
                            <label htmlFor = {option}>{option}</label>
                        </div>
                    ))}
                </form>
            </div>
        );
    }
}