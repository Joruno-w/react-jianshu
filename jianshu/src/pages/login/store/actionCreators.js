import axios from "axios";
import {actionTypes} from './';

const changeLogin = ()=>({
    type: actionTypes.CHANGE_LOGIN,
    login: true
});

export const loginOut = ()=>({
    type: actionTypes.LOGIN_OUT,
    login: false
})

export const login = (name,pwd)=>{
    return dispatch=>{
        axios.get('/api/login.json').then(res=>{
            const result = res.data.data;
            if(result){
                dispatch(changeLogin())
            }else{
                alert('尚未登录!');
            }
        }).catch(err=>{
            console.log(err);
        })
    }
}