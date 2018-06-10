const initialState = {
    quiz: {}
}

export const getQuestions = (state, action) => {
    if (typeof state === 'undefined') {
        return initialState
    }

    switch(action.type) {
        case 'fetched_questions':
            return {
                quiz: action.data
            }
        default:
            return initialState;
    }
    return initialState;
}

