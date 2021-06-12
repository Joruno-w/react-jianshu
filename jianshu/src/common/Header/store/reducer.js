import * as actionTypes from './actionTypes';
import {fromJS} from "immutable";

const defaultState = fromJS({
    focused: false,
    list: [],
    page: 1,
    totalPage: 1,
    mouseIn: false
})

function reducer(state = defaultState,{type,payload}){
    switch (type){
        case actionTypes.SEARCH_BLUR:
            return state.set('focused',false);
        case actionTypes.SEARCH_FOCUS:
            return state.set('focused',true);
        case actionTypes.CHANGE_LIST:
            return state.merge({
                ...payload
            })
        case actionTypes.MOUSE_ENTER:
            return state.set('mouseIn',true);
        case actionTypes.MOUSE_LEAVE:
            return state.set('mouseIn',false)
        case actionTypes.CHANGE_PAGE:
            return state.set('page',payload);
        default:
            return state;
    }
}

export default reducer;