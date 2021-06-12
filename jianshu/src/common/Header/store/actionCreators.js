import  * as actionTypes from './actionTypes';
import axios from "axios";
import {fromJS} from "immutable";

const changeList = (data)=>({
    type: actionTypes.CHANGE_LIST,
    payload:{
        list: fromJS(data),
        totalPage: data.length / 10 | 0
    }
})

export const searchBlurCreator = ()=>({
    type: actionTypes.SEARCH_BLUR
})

export const searchFocusCreator = ()=>({
    type: actionTypes.SEARCH_FOCUS
})

export const mouseEnterCreator = ()=>({
    type: actionTypes.MOUSE_ENTER
})

export const mouseLeaveCreator = ()=>({
    type: actionTypes.MOUSE_LEAVE
})

export const changePage = (newPage)=>({
    type: actionTypes.CHANGE_PAGE,
    payload: newPage
})

export const getList = ()=>{
    return (dispatch)=>{
        axios.get('/api/searchList.json').then(res=>{
            dispatch(changeList(res.data.data));
        }).catch((err)=>{
            console.log(err);
        })
    }
}