import React, {Component} from 'react';
import {connect} from "react-redux";
import {ListInfo, ListItem} from "../style";
import {Link} from "react-router-dom";

class List extends Component{
    render() {
        const {articleList} = this.props;
        const list = articleList.toJS();
        return (
            <div>
                {list.map((it,i)=>(
                    <Link to='/detail' key={i}>
                        <ListItem>
                            <img className='pic' src={it.imgUrl} alt=""/>
                            <ListInfo>
                                <h3 className='title'>{it.title}</h3>
                                <br/>
                                <p className='desc'>{it.desc}</p>
                            </ListInfo>
                        </ListItem>
                    </Link>
                ))}
            </div>
        );
    }
}

const mapStateToProps = state=>({
    articleList: state.getIn(['Home','articleList'])
});

export default connect(mapStateToProps,null)(List);