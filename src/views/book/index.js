import React,{Component} from 'react';
import bookData from "./data";
import PublicCard from "../../components/public_card";

class Book extends Component {
    render(){
        return (
            <div className="wrap">
                {
                    bookData.map((item,index) => (
                        <PublicCard itemInfo = {item} key={index} />
                    ))
                }
            </div>
        )
    }
}

export default Book;