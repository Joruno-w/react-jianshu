import {combineReducers} from 'redux-immutable';
import {headerReducer} from "../common/Header/store";
import {HomeReducer} from "../pages/Home/store";
import {DetailReducer} from "../pages/Detail/store";
import {LoginReducer} from "../pages/login/store";

export default combineReducers({
   header: headerReducer,
   Home: HomeReducer,
   Detail: DetailReducer,
   Login: LoginReducer
});