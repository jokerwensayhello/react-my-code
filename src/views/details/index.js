import React,{Component} from 'react';
import ArticleDetials from "./article_details";
import ReplyList from "./reply_list";
import detailsData from "./data";

export default class Details extends Component {
    render(){        
        const loading = false;
        return (
            <div className="wrap">
                <ArticleDetials loading={loading} detailsData={detailsData} />
                <ReplyList replylist={detailsData.data.replies} replycount={detailsData.data.reply_count} loading={loading} />
            </div>
            
        )
    }
}
