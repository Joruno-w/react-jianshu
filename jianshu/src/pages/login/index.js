import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from "react-redux";
import {Button, Input, LoginBox, LoginWrapper,Header} from "./style";
import {actionCreators} from './store'

class Login extends Component {
    render() {
        const {loginStatus,login} = this.props;
        if(!loginStatus){
            return (
                <LoginWrapper>
                    <LoginBox>
                        <Header>登录</Header>
                        <Input placeholder="请输入用户名" innerRef={(input)=>{this.name = input}}/>
                        <Input placeholder="请输入密码" innerRef={(input)=>{this.pwd = input}}/>
                        <Button onClick={()=>login(this.name.value,this.pwd.value)}>登录</Button>
                    </LoginBox>
                </LoginWrapper>
            );
        }else{
            return <Redirect to='/'/>
        }
    }
}

const mapStateToProps = state=>({
    loginStatus: state.getIn(['Login','login'])
});

const mapDispatchToProps = dispatch=>({
    login(name,pwd){
        dispatch(actionCreators.login(name,pwd));
    }
})


export default connect(mapStateToProps,mapDispatchToProps)(Login);