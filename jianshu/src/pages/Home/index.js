import React, {Component} from 'react';
import {BackToTop, HomeLeft, HomeRight, HomeWrapper, MoreList} from "./style";
import List from "./components/List";
import Recommend from "./components/Recommend";
import Writer from "./components/Writer";
import {connect} from "react-redux";
import {actionCreators} from '../Home/store';

class Home extends Component {
    handleScrollTop = ()=>{
        window.scrollTo(0,0);
    }
    render() {
        const {getMoreList,show} = this.props;
        console.log(show);
        return (
            <HomeWrapper>
                <HomeLeft>
                    <List/>
                    <MoreList onClick={getMoreList}>加载更多</MoreList>
                </HomeLeft>
                <HomeRight>
                    <Recommend/>
                    <Writer/>
                </HomeRight>
                {show ? <BackToTop onClick={this.handleScrollTop}>回到顶部</BackToTop> : null}
            </HomeWrapper>
        );
    }
    componentDidMount() {
        this.props.changeHomeData();
        window.addEventListener('scroll',this.props.changeScrollTop)
    }
    componentWillUnmount() {
        window.removeEventListener('scroll',this.props.changeScrollTop);
    }
}


const mapStateToProps = state=>({
    show: state.getIn(['Home','show'])
})


const mapDispatchToProps = (dispatch)=>({
    changeHomeData(){
        dispatch(actionCreators.changeHomeData());
    },
    getMoreList(){
        dispatch(actionCreators.getMoreList());
    },
    changeScrollTop(){
        if(document.documentElement.scrollTop > 100){
            dispatch(actionCreators.toggleScrollTop(true));
        }else{
            dispatch(actionCreators.toggleScrollTop(false));
        }
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(Home);