import React, { Component } from "react";
import { Tag } from "antd";
const tab = {
    top: {
        color: "magenta",
        msg: "置顶",
    },
    good: {
        color: "geekblue",
        msg: "精华",
    },
    job: {
        color: "cyan",
        msg: "招聘",
    },
    share: {
        color: "purple",
        msg: "分享",
    },
    ask: {
        color: "green",
        msg: "问答",
    },
    dev: {
        color: "link",
        msg: "测试"
    }
}

export default class TextTag extends Component {
    render() {
        
        let itemInfo = this.props.itemInfo;
        let itemTag = itemInfo.top ? "top" : itemInfo.good ? "good" : itemInfo.tab;
        let TagInfo = tab[itemTag];

        return (
            <Tag color={TagInfo.color}>{TagInfo.msg}</Tag>
        )
    }

}
