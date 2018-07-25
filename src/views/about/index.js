import React,{Component} from 'react';
import aboutData from './data';
import PublicCard from "../../components/public_card";

class About extends Component {
    render(){
        return (
            <div className="wrap about-card" >
            {
                aboutData.map((item,index) => (
                    <PublicCard itemInfo={ item } key={index} />
                ))
            }
            </div>
        )
    }
}

export default About;