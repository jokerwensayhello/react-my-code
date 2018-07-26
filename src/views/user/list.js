import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Avatar, Card ,List} from "antd";

export default class UserReplyList extends Component {
    render() {

        const {title, data ,loading} = this.props;
        console.log(data[0]);
        
        return (
            <Card
                title={title}
                loading={loading}
                type="inner"
            >
                <List
                    dataSource={data}
                    renderItem={(item) => (
                        <List.Item key={item.id} className="user-reply-item">  
                            <div className="reply-item-info">
                                <Avatar src={item.author.avatar_url} />
                                <Link className="user-loginname" to={"/user/"+item.author.loginname}>{item.author.loginname}</Link>
                                <h4><Link to={"/details/"+item.id}>{item.title}</Link></h4>
                            </div>
                            <p>最后参与时间：{item.last_reply_at.substring(0,10)}</p>
                        </List.Item>
                    )}
                ></List>
            </Card>
        )
    }
}