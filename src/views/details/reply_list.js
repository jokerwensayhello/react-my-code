import React, { Component } from 'react';
import { Card, Avatar, List, Divider } from "antd";
import { Link } from "react-router-dom";

export default class ReplyList extends Component {
    render() {
        const {replylist,replycount,loading} = this.props;
        console.log(replylist[0])
        return (
            <Card
                title = {replycount + "条回复"}
                type = "inner"
                loading={loading}
            >
                <List
                    dataSource={replylist}
                    itemLayout="vertical"
                    renderItem={(item)=>(
                        <List.Item
                            extra={item.ups.length != 0? "共"+item.ups.length+"人认为这条评论很赞" : ""}
                        >
                            <List.Item.Meta
                                
                                avatar={ <Avatar src={item.author.avatar_url} />  }
                                description={
                                    <div className="reply-item">
                                        <Link to={"/user/"+item.author.loginname}>{item.author.loginname}</Link>
                                        发表于：{item.create_at.substring(0,10)}
                                    </div>
                                }
                            />
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: item.content
                                }}
                            ></div>
                        </List.Item>   
                    )}
                ></List>
            </Card>
        )
    }
}