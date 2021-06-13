import styled from "styled-components";

export const HomeWrapper = styled.div`
    overflow: hidden;
    width: 960px;
    margin: 0 auto;
`

export const HomeLeft = styled.div`
    margin-left: 15px;
    padding:20px;
    width: 625px;
    float: left;
`;

export const HomeRight = styled.div`
    width: 240px;
    margin-top: 20px;
    float: right; 
`;

export const ListItem = styled.div`
    overflow: hidden;
    padding: 20px 0;
    border-bottom: 1px solid #dcdcdc;
    .pic{
        float: right;
        width: 125px;
        height: 100px;
        border-radius: 10px;
    }
`;

export const ListInfo = styled.div`
    width: 500px;
    float: left;
    .title{
        line-height: 27px;
        font-size: 18px;
        font-weight: bold;
        color: #333;
    }
    .desc{
        line-height: 24px;
        font-size: 13px;
        color: #999;
    }
`;

export const RecommendList = styled.div`
    width: 280px;
`;

export const RecommendItem = styled.div`
    width: 280px;
    height: 50px;
    margin-bottom: 6px;
    background: url(${(props)=>props.imgUrl});
    background-size: contain;
`;

export const MoreList = styled.div`
    height:25px;
    line-height: 25px;
    margin: 20px auto 60px;
    padding: 10px 15px;
    text-align: center;
    font-size: 15px;
    border-radius: 20px;
    color: #fff;
    cursor: pointer;
    background-color: #a5a5a5;
`;


export const BackToTop = styled.div`
    width: 60px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    position: fixed;
    right: 80px;
    bottom: 80px;
    border-radius: 50%;
    background: hotpink;
    font-size: 10px;
    cursor: pointer;
    color: #fff;
`;