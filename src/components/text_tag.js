import React, { Component } from "react";
import {Tag } from "antd";

export default class TextTag extends Component {
    
    render (){
        let {color,msg} = this.props;
        return (
            <Tag color={color}>{msg}</Tag>
        )
    }

}
