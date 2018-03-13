import React from 'react';


class QuizContent extends React.Component {


    constructor(props) {
        super(props);
    }

    checkAnswer(id) {
        if (this.props.question.answer_id === id) {
            this.props.correctAnswer();
        } else {
            this.props.wrongAnswer();
        }
    }

    render() {
        return (

            <div className="row">
                <div className="offset-3 col-6 quiz-box">
                    <h1>{this.props.question && this.props.question.title}</h1>
                    <p>{this.props.question && this.props.question.text}</p>

                    {this.props.question && this.props.question.options.map((option,i) => (
                        <div id={option.id} key={i} onClick={this.checkAnswer.bind(this, option.id)} >
                            <p className="quiz-option">{option.text}</p>
                        </div>
                        )
                    )}

                <button className="pull-right btn-skip" type="button" onClick={this.props.wrongAnswer}>Skip</button>
                </div>

            </div>
        )
    }
}

export default QuizContent;