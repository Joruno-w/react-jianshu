import {combineReducers} from 'redux-immutable';
import {headerReducer} from "../common/Header/store";

export default combineReducers({
   header: headerReducer
});