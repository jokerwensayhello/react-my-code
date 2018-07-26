import React,{Component} from 'react';
import { Avatar,Col,Row } from "antd";
import userData from "./data";
import UserReplyList from "./list";


export default class User extends Component {
    render(){
        const {avatar_url,loginname,create_at,score,recent_topics,recent_replies} = userData.data;
        const loading = false;
        return (
            <div className="wrap">
                <Avatar src={avatar_url} className="user-avatar" />
                <Row className="user-info">
                    <Col md={8}>用户名：<a href="javascript:;">{loginname}</a></Col>
                    <Col md={8}>积分：<a href="javascript:;">{score}</a></Col>
                    <Col md={8}>创建时间：<a href="javascript:;">{create_at.substring(0, 10)}</a></Col>
                </Row>
                <UserReplyList title="最近创造的话题" data={recent_topics} loading={loading} />
                <UserReplyList title="最近回复的话题" data={recent_replies} loading={loading} />
            </div>
        );
    }
}

