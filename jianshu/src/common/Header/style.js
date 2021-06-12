import styled from "styled-components";
import logo from '../../assets/img/logo.png';

export const HeaderWrapper = styled.div`
    position: relative;
    height: 56px;
    box-sizing: border-box;
    border: 1px solid rgb(231,231,231);
`;

export const Logo = styled.a.attrs({
    href: '/'
})`
    position: absolute;
    left: 0;
    top: 0;
    width: 100px;
    display: block;
    height: 56px;
    background: url(${logo});
    background-size: contain;
`;

export const Nav = styled.div`
    width: 960px;
    padding-right: 70px;
    box-sizing: border-box;
    height: 100%;
    margin: 0 auto;
`

export const NavItem = styled.div`
    height: 100%;
    line-height: 56px;
    padding: 0 20px;
    font-size: 16px;
    color: #333;
    &.left{
        float: left;
    }
    &.right{
        float: right;
        color: #969696;
    }
    &.active{
        color: #ea6f5a;
    }
`;


export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`
    width: 160px;
    height: 38px;
    padding: 0 20px;
    margin-top: 9px;
    margin-left: 20px;
    box-sizing: border-box;
    border: none;
    outline: none;
    font-size: 14px;
    border-radius: 19px;
    background: #eee;
    &.focused{
        width: 240px;
    }
    &::placeholer{
        color: #999;
    }
`;

export const SearchInfo = styled.div`
    width: 200px;
    position: absolute;
    left: 20px;
    top: 56px;
    padding: 5px 20px;
    box-shadow: 0 0 8px rgba(0,0,0,.2);
`;


export  const SearchInfoTitle = styled.div`
    margin: 15px 0;
    line-height: 20px;
    font-size: 14px;
    color: #969696;
`;

export const SearchInfoSwitch = styled.div`
    float: right;
    font-size: 13px;
    cursor: pointer;
`;

export const SearchInfoList = styled.div`
    overflow: hidden;
`;

export const SearchInfoListItem = styled.a`
    display: inline-block;
    cursor: pointer;
    margin: 5px;
    line-height: 20px;
    padding: 0 5px;
    font-size: 12px;
    border: 1px solid #ddd;
    color: #787878;
    border-radius: 3px;
`;


export const NavSearchWrapper = styled.div`
    float: left;
    position: relative;
    .slide-enter{
        transition: all .5s;
    }
    .slide-enter-active{
        width: 240px;
    }
    .slide-exit{
        transition: all .5s;
    }
    .slide-exit-active{
        width: 160px;
    }
    .iconfont{
        position: absolute;
        right: 5px;
        bottom: 5px;
        border-radius: 15px;
        width: 30px;
        line-height: 30px;
        text-align: center;
        font-size: 15px;
        &.focused{
            background: #777;
            color: #fff;
        }
    }
`;


export const Addition = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    height: 56px;
`;

export const Button = styled.button`
    float: right;
    margin-top: 9px;
    margin-right: 20px;
    padding: 0 20px;
    line-height: 38px;
    border-radius: 19px;
    font-size: 14px;
    border: 1px solid #ec6149;
    outline: none;
    cursor: pointer;
    &.reg{
        color: #ec6149;
        background: #fff;
    }
    &.article{
        color: #fff;
        background: #ec6149;
    }
`;