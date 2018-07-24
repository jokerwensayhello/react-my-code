import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {Col,Row,Menu} from 'antd';
import MainNav from '../../components/main_nav';
import List from './index_list';

class Index extends Component {
    render(){
        // console.log(this.props.match.params.id)
        return (
            <Row className="wrap">
                <Col md={6} xs={0}>
                    <MainNav 
                        id="main-nav"
                        mode="vertical"
                    />
                </Col>
                <Col md={0} xs={24}>
                    <MainNav 
                        id="main-xs-nav"
                        mode="horizontal"
                    />
                </Col>
                <Col md={18} xs={24} id="main-content">
                    <List ListCategory={this.props.match.params.id}/>
                </Col>

            </Row>
        )
    }
}

export default Index;