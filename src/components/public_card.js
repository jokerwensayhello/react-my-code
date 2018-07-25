import React, { Component } from "react";
import { Card } from "antd";


export default class PublicCard extends Component {
    render() {
        return (
            <Card
                title={this.props.itemInfo.title}
                type="inner"
            >
                <div
                    dangerouslySetInnerHTML={{
                        __html: this.props.itemInfo.content
                    }}
                >
                </div>
            </Card>
        )
    }

}
