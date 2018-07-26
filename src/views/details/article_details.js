import React, { Component } from 'react';
import { Card, Avatar } from "antd";
import { Link } from "react-router-dom";
import TextTag from "../../components/text_tag";



export default class ArticleDetials extends Component {
    render() {
        const { loading, detailsData} = this.props;
        const titleNode = (
            <div>
                <h1>{detailsData.data.title}</h1>
                <div>
                    <TextTag itemInfo={detailsData.data} />
                    <Link to={"/user/" + detailsData.data.author.loginname}>
                        <Avatar src={detailsData.data.author.avatar_url} />
                        {detailsData.data.author.loginname}
                    </Link>
                    发表于：{detailsData.data.create_at.substring(0, 10)}
                </div>
            </div>
        )
        
        return (
            <div>
                <Card
                    title={titleNode}
                    loading={loading}
                >
                    <div
                        dangerouslySetInnerHTML={{
                            __html: detailsData.data.content
                        }}
                    ></div>
                </Card>
            </div>
        )
    }
}