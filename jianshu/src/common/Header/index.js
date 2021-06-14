import React from 'react';
import {CSSTransition} from 'react-transition-group';
import {connect} from "react-redux";
import {actionCreators} from "./store";
import {actionCreators as LoginActionCreators} from '../../pages/login/store';
import {Link} from "react-router-dom";
import {
    Addition,
    Button,
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    NavSearchWrapper,
    SearchInfo, SearchInfoList, SearchInfoListItem, SearchInfoSwitch,
    SearchInfoTitle
} from './style';


class Header extends React.Component {
    getArea = () => {
        const {focused, list, handleMouseEnter, handleMouseLeave, mouseIn, page, totalPage, handlePageChange} = this.props;
        const newList = [];
        const originList = list.toJS();
        if (originList.length) {
            for (let i = (page - 1) * 10; i < page * 10; i++) {
                newList.push(<SearchInfoListItem key={originList[i]}>{originList[i]}</SearchInfoListItem>)
            }
        }
        if (focused || mouseIn) {
            return (
                <SearchInfo
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <SearchInfoTitle>
                        搜索
                        <SearchInfoSwitch onClick={() => handlePageChange(page, totalPage)}>换一批</SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {newList}
                    </SearchInfoList>
                </SearchInfo>
            )
        } else {
            return null;
        }
    }

    render() {
        const {list, focused, handleBlur, handleFocus,login,loginOut} = this.props;
        return (
            <HeaderWrapper>
                <Link to='/'>
                    <Logo/>
                </Link>
                <Nav>
                    <NavItem className='left'>首页</NavItem>
                    <NavItem className='left'>下载App</NavItem>
                    {login ? <NavItem className='right' onClick={loginOut}>退出</NavItem> : <Link to='/login'><NavItem className='right'>登录</NavItem></Link>}
                    <NavItem className='right'>
                        <i className='iconfont'>&#xe636;</i>
                    </NavItem>
                    <NavSearchWrapper>
                        <CSSTransition timeout={500} in={focused} classNames='slide'>
                            <NavSearch
                                className={focused ? 'focused' : ''}
                                onBlur={handleBlur}
                                onFocus={() => handleFocus(list)}
                            />
                        </CSSTransition>
                        <i className={focused ? 'iconfont focused' : 'iconfont'}>&#xe617;</i>
                        {this.getArea()}
                    </NavSearchWrapper>
                    <Addition>
                        <Button className='article'><i className='iconfont'>&#xe6eb;</i>写文章</Button>
                        <Button className='reg'>注册</Button>
                    </Addition>
                </Nav>
            </HeaderWrapper>
        )
    }
}

const mapStateToProps = state => {
    return {
        focused: state.getIn(['header', 'focused']),
        list: state.getIn(['header', 'list']),
        mouseIn: state.getIn(['header', 'mouseIn']),
        page: state.getIn(['header', 'page']),
        totalPage: state.getIn(['header', 'totalPage']),
        login: state.getIn(['Login','login'])
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleBlur() {
            dispatch(actionCreators.searchBlurCreator());
        },
        handleFocus(list) {
            list.size ===  0 && dispatch(actionCreators.getList());
            dispatch(actionCreators.searchFocusCreator());
        },
        loginOut(){
            dispatch(LoginActionCreators.loginOut());
        },
        handleMouseEnter() {
            dispatch(actionCreators.mouseEnterCreator())
        },
        handleMouseLeave() {
            dispatch(actionCreators.mouseLeaveCreator())
        },
        handlePageChange(page, totalPage) {
            if (page < totalPage) {
                dispatch(actionCreators.changePage(page + 1))
            } else {
                dispatch(actionCreators.changePage(1))
            }
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);