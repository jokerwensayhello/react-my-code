import React,{Component} from 'react';
import ArticleDetials from "./article_details";
import detailsData from "./data";

export default class Details extends Component {
    render(){
        const loading = false;
        return (
            <div className="wrap">
                <ArticleDetials loading={loading} detailsData={detailsData} />
            </div>
            
        )
    }
}
