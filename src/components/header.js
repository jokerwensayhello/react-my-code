import React, { Component } from "react";
import {Layout,Col,Row,Divider,Dropdown,Button,Icon} from "antd";
import Nav from './nav';

class Header extends Component {
    render (){
        return (
            <Layout.Header>
                <Row className="wrap">
                    <Col md={6} xs={18}>
                        <h1 id="logo">MyNode</h1>
                    </Col>
                    <Col md={18} xs={0}>
                        <Divider type="vertical" className="header-divider" />
                        <Nav mode="horizontal" id="header-nav" />
                    </Col>
                    <Col md={0} xs={6}>
                        <Dropdown 
                            overlay={<Nav mode="vertical" id="xsNav" />}
                            trigger={["click","touchend"]}
                            placement="bottomRight"
                        >
                            <Button><Icon type="bars"></Icon></Button>
                        </Dropdown>
                    </Col>
                </Row>
            </Layout.Header>
        )
    }
}

export default Header;