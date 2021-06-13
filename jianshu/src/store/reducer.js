import {combineReducers} from 'redux-immutable';
import {headerReducer} from "../common/Header/store";
import {HomeReducer} from "../pages/Home/store";

export default combineReducers({
   header: headerReducer,
   Home: HomeReducer,
});