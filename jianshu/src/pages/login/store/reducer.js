import {fromJS} from "immutable";
import {actionTypes} from './index';

const defaultState = fromJS({
    login: false
});

function reducer(state = defaultState, {type,login}){
    switch (type){
        case actionTypes.CHANGE_LOGIN:
            return state.set('login',login);
        case actionTypes.LOGIN_OUT:
            return state.set('login',login);
        default:
            return state;
    }
}

export default reducer;