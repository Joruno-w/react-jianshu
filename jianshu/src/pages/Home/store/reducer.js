import {fromJS} from "immutable";
import {actionTypes} from './index';

const defaultState = fromJS({
    articleList: [],
    recommendList: [],
    show: false
});

function reducer(state = defaultState,{type,payload}){
    switch (type){
        case actionTypes.CHANGE_HOME:
            return state.merge({
                articleList: fromJS(payload.articleList),
                recommendList: fromJS(payload.recommendList),
            });
        case actionTypes.GET_MORE_LIST:
            return state.set('articleList',state.get('articleList').concat(payload))
        case actionTypes.TOGGLE_SCROLL_TOP_SHOW:
            return state.set('show',payload)
        default:
            return state;
    }
}

export default reducer;