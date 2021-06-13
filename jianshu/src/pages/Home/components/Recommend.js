import React, {Component} from 'react';
import {connect} from "react-redux";
import {RecommendItem, RecommendList} from "../style";

class Recommend extends Component {
    render() {
        return (
            <RecommendList>
                {this.props.recommendList.map(it=>(
                    <RecommendItem imgUrl={it.get('imgUrl')} key={it.get('id')}/>
                ))}
            </RecommendList>
        );
    }
}

const mapStateToProps = state=>({
    recommendList: state.getIn(['Home','recommendList'])
});

export default connect(mapStateToProps,null)(Recommend);