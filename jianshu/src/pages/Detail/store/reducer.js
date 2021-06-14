import {fromJS} from "immutable";
import {actionTypes} from './';

const defaultState = fromJS({
    title: "",
    content: ""
});

function reducer(state = defaultState,{type,title,content}){
    switch (type){
        case actionTypes.GET_DETAIL:
            return state.merge({
                title,
                content
            })
        default:
            return state;
    }
}

export default reducer;