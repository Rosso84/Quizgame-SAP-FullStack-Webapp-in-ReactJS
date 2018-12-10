import React from "react";
import {MyHomeLink} from "./my_home_link";
import {quizzes} from "./quizzes"


export class Quizgame extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            quizIndex: 0,
            loggedInUsers: []
        };
    };

    onAnswerClick(e, i) {
        const chosenBtn = e.target.id;

        if (chosenBtn.toString() === i.toString()) {
            alert('Correct!');
            let newIndex = this.randomNewQuiz();
            this.setState({quizIndex: newIndex});
        } else {
            alert('Wrong!');
        }
    };

    displayQuiz(quiz) {
        return (
            <div>
                <h2 className="question-txt"> {quiz.question}</h2>
                <button className="answer-btn" onClick={e => this.onAnswerClick(e, quiz.indexOfRightAnswer)}
                        id={0}>{quiz.answer_0}</button>
                <button className="answer-btn" onClick={e => this.onAnswerClick(e, quiz.indexOfRightAnswer)}
                        id={1}>{quiz.answer_1}</button>
                <button className="answer-btn" onClick={e => this.onAnswerClick(e, quiz.indexOfRightAnswer)}
                        id={2}>{quiz.answer_2}</button>
                <button className="answer-btn" onClick={e => this.onAnswerClick(e, quiz.indexOfRightAnswer)}
                        id={3}>{quiz.answer_3}</button>
            </div>
        );
    }

    /**
     *This part is barrowed from a lecture made by Andrea Arcuri
     * https://github.com/arcuri82/pg6300/blob/master/les01/quiz/code.js*/
    randomNewQuiz() {
        let currentQuizIndex = this.state.quizIndex;
        let index = Math.floor(Math.random() * quizzes.length);
        if (index === currentQuizIndex) {
            index = (index + 1) % quizzes.length;
        }

        currentQuizIndex = index;
        return index;
    }

    render() {

        let index = this.state.quizIndex;

        const quiz = quizzes[index];

        return (
            <div className={"container"}>
                <MyHomeLink/>
                <h1 className="title">Quizmaster</h1>
                <div className="gameBoard">
                    {this.displayQuiz(quiz)}
                </div>
            </div>
        );
    }
}








