import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchQuestionsFromAPI } from '../actions';
import QuizContent from './QuizContent';

class Quiz extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            curr_index: 0,
            score: 0
        }

        this.wrongAnswer = this.wrongAnswer.bind(this);
        this.correctAnswer = this.correctAnswer.bind(this);
        this.nextQuestion = this.nextQuestion.bind(this);
    }

    componentDidMount() {
        this.props.fetchQuestionsFromAPI();
    }

    wrongAnswer() {
        this.nextQuestion();
    }

    correctAnswer() {
        let score = this.state.score;
        this.setState({
            score: score+1
        }, () => {
            this.nextQuestion();
        })

    }

    nextQuestion() {
        let newIndex = this.state.curr_index;
        this.setState({
            curr_index: newIndex+1
        })
    }


    render() {
        var length = this.props.quiz && this.props.quiz.length;
        return (
            <div>
                <h1>Welcome to Quiz Page</h1>

                {this.state && this.state.curr_index < length ? (
                    <QuizContent
                        question={this.props.quiz[this.state.curr_index]}
                        nextQuestion={this.nextQuestion}
                        correctAnswer={this.correctAnswer}
                        wrongAnswer={this.wrongAnswer}
                    />
                ) : (
                    <div>
                        <h1>Test Completed: </h1>
                        <p>You have answered {this.state.score} questions correctly!</p>
                    </div>
                )}

            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        quiz: state.quiz
    };
}

export default connect(mapStateToProps,{
    fetchQuestionsFromAPI
})(Quiz);