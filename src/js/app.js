import React from 'react';
import { render } from 'react-dom';
import Root from './containers/Root';
import { getQuestions } from './reducers/quizReducer';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

let store = createStore(
    getQuestions,
    applyMiddleware(ReduxThunk)
);


render (
    <Root store={store} />,
    document.getElementById('app')
);