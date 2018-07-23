import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {List,Avatar} from 'antd';
import articleDate from './data';
import Tag from '../../components/text_tag';

class Index extends Component {
    render(){
        console.log(articleDate.data);
        return (
            <List
                loading={false}
                dataSource={articleDate.data}
                renderItem={item => (<List.Item
                    actions={[
                        "回复："+item.reply_count,
                        "访问："+item.visit_count
                    ]}
                >
                    <List.Item.Meta
                        avatar={<Avatar src={item.author.avatar_url} />}
                        title={<Link to={"/details/"+item.id}><Tag color="magenta" msg="置顶" />{item.title}</Link>}
                        description={
                            <p className="article-item-des">
                                <Link to={"/user/"+item.author.loginname}>{item.author.loginname}</Link>
                                发表于：{item.create_at.substring(0,10)}
                            </p>
                        }
                    />
                </List.Item>)}
            >

            </List>
        )
    }
}

export default Index;