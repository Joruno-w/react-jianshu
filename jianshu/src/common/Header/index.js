import React from 'react';
import {CSSTransition} from 'react-transition-group';
import {connect} from "react-redux";
import {actionCreators} from "./store";
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



class Header extends React.Component{
    getArea = ()=>{
        const {focused,list,handleMouseEnter,handleMouseLeave,mouseIn,page,totalPage,handlePageChange} = this.props;
        const newList = [];
        const originList = list.toJS();
        if (originList.length){
            for (let i = (page-1)*10;i < page * 10;i ++){
                newList.push(<SearchInfoListItem key={originList[i]}>{originList[i]}</SearchInfoListItem>)
            }
        }
        if(focused || mouseIn){
            return(
                <SearchInfo
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <SearchInfoTitle>
                        搜索
                        <SearchInfoSwitch onClick={()=>handlePageChange(page,totalPage)}>换一批</SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {newList}
                    </SearchInfoList>
                </SearchInfo>
            )
        }else{
            return null;
        }
    }
    render() {
        const {focused,handleBlur,handleFocus} = this.props;
        return(
            <HeaderWrapper>
                <Logo/>
                <Nav>
                    <NavItem className='left'>首页</NavItem>
                    <NavItem className='left'>下载App</NavItem>
                    <NavItem className='right'>登录</NavItem>
                    <NavItem className='right'>
                        <i className='iconfont'>&#xe636;</i>
                    </NavItem>
                    <NavSearchWrapper>
                        <CSSTransition timeout={500} in={focused} classNames='slide'>
                            <NavSearch
                                className={focused ? 'focused' : ''}
                                onBlur={handleBlur}
                                onFocus={handleFocus}
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

const mapStateToProps = state=>{
    return{
        focused: state.getIn(['header','focused']),
        list: state.getIn(['header','list']),
        mouseIn: state.getIn(['header','mouseIn']),
        page: state.getIn(['header','page']),
        totalPage: state.getIn(['header','totalPage'])
    }
}

const mapDispatchToProps = dispatch=>{
    return{
        handleBlur(){
            dispatch(actionCreators.searchBlurCreator());
        },
        handleFocus(){
            dispatch(actionCreators.getList());
            dispatch(actionCreators.searchFocusCreator());
        },
        handleMouseEnter(){
            dispatch(actionCreators.mouseEnterCreator())
        },
        handleMouseLeave(){
            dispatch(actionCreators.mouseLeaveCreator())
        },
        handlePageChange(page,totalPage){
            if (page < totalPage){
                dispatch(actionCreators.changePage(page + 1))
            }else{
                dispatch(actionCreators.changePage(1))
            }
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);