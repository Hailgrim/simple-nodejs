import React from 'react';
import { render } from 'react-dom';
import { compose, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import './../scss/style.scss';
//import { forbiddenWordsMiddleware } from './redux/middleware';
import { sagaWatcher } from './redux/sagas';
import { rootReducer } from './redux/rootReducer';
import Application from './Application';

const saga = createSagaMiddleware();
const store = createStore(rootReducer, compose(
	applyMiddleware(
		thunk,
		//forbiddenWordsMiddleware,
		saga
	)
));
saga.run(sagaWatcher);

const app = (
	<Provider store={store}>
		<Application />
	</Provider>
);

render(app, document.getElementById('root'));