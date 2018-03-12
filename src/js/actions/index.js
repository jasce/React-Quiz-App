const FETCHED_QUESTIONS = 'fetched_questions'

const fetchQuestions = (data) => {
    return {
        type: FETCHED_QUESTIONS,
        data: data
    }
}


export const fetchQuestionsFromAPI = () => {
    let questions = [];
    return (dispatch) => {
        fetch('https://s3-ap-southeast-1.amazonaws.com/grow-fit-stage/uploads/quizapp/quiz.json', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        })
        .then((response) => {
            response.json().then((data) => {
                Object.entries(data).map((obj, i) => {
                    questions.push(obj[1]);
                })
                dispatch(fetchQuestions(questions));
            })
        })
        .catch((error) => {
            console.error(error);
        })
    }
}