import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {List,Avatar} from 'antd';
import { connect } from "react-redux";
import articleDate from './data';
import Tag from '../../components/text_tag';

class Index extends Component {
    render(){
        let articleDateCategory = [];
        articleDate.data.forEach((item,index) => {
            if(this.props.ListCategory === "all"){
                articleDateCategory = articleDate.data;
            }else if(this.props.ListCategory === "good" && item.good ){
                articleDateCategory.push(item);
            }else{
                if (item.tab === this.props.ListCategory){
                    articleDateCategory.push(item);
                }
            }
        });
        console.log(this.props);
        
        return (
            <List
                loading={false}
                dataSource={articleDateCategory}
                renderItem={item => (<List.Item
                    actions={[
                        "回复："+item.reply_count,
                        "访问："+item.visit_count
                    ]}
                >
                    <List.Item.Meta
                        avatar={<Avatar src={item.author.avatar_url} />}
                        title={<Link to={"/details/"+item.id}><Tag itemInfo={item} />{item.title}</Link>}
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

export default connect(state => state.list)(Index);