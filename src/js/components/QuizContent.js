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

            <div>
                <h1>{this.props.question && this.props.question.title}</h1>
                <p>{this.props.question && this.props.question.text}</p>

                {this.props.question && this.props.question.options.map((option,i) => (
                    <div id={option.id} key={i} onClick={this.checkAnswer.bind(this, option.id)} >
                        <p>{option.text}</p>
                    </div>
                    )
                )}

                <button onClick={this.props.wrongAnswer}>Skip</button>

            </div>
        )
    }
}

export default QuizContent;