import axios from "axios";
import {actionTypes} from './';

const getDetailCreator = (title,content)=>({
    type: actionTypes.GET_DETAIL,
    title,
    content
})

export const getDetail = (id)=>{
    return dispatch=>{
        axios.get('/api/detail.json?id' + id).then(res=>{
            const {title,content} = res.data.data;
            dispatch(getDetailCreator(title,content))
        }).catch(err=>{
            console.log(err);
        })
    }
}