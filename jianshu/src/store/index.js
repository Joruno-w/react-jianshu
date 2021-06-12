import {applyMiddleware, createStore} from "redux";
import thunk from 'redux-thunk';
import reducer from './reducer';

// const composeEnhancers = (window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) || compose;
const store = createStore(reducer,applyMiddleware(thunk));

export default store;