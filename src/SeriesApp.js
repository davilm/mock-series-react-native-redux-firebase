import React from 'react';
import Router from './Router';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import rootReducer from './reducers';

const store = createStore(rootReducer, applyMiddleware(reduxThunk));

const SeriesApp = props => (
    <Provider store={store}>
         <Router />
    </Provider>
   
);

export default SeriesApp;