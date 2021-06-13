import axios from "axios";
import * as actionTypes from './actionTypes';
import {fromJS} from "immutable";

const HomeDataCreator = (payload)=>({
    type: actionTypes.CHANGE_HOME,
    payload,
})

export const changeHomeData = ()=>{
    return (dispatch)=>{
        axios.get('/api/Home.json').then(res=>{
            dispatch(HomeDataCreator(res.data.data));
        }).catch(err=>{
            console.log(err);
        });
    }
}

const moreListCreator = (payload)=>({
    type: actionTypes.GET_MORE_LIST,
    payload: fromJS(payload),
});

export const getMoreList = ()=>{
    return (dispatch)=>{
        axios.get('/api/HomeList.json').then(res=>{
            dispatch(moreListCreator(res.data.data));
        }).catch(err=>{
            console.log(err);
        })
    }
}

export const toggleScrollTop = (show)=>({
    type: actionTypes.TOGGLE_SCROLL_TOP_SHOW,
    payload: show
})